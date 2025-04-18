import seasonsData from "~/data/seasons-flat-data.json";
import episodesData from "~/data/episodes-flat-data.json";
import deathsData from "~/data/deaths-flat-data.json";

// --------------------------------------------------------------

// SEASON DATA

// note:includes 'episodes' using getEpisodes()
// --------------------------------------------------------------

export const getSeason = (seasonNum: number) => {
  const season = seasonsData.find((season) => season.season === seasonNum);
  const episodes = getEpisodes(seasonNum);
  const deaths = deathsData.filter((death) => death.season === seasonNum);
  const kills = deaths.filter((death) => death.isKilled);

  if (!season || !episodes) {
    console.error(`Season ${seasonNum} not found`);
    return null;
  }

  return {
    ...season,
    totalDeaths: deathsData.length,
    totalKills: kills.length,
    totalReacherKills: kills.filter((kill) => kill.killer === "Jack Reacher")
      .length,
    totalEpisodes: episodes.length,
    totalDuration: episodes.reduce(
      (acc, episode) => acc + episode.episodeLength,
      0,
    ),
    avgKills: kills.length / episodes.length,
    avgReacherKills:
      kills.filter((kill) => kill.killer === "Jack Reacher").length /
      episodes.length,
    methods: Object.entries(
      kills
        .map((kill) => kill.method)
        .reduce((acc: Record<string, number>, method) => {
          acc[method] = (acc[method] ?? 0) + 1;
          return acc;
        }, {}),
    )
      .sort((a, b) => b[1] - a[1])
      .map(([method, count]) => ({ method, count })),
    methodLocations: Object.entries(
      kills
        .flatMap((kill) => kill.methodLocation)
        .reduce((acc: Record<string, number>, methodLocation) => {
          acc[methodLocation] = (acc[methodLocation] ?? 0) + 1;
          return acc;
        }, {}),
    )
      .sort((a, b) => b[1] - a[1])
      .map(([methodLocation, count]) => ({ methodLocation, count })),
    weapons: Object.entries(
      kills
        .map((kill) => kill.weapon)
        .reduce((acc: Record<string, number>, weapon) => {
          acc[weapon] = (acc[weapon] ?? 0) + 1;
          return acc;
        }, {}),
    )
      .sort((a, b) => b[1] - a[1])
      .map(([weapon, count]) => ({ weapon, count })),
    deadliestCharacters: Object.entries(
      kills
        .map((kill) => kill.killer)
        .reduce((acc: Record<string, number>, killer) => {
          acc[killer] = (acc[killer] ?? 0) + 1;
          return acc;
        }, {}),
    )
      .sort(([, a], [, b]) => b - a)
      .map(([killer, count]) => ({ killer, count })),
    deadliestEpisodes: Object.entries(
      kills.reduce((acc: Record<number, number>, kill) => {
        const epNum = kill.episode;
        acc[epNum] = (acc[epNum] ?? 0) + 1;
        return acc;
      }, {}),
    )
      .sort(([, a], [, b]) => b - a)
      .map(([episode, count]) => ({ episode: Number(episode), count })),
    episodes: episodes,
  };
};

// --------------------------------------------------------------

// SEASON EPISODES OR EPISODE DATA

// *nested in getSeason()
// --------------------------------------------------------------

export const getEpisodes = (seasonNum: number, episodeNum?: number) => {
  const episodes = episodesData.filter(
    (episode) => episode.season === seasonNum,
  );

  const deaths = deathsData.filter(
    (death) =>
      death.season === seasonNum &&
      (episodeNum ? death.episode === episodeNum : true),
  );

  if (!episodes || !deaths) {
    console.error(`Episodes for season ${seasonNum} not found`);
    return null;
  }

  return episodes.map((episode) => {
    const epsDeaths = deaths.filter(
      (death) => death.episode === episode.episode,
    );
    const epsKills = epsDeaths.filter(
      (kill) => kill.episode === episode.episode && kill.isKilled,
    );

    return {
      ...episode,
      episodeLength: episode.episodeLength,
      totalDeaths: epsDeaths.length,

      totalKills: epsKills.length,
      totalReacherKills: epsKills.filter(
        (kill) =>
          kill.episode === episode.episode && kill.killer === "Jack Reacher",
      ).length,
      methods: Object.entries(
        epsKills.reduce((acc: Record<string, number>, d) => {
          acc[d.method] = (acc[d.method] ?? 0) + 1;
          return acc;
        }, {}),
      )
        .sort(([, a], [, b]) => b - a)
        .map(([method, count]) => ({ method, count })),
      methodLocations: Object.entries(
        epsKills
          .flatMap((kill) => kill.methodLocation)
          .reduce((acc: Record<string, number>, methodLocation) => {
            acc[methodLocation] = (acc[methodLocation] ?? 0) + 1;
            return acc;
          }, {}),
      )
        .sort((a, b) => b[1] - a[1])
        .map(([methodLocation, count]) => ({ methodLocation, count })),
      weapons: Object.entries(
        epsKills.reduce((acc: Record<string, number>, d) => {
          acc[d.weapon] = (acc[d.weapon] ?? 0) + 1;
          return acc;
        }, {}),
      )
        .sort(([, a], [, b]) => b - a)
        .map(([weapon, count]) => ({ weapon, count })),
      deadliestCharacters: Object.entries(
        epsKills.reduce((acc: Record<string, number>, d) => {
          acc[d.killer] = (acc[d.killer] ?? 0) + 1;
          return acc;
        }, {}),
      )
        .sort(([, a], [, b]) => b - a)
        .map(([killer, count]) => ({ killer, count })),
      killsPerMinute: epsKills.length / episode.episodeLength,
    };
  });
};
