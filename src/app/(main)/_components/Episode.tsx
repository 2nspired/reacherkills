import VideoBackground from "./VideoBackground";
import episodesData from "~/data/episodes-flat-data.json";
import deathsData from "~/data/deaths-flat-data.json";

const Episode = ({
  seasonNum,
  episodeNum,
}: {
  seasonNum: number;
  episodeNum: number;
}) => {
  //

  const episode = episodesData.find(
    (episode) => episode.season === seasonNum && episode.episode === episodeNum,
  );
  const deaths = deathsData.filter(
    (death) => death.season === seasonNum && death.episode === episodeNum,
  );

  const deathStats = {
    totalDeaths: deaths.length,
    reacherKills: deaths.filter((death) => death.killer === "Jack Reacher")
      .length,
    mostUsedWeapon: deaths
      .map((death) => death.weapon)
      .reduce((acc: Record<string, number>, weapon) => {
        acc[weapon] = (acc[weapon] ?? 0) + 1; // Use Record and nullish coalescing
        return acc;
      }, {}),
    deadliestCharacter: Object.entries(
      deaths
        .map((death) => death.killer)
        .reduce((acc: Record<string, number>, killer) => {
          acc[killer] = (acc[killer] ?? 0) + 1; // Use Record and nullish coalescing
          return acc;
        }, {}),
    )
      .sort((a, b) => b[1] - a[1])
      .map(([killer]) => killer)[0],
  };

  // Format mostUsedWeapon for display
  const formattedWeapons = Object.entries(deathStats.mostUsedWeapon)
    .map(([weapon, count]) => `${weapon}: ${count}`)
    .join(", ");

  // RENDER
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-row items-center justify-between space-x-3">
        <div className="aspect-video w-1/2 rounded lg:max-w-1/3">
          <VideoBackground
            video={"/videos/reacher-s1-e1-lightening-long3.mp4"}
            fallback={"/videos/reacher-s1-e1-lightening.jpg"}
          />
        </div>

        <div className="flex w-1/2 grow flex-col text-sm">
          <div>{`Total Kills: ${deathStats.totalDeaths}`}</div>
          <div>{`Reacher Kills: ${deathStats.reacherKills}`}</div>
          <div>{`Most Kills: ${deathStats.deadliestCharacter}`}</div>
          <div>{`Weapons: ${formattedWeapons}`}</div>{" "}
          {/* Use formattedWeapons */}
          <div></div>
        </div>
      </div>
      <div className="space-y-2 text-sm md:text-base">
        <div>
          <div className="flex flex-row space-x-3 font-semibold">
            <div>{`S${seasonNum}-E${episodeNum}`}</div>
            <div className="text-accent">{episode?.episodeName}</div>
          </div>
          <div className="text-xs text-zinc-400 md:text-sm">{`${episode?.releaseDate}, ${episode?.episodeLength}m`}</div>
        </div>
        <div>
          <div>{episode?.primeSummary}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
