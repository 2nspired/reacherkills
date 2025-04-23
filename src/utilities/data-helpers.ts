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

// --------------------------------------------------------------
// REACHER CAREER STATS DATA
// --------------------------------------------------------------
export const getReacherStats = () => {
  const totalDeaths = deathsData.length;
  const totalKills = deathsData.filter((death) => death.isKilled).length;
  const totalSeasons = seasonsData.length;
  const totalEpisodes = episodesData.length;
  const totalDuration = episodesData.reduce(
    (acc, episode) => acc + episode.episodeLength,
    0,
  );

  const totalRK = deathsData.filter(
    (death) => death.isKilled && death.killer === "Jack Reacher",
  ).length;

  const totalRKPerSeason = seasonsData
    .map((season) => {
      const kills = deathsData.filter(
        (death) =>
          death.isKilled &&
          death.killer === "Jack Reacher" &&
          death.season === season.season,
      ).length;

      return {
        season: season.season,
        kills,
      };
    })
    .sort((a, b) => a.season - b.season);

  const totalRKPerEpisode = episodesData
    .map((episode) => {
      const kills = deathsData.filter(
        (death) =>
          death.isKilled &&
          death.killer === "Jack Reacher" &&
          death.season === episode.season &&
          death.episode === episode.episode,
      ).length;

      return {
        season: episode.season,
        episode: episode.episode,
        kills,
      };
    })
    .sort((a, b) => a.season - b.season || a.episode - b.episode);

  let longestKillStreak = 0;
  let currentStreak = 0;

  totalRKPerEpisode.forEach((episode) => {
    if (episode.kills > 0) {
      currentStreak += 1;
      longestKillStreak = Math.max(longestKillStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });

  const weapons = Object.entries(
    deathsData.reduce((acc: Record<string, number>, death) => {
      if (death.weapon && death.isKilled && death.killer === "Jack Reacher") {
        acc[death.weapon] = (acc[death.weapon] ?? 0) + 1;
      }
      return acc;
    }, {}),
  )
    .sort(([, a], [, b]) => b - a)
    .map(([weapon, count]) => ({ weapon, count }));

  // Return the stats object (we'll expand this in later steps)
  return {
    totalDeaths,
    totalKills,
    totalSeasons,
    totalEpisodes,
    totalDuration,
    totalRK,
    totalRKPerEpisode,
    totalRKPerSeason,
    longestKillStreak,
    weapons,
  };
};

// --------------------------------------------------------------
// REACHER METHODS DATA
// --------------------------------------------------------------
// This function returns the methods and method locations used by Jack Reacher
// to kill

export const getReacherMethods = () => {
  const methods = Object.entries(
    deathsData
      .filter((death) => death.isKilled && death.killer === "Jack Reacher")
      .map((death) => death.method)
      .reduce((acc: Record<string, number>, method) => {
        acc[method] = (acc[method] ?? 0) + 1;
        return acc;
      }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .map(([method, kill]) => ({ method, kill }));

  const methodLocations = Object.entries(
    deathsData
      .filter((death) => death.isKilled && death.killer === "Jack Reacher")
      .flatMap((death) => death.methodLocation)
      .reduce((acc: Record<string, number>, methodLocation) => {
        acc[methodLocation] = (acc[methodLocation] ?? 0) + 1;
        return acc;
      }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .map(([methodLocation, kills]) => ({ methodLocation, kills }));

  return { methods: methods, methodLocations: methodLocations };
};

// --------------------------------------------------------------
// REACHER WEAPONS DATA
// --------------------------------------------------------------
export const getReacherWeapons = () => {
  const weapons = Object.entries(
    deathsData
      .filter((death) => death.isKilled && death.killer === "Jack Reacher")
      .map((death) => death.weapon)
      .reduce((acc: Record<string, number>, weapon) => {
        acc[weapon] = (acc[weapon] ?? 0) + 1;
        return acc;
      }, {}),
  )
    .sort(([, a], [, b]) => b - a)
    .map(([weapon, kills]) => ({ weapon, kills }));

  return weapons;
};

// --------------------------------------------------------------
// REACHER KILLS
// --------------------------------------------------------------

export const getReacherKills = () => {
  const episodes = episodesData
    .map((episode) => ({
      season: episode.season,
      episode: episode.episode,
      key: `${episode.season}-${episode.episode}`,
      kills: deathsData.filter(
        (death) =>
          death.isKilled &&
          death.killer === "Jack Reacher" &&
          death.season === episode.season &&
          death.episode === episode.episode,
      ).length,
    }))
    .sort((a, b) => a.season - b.season || a.episode - b.episode);
  return episodes;
};
