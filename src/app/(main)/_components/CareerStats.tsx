import Image from "next/image";
import { getReacherStats } from "~/utilities/reacher-data-helper";
import { RKLineChart } from "~/app/(main)/_components/stats/RKLineChart";
import { MethodsRadarChart } from "./stats/MethodsRadarChart";
import ExpandContainer from "./ExpandContainer";

import { getXPStats } from "~/utilities/xp-helper";

const CareerStats = () => {
  const reacherStats = getReacherStats();
  const xpStats = getXPStats({
    name: "Jack Reacher",
  });

  return (
    <div className="flex w-full max-w-7xl flex-col">
      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg: flex flex-row items-center space-x-6 p-4 lg:flex-none lg:space-x-0">
          <Image
            src="/icons/new-kill.gif"
            className="rounded-4xl border border-black lg:hidden"
            height={100}
            width={100}
            alt="new kill animation"
          />
          <Image
            src="/icons/new-kill.gif"
            className="hidden rounded-4xl border border-black lg:inline-block"
            height={175}
            width={150}
            alt="new kill animation"
          />
          <div className="lg:hidden">
            <div className="font-bebas text-accent text-3xl">
              Ex Military Police
            </div>
            <div className="text-2xl font-semibold">LEVEL 9</div>
          </div>
        </div>

        {/* BANNER */}
        <div className="relative w-full py-3">
          <div className="h-26">
            <video
              src="/banner/rk_banner_02.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="inset-0 z-20 size-full rounded-sm object-cover lg:absolute"
            />
          </div>
          <div className="absolute inset-0 top-0 z-20 flex flex-col justify-center bg-black/30 mask-r-from-5% p-4 backdrop-blur-xs lg:flex-row lg:justify-start lg:space-x-4 lg:p-6">
            <Image
              className="w-[75px] drop-shadow-lg drop-shadow-zinc-900 sm:w-[100px] md:w-[125px]"
              src="/rank/o4-major.png"
              width={75}
              height={75}
              alt="major rank"
            />

            <div className="relative hidden drop-shadow-lg drop-shadow-zinc-900 lg:inline-block">
              <div className="font-bebas text-accent text-2xl tracking-wide lg:text-3xl">
                Ex Military Police
              </div>
              <div className="font-bebas text-2xl tracking-wide lg:text-6xl">
                LEVEL 9
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* XP BREAKDOWN */}

      <div className="mt-10 rounded-t-sm bg-zinc-800">
        <div className="flex flex-col rounded-t-sm bg-zinc-800">
          <div className="font-bebas rounded-t-sm bg-zinc-900 p-4 text-2xl tracking-wide md:text-4xl lg:p-6">
            XP Breakdown
          </div>

          <SmallStat title="Total XP" value={`${xpStats.totalXP} XP`} />
        </div>

        <div className="flex w-full flex-row flex-wrap">
          <div className="w-full pb-4 lg:w-1/2">
            <SmallStat title="Methods" value={`${xpStats.coreXP} XP`} />
            <ExpandContainer startHeight="h-24" maxHeight="h-48">
              {xpStats.core.map((method) => (
                <XPBreakdown
                  key={method.method}
                  title={method.method}
                  count={method.count}
                  value={method.totalXP}
                  lowValue={method.singleXP}
                />
              ))}
            </ExpandContainer>
          </div>

          <div className="w-full pb-4 lg:flex lg:w-1/2 lg:flex-row lg:justify-end">
            <div className="w-full">
              <SmallStat title="Environment" value={`${xpStats.envXP} XP`} />

              <ExpandContainer startHeight="h-24" maxHeight="h-48">
                {xpStats.env.map((mod) => (
                  <XPBreakdown
                    key={mod.tag}
                    title={mod.tag}
                    count={mod.count}
                    value={mod.totalXP}
                    lowValue={mod.singleXP}
                  />
                ))}
              </ExpandContainer>
            </div>
          </div>
          <div className="w-full pb-4 lg:w-1/2">
            <SmallStat title="Combo Bonus" value={`${xpStats.comboXP} XP`} />
            <ExpandContainer startHeight="h-24" maxHeight="h-48">
              {xpStats.combo.map((combo) => (
                <XPBreakdown
                  key={combo.tag}
                  title={combo.tag}
                  count={combo.count}
                  value={combo.totalXP}
                  lowValue={combo.singleXP}
                />
              ))}
            </ExpandContainer>
          </div>

          <div className="w-full pb-4 lg:w-1/2">
            <SmallStat title="Style" value={`${xpStats.styleXP} XP`} />
            <ExpandContainer startHeight="h-24" maxHeight="h-48">
              {xpStats.style.map((style) => (
                <XPBreakdown
                  key={style.tag}
                  title={style.tag}
                  count={style.count}
                  value={style.totalXP}
                  lowValue={style.singleXP}
                />
              ))}
            </ExpandContainer>
          </div>
        </div>
      </div>

      {/* Kills Section */}

      <div className="flex w-full flex-col lg:flex-row">
        <div className="bg-zinc-90 flex w-full flex-col">
          <div className="font-bebas bg-zinc-900 p-4 text-3xl tracking-wide md:text-4xl lg:p-6">
            Career
          </div>
          <div className="flex h-full flex-row flex-wrap justify-between bg-zinc-800">
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
            <div className="font-bebas bg-zinc-900 p-4 text-3xl tracking-wide md:text-4xl lg:p-6">
              Loadout
            </div>
            <div className="flex h-full flex-col flex-wrap justify-between bg-zinc-700 lg:flex-row">
              <WeaponCard
                className="py-3 lg:w-1/3 lg:p-6"
                weapon="toothbrush"
                kills={0}
              />
              <WeaponCard
                className="py-3 lg:w-1/3 lg:p-6"
                weapon={`${reacherStats.weapons[0]?.weapon}`}
                kills={reacherStats.weapons[0]?.count ?? 0}
              />
              <WeaponCard
                className="py-3 lg:w-1/3 lg:p-6"
                weapon={`${reacherStats.weapons[1]?.weapon}`}
                kills={reacherStats.weapons[1]?.count ?? 0}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800">
        <div className="font-bebas bg-zinc-900 p-4 text-2xl tracking-wide md:text-4xl lg:p-6">
          Kills Over Episodes
        </div>
        <RKLineChart />
      </div>
      <div className="flex flex-row flex-wrap rounded-b-xs">
        <div className="w-full bg-zinc-800 lg:w-1/2 lg:rounded-bl-sm">
          <div className="font-bebas bg-zinc-900 p-4 text-2xl tracking-wide md:text-4xl lg:p-6">
            Top Methods
          </div>
          <MethodsRadarChart select="methods" />
        </div>
        <div className="w-full rounded-br-sm bg-zinc-700 lg:w-1/2">
          <div className="font-bebas bg-zinc-900 p-4 text-2xl tracking-wide md:text-4xl lg:p-6">
            Death Blows
          </div>
          <MethodsRadarChart select="methodLocations" />
        </div>
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
    <div className={`${className} text-accent p-4 lg:p-6`}>
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
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-contain"
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
            <div className="font-sometype text-accent text-3xl font-semibold md:text-4xl">
              {kills}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------

const XPBreakdown = ({
  title,
  count,
  value,
  lowValue,
}: {
  title: string;
  count: number;
  value: number;
  lowValue?: number;
}) => {
  return (
    <div className="flex flex-row items-center justify-between px-4 lg:px-6">
      <div className="font-bebas w-1/3 text-xl tracking-wide text-zinc-400 md:text-2xl">
        {title}
      </div>
      <div className="font-bebas w-1/3 text-xl tracking-wide text-zinc-300 md:text-2xl">
        <div className="flex flex-row space-x-1">
          <div className="w-8">{count}</div>
          {lowValue && (
            <div className="pt-2 text-base leading-3 text-zinc-500 md:text-lg">{`(${lowValue} XP)`}</div>
          )}
        </div>
      </div>
      <div className="font-sometype w-1/3 text-right text-2xl font-semibold tracking-tight text-orange-300/70 md:text-2xl">
        {`+ ${value} XP`}
      </div>
    </div>
  );
};
