import Image from "next/image";
import { getReacherStats } from "~/utilities/data-helpers";
import { RKLineChart } from "~/app/(main)/_components/RKLineChart";

const CareerStats = () => {
  const reacherStats = getReacherStats();

  return (
    <div className="flex w-full max-w-7xl flex-col">
      {/* Header */}

      <div className="flex flex-row space-x-3 px-4 lg:px-6">
        <Image
          className="w-[75px] sm:w-[100px] md:w-[125px]"
          src="/rank/o4-major.png"
          width={50}
          height={50}
          alt="major rank"
        />
        <div className="flex-col-center font-bebas grow rounded-sm bg-[url('/reacher-images/hero/reacher-1920x1080-02.png')] bg-cover bg-top p-4 text-center text-2xl text-white">
          stuff in here
        </div>
      </div>

      {/* Kills Section */}

      <div className="flex w-full flex-col pt-10 lg:flex-row">
        <div className="flex flex-col bg-zinc-800 md:rounded-t-sm lg:rounded-tr-none">
          <div className="font-bebas p-4 text-3xl tracking-wide md:text-4xl lg:p-6">
            Career
          </div>
          <div className="flex h-full flex-row flex-wrap justify-between bg-zinc-700">
            <SmallStat
              className="w-1/2"
              title="Total Kills"
              value={reacherStats.totalRK}
            />
            <SmallStat
              className="flex w-1/2 flex-row justify-end"
              title="Highest Killstreak"
              value={
                reacherStats.totalRKPerEpisode
                  .filter((ep) => ep.kills > 0)
                  .sort((a, b) => b.kills - a.kills)[0]?.kills ?? 0
              }
            />
            <SmallStat
              className="flex w-1/2 flex-row items-end justify-start"
              title="Episodes w/ Kills"
              value={`${
                reacherStats.totalRKPerEpisode.filter((ep) => ep.kills > 0)
                  .length
              } / ${reacherStats.totalEpisodes}`}
            />
            <SmallStat
              className="flex w-1/2 flex-row items-end justify-end"
              title="Episode Killstreak"
              value={reacherStats.longestKillStreak}
            />
          </div>
        </div>
        {/* Loadout Section */}
        <div className="w-full">
          <div className="flex h-full flex-col">
            <div className="font-bebas bg-zinc-900 p-4 text-3xl tracking-wide md:text-4xl lg:rounded-tr-sm lg:p-6">
              Loadout
            </div>
            <div className="flex h-full flex-col flex-wrap justify-between lg:flex-row">
              <WeaponCard
                className="bg-zinc-800 py-3 lg:w-1/3 lg:p-6"
                weapon="toothbrush"
                kills={0}
              />
              <WeaponCard
                className="bg-zinc-700 py-3 lg:w-1/3 lg:p-6"
                weapon={`${reacherStats.weapons[0]?.weapon}`}
                kills={reacherStats.weapons[0]?.count ?? 0}
              />
              <WeaponCard
                className="bg-zinc-600 py-3 lg:w-1/3 lg:p-6"
                weapon={`${reacherStats.weapons[1]?.weapon}`}
                kills={reacherStats.weapons[1]?.count ?? 0}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900">
        <div className="font-bebas bg-zinc-800 p-4 text-2xl tracking-wide md:text-4xl lg:p-6">
          Kills Over Episodes
        </div>
        <RKLineChart />
      </div>
    </div>
  );
};

export default CareerStats;

// -------------------------------------------------
// COMPONENTS
// -------------------------------------------------

const SmallStat = ({
  title,
  value,
  className,
}: {
  title: string;
  value: string | number;
  className?: string;
}) => {
  return (
    <div className={`${className} p-4 lg:p-6`}>
      <div className="inline-block">
        <div className="font-bebas text-xl tracking-wide text-zinc-400 md:text-2xl">
          {title}
        </div>
        <div className="font-sometype text-3xl font-semibold tracking-tight md:text-4xl">
          {value}
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------

const WeaponCard = ({
  weapon,
  kills,
  className,
}: {
  weapon: string;
  kills: number;
  className?: string;
}) => {
  return (
    <div className={`flex flex-row ${className} p-4 lg:flex-col lg:p-6`}>
      <div className="font-bebas hidden text-2xl tracking-wide text-zinc-400 lg:block">
        {weapon}
      </div>
      <div className="relative h-[30vw] w-1/3 md:w-2/3 lg:h-28 lg:w-4/5">
        <Image
          src={`/icons/${weapon}.png`}
          fill
          objectFit="contain"
          alt={weapon}
        />
      </div>
      <div className="flex w-full flex-row lg:flex-col">
        <div className="font-bebas text-xl tracking-wide text-zinc-400 md:text-2xl lg:hidden">
          {weapon}
        </div>
        <div className="font-bebas flex h-full grow flex-col items-end justify-end text-2xl tracking-wide lg:justify-end">
          <div>
            <div className="text-zinc-400">Total Kills</div>
            <div className="font-sometype text-3xl font-semibold md:text-4xl">
              {kills}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
