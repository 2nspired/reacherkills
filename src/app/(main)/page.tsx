import ReacherSays from "~/app/(main)/_components/ReacherSays";
import Header from "~/app/(main)/_components/Header";
import Profile from "~/app/(main)/_components/Profile";
import SeasonDetailsOverlay from "~/app/(main)/_components/season/SeasonDetailsOverlay";
import CareerStats from "~/app/(main)/_components/CareerStats";
import VidCard from "~/app/(main)/_components/VidCard";
import { TbBrandGithubFilled } from "react-icons/tb";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Image from "next/image";
import { getReacherStats } from "~/utilities/reacher-data-helper";
import MethodsPieChart from "./_components/stats/MethodsPieChart";
import { WeaponsBarChartMixed } from "./_components/stats/WeaponsBarChartMixed";

export default function MainPage() {
  const reacherStats = getReacherStats();

  return (
    <main className="flex min-h-screen min-w-screen flex-col text-zinc-100">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-full overflow-hidden px-4 md:px-8">
        <div className="section-child relative h-[90vh] max-h-[64rem] min-h-[36rem] md:min-h-[60rem] lg:min-h-[50rem] xl:min-h-[910px]">
          <div className="absolute inset-0 z-0 mt-18 scale-x-[-1] transform bg-[url('/reacher-images/hero/reacher-2560x1440-06-alpha.png')] mask-b-from-20% mask-b-to-80% bg-cover bg-top sm:mt-0 lg:mt-0 2xl:scale-x-[-1]" />
          <div className="relative flex size-full flex-col justify-around">
            <div>
              <div className="font-bebas text-8xl leading-none font-bold tracking-wide md:text-[9rem] lg:text-[12rem]">
                Reacher
              </div>
              <div className="text-accent font-bebas mt-[-20px] mb-[-10px] text-8xl leading-none font-bold tracking-wide md:text-[9rem] lg:text-[12rem]">
                Kills
              </div>
              <div className="font-bebas text-4xl leading-[.90] tracking-wide sm:text-6xl lg:text-8xl">
                <div>EVERY BAD GUY.</div>
                <div>EVERY EPISODE.</div>
              </div>
            </div>
            <div className="flex flex-col justify-end space-y-6">
              <div>
                <div className="font-bebas text-2xl tracking-wide sm:text-4xl md:text-4xl lg:text-5xl">
                  SITREP
                </div>
                <div className="font-sometype max-w-[800px] text-sm md:text-base">
                  A formidable ex–Military Police officer known only as Jack
                  Reacher has been spotted dispensing vigilante justice across
                  small-town America. Targets include corrupt businessmen, dirty
                  cops, and any lowlife foolish enough to stand in his way.
                  Collateral damage is minimal—but the body count is anything
                  but.
                </div>
              </div>
              <a
                className="border-accent font-sometype max-w-44 rounded-lg border-2 bg-black/50 px-4 py-2 text-base font-semibold transition-all duration-300 ease-in-out hover:border-transparent hover:bg-zinc-200/50 hover:bg-none hover:text-zinc-50"
                href="https://www.amazon.com/gp/video/detail/B09ML1GHXS/ref=atv_sr_fle_c_sr6eee57_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09ML111MB&qid=1742970427979"
                target="_blank"
                rel="noreferrer"
              >
                Stream Season 3
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT //START// */}

      <div className="w-full">
        {/* Quote Section */}

        <section className="w-full">
          <div className="section-child flex-col-center py-20 lg:py-30">
            <div className="p-6">
              <ReacherSays />
            </div>
          </div>
        </section>

        {/* Profile Section */}

        <section className="relative w-full">
          <div className="absolute inset-0 bg-[url('/texture/Texture_22.jpg')] mask-y-from-70% mask-y-to-90% mask-r-from-30% mask-l-from-50% mask-l-to-90% opacity-40"></div>
          <div className="section-child relative">
            <div className="absolute inset-0 transform mask-b-from-20% mask-b-to-80% shadow-lg shadow-black md:mask-b-from-80% md:mask-b-to-100%">
              <Image
                src="/reacher-images/character-profile/reacher-stats-426x1026-01-alpha.png"
                alt="Reacher Image"
                className="w-auto transform md:ml-auto"
                width={426}
                height={1026}
                unoptimized
              />
            </div>

            <div className="pt-96 md:h-[850px] md:w-1/2 md:pt-0 lg:w-1/2">
              <Profile className="relative z-10" />
            </div>
          </div>
        </section>

        {/* TOP STATS */}
        <section className="w-full">
          <div className="section-child">
            <div className="z-10 flex w-full flex-col items-center justify-center">
              <div className="grid w-full max-w-7xl grid-rows-3 gap-6 px-4 py-6 md:grid-cols-2 md:grid-rows-2 md:px-8 lg:grid-cols-3 lg:grid-rows-1">
                <Card className="gap-0 border-0">
                  <CardHeader>
                    <CardTitle className="font-bebas text-5xl tracking-wide text-zinc-200">
                      BODY COUNT
                    </CardTitle>
                    <CardDescription>
                      Confirmed kills and counting.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-zinc-200">
                    <div className="font-sometype text-center text-[10rem]">
                      {reacherStats.totalRK}
                    </div>
                  </CardContent>
                  {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
                </Card>
                <Card className="gap-0 border-0">
                  <CardHeader>
                    <CardTitle className="font-bebas text-5xl tracking-wide text-zinc-200">
                      METHODS
                    </CardTitle>
                    <CardDescription>
                      Why use a gun when your fists do the talking?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-row items-center justify-center text-zinc-200">
                    <MethodsPieChart />
                  </CardContent>
                  {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
                </Card>
                <Card className="border-0">
                  <CardHeader>
                    <CardTitle className="font-bebas text-5xl tracking-wide text-zinc-200">
                      TOP WEAPONS
                    </CardTitle>
                    <CardDescription>
                      Improvised or intentional, it’s always fatal.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col px-0 text-zinc-200">
                    <WeaponsBarChartMixed />
                  </CardContent>
                  {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="flex-col-center w-full py-20 md:px-8">
          <CareerStats />
        </section>

        {/* Season Section */}

        <section className="w-full py-20">
          {/* <VidCard
            title="Season Stats"
            subtitle="2022"
            description="Framed in Georgia. Corruption. Reacher hits back."
            className="aspect-square min-h-60 sm:min-h-96"
            video="/videos/reacher-s1-e1-lightening-long3.mp4"
            image="/videos/reacher-s1-e1-lightening.jpg"
          /> */}

          <SeasonDetailsOverlay seasonNum={1} className="">
            <div>
              <VidCard
                title="Season Stats"
                subtitle="2022"
                description="Framed in Georgia. Corruption. Reacher hits back."
                className="aspect-square max-h-24 min-h-60 md:max-h-[30vw]"
                video="/videos/reacher-s1-e1-lightening-long3.mp4"
                image="/videos/reacher-s1-e1-lightening.jpg"
              />
            </div>
          </SeasonDetailsOverlay>
        </section>

        {/* Boss Section */}

        {/* <section className="w-full">
          <div className="section-child bg-indigo-500/50">Boss Details</div>
        </section> */}
      </div>

      <footer className="bg-accent mt-20 w-full">
        <div className="bg-red-500">
          <div className="section-child px-4 lg:px-6">
            <div className="flex flex-row items-center justify-around space-x-2 py-8 text-sm font-semibold text-zinc-900 lg:py-10">
              <div className="flex flex-row items-center space-x-6">
                <div className="min-w-1/4 -skew-x-12 bg-zinc-900 px-3 py-1 text-zinc-200 md:min-w-auto">
                  <div className="skew-x-12 italic"> Fan project.</div>
                </div>
                <div className="text-sm md:text-base">
                  No affiliation with Reacher or its rights holders. All
                  trademarks and copyrights belong to their respective owners.
                </div>
              </div>

              {/* <div className="bg-blue-500">
                <TbBrandGithubFilled className="hidden lg:block" size={28} />
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex-col-center w-full">
          <div className="flex w-full max-w-7xl flex-row items-center justify-end">
            <a
              className="underline-none group relative z-30 size-full"
              href="https://www.thomastrudzinski.com/"
            >
              <div className="relative z-20 p-4 text-right text-zinc-900 transition-colors duration-300 ease-in-out">
                thomastrudzinski.com
              </div>
              <div className="bg-accent absolute inset-0 z-10 w-0 -skew-x-12 transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-zinc-300"></div>
            </a>

            <div className="group -skew-x-12 bg-black p-4 transition-colors duration-300 ease-in-out hover:bg-zinc-300">
              <a className="skew-x-12" href="https://github.com/2nspired">
                <TbBrandGithubFilled
                  size={24}
                  className="skew-x-12 transition-colors duration-300 ease-in-out group-hover:text-zinc-900"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
