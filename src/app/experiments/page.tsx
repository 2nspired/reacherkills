// import Image from "next/image";
import ReacherSays from "~/app/(main)/_components/ReacherSays";
import Profile from "~/app/(main)/_components/Profile";
import Image from "next/image";
import Header from "~/app/(main)/_components/Header";
import SeasonDetails from "~/app/(main)/_components/season/SeasonDetails";
import GridBackground from "../(main)/_components/GridBackground";

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

// h-[calc(100vh-97px)] max-h-[778px]
export default function ExperimentsPage() {
  return (
    <div className="flex h-full w-full min-w-[335px] flex-col justify-start">
      <div className="mx-auto flex h-28 w-full max-w-7xl flex-col justify-center">
        <Header />
      </div>
      <div className="h-[calc(100vh-112px)] max-h-[820px] min-h-[684px] md:max-h-[1024px] md:min-h-[1024px] lg:max-h-[1280px] lg:min-h-[1280px]">
        <div className="flex h-full w-full flex-col items-center justify-start">
          <div className="relative h-full max-h-[820px] w-full md:max-h-[1024px] lg:max-h-[1280px]">
            <div className="absolute inset-0 z-0 scale-x-[-1] transform bg-[url('/reacher-images/hero/reacher-2560x1440-06-alpha.png')] bg-cover bg-top 2xl:scale-x-[-1]" />
            <div className="absolute right-0 bottom-0 left-0 z-10 h-32 bg-linear-to-t from-black to-transparent"></div>
            <div className="relative z-20 h-full overflow-hidden">
              <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-between py-6">
                {/* MAIN */}
                <div>
                  <div className="font-bebas flex flex-col space-y-1 px-6 text-8xl leading-[.90] font-bold tracking-wide sm:text-[9rem] md:text-[180px]">
                    <div className="text-accent">REACHER</div>
                    <div className="leading-[.60]">KILLS</div>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <div className="font-bebas px-6 pt-3 text-4xl leading-[.90] tracking-wide sm:text-6xl md:text-8xl">
                      <div>EVERY BAD GUY.</div>
                      <div>EVERY EPISODE.</div>
                    </div>
                    <div className="font-bebas mt-2 hidden w-96 px-6 text-right text-6xl">
                      <div>Total Kills</div>
                      <div>Methods &</div>
                      <div>Weapons Used</div>
                    </div>
                  </div>
                </div>
                <div className="mb-10 px-6 py-6 md:mt-14">
                  <div className="font-bebas text-2xl tracking-wide sm:text-4xl md:text-6xl">
                    SITREP
                  </div>
                  <div className="text font-sometype max-w-[800px] md:text-xl">
                    A formidable ex–Military Police officer known only as Jack
                    Reacher has been spotted dispensing vigilante justice across
                    small-town America. Targets include corrupt businessmen,
                    dirty cops, and any lowlife foolish enough to stand in his
                    way. Collateral damage is minimal—but the body count is
                    anything but.
                  </div>
                  <a
                    className="group border-accent font-sometype mt-10 flex w-52 flex-row items-center rounded-lg border-2 bg-black/50 px-4 py-2 font-semibold transition-all duration-300 ease-in-out hover:border-transparent hover:bg-white/60 hover:bg-none hover:text-black"
                    href="https://www.amazon.com/gp/video/detail/B09ML1GHXS/ref=atv_sr_fle_c_sr6eee57_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09ML111MB&qid=1742970427979"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Season 3 Streaming
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SUMMARY SECTION */}

      <div className="flex w-full flex-col items-center">
        <div className="flex h-96 w-full flex-col items-center justify-around md:h-[600px]">
          <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center px-10">
            <ReacherSays />
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="relative flex w-full min-w-screen flex-col items-center justify-center">
        <GridBackground />
        <div className="grid w-full max-w-7xl grid-cols-1 px-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="hidden w-full md:block lg:col-span-2 lg:col-start-1 lg:flex lg:flex-col lg:items-center">
            {/* <div className="font-bebas text-7xl">Jack Reacher</div> */}
            <div className="z-20 h-full w-full lg:max-w-3/4 xl:mt-10">
              <Profile />
            </div>
          </div>
          <div className="relative flex h-full w-full items-end justify-center lg:justify-end">
            <Image
              // src="/reacher-images/reacher-1920x1080-02-alpha.png"
              src="/reacher-images/character-profile/reacher-stats-426x1026-01-alpha.png"
              alt="Reacher Image"
              className="transform object-cover object-top"
              width={426}
              height={1026}
              unoptimized
            />
            <div className="absolute right-0 bottom-0 left-0 z-10 h-32 bg-linear-to-t from-black to-transparent"></div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="z-10 mt-[-550px] h-full w-full md:hidden">
        <Profile className="" />
      </div>

      {/* CARDS */}
      <div className="z-10 flex w-full flex-col items-center justify-center md:mt-[-100px] lg:mt-[-50px] xl:mt-[-200px]">
        <div className="grid w-full max-w-7xl grid-rows-3 gap-6 p-6 pt-0 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
          <Card className="border-0">
            <CardHeader>
              <CardTitle className="font-bebas text-5xl tracking-wide text-zinc-200">
                REACHER BODY COUNT
              </CardTitle>
              <CardDescription>Confirmed kills and counting.</CardDescription>
            </CardHeader>
            <CardContent className="text-zinc-200">
              <div className="font-sometype text-center text-[9rem]">200</div>
            </CardContent>
            {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
          </Card>
          <Card className="border-0">
            <CardHeader>
              <CardTitle className="font-bebas text-5xl tracking-wide text-zinc-200">
                METHODS
              </CardTitle>
              <CardDescription>
                Why use a gun when your fists do the talking?
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row items-center justify-center text-zinc-200">
              <div className="-mt-[20px] flex h-48 w-48 items-center justify-center rounded-full border-[20px]">
                [donut graph]
              </div>
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
            <CardContent className="flex flex-col space-y-3 text-zinc-200">
              <div className="flex flex-row items-center space-x-3">
                <div className="w-10">Gun</div>
                <div className="h-10 w-48 bg-zinc-200"></div>
              </div>
              <div className="flex flex-row items-center space-x-3">
                <div className="w-10">Knife</div>
                <div className="h-10 w-48 bg-zinc-200"></div>
              </div>
              <div className="flex flex-row items-center space-x-3">
                <div className="w-10">Hands</div>
                <div className="h-10 w-36 bg-zinc-200"></div>
              </div>
              <div className="flex flex-row items-center space-x-3">
                <div className="w-10">other</div>
                <div className="h-10 w-28 bg-zinc-200"></div>
              </div>
            </CardContent>
            {/* <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
          </Card>
        </div>
        {/* WORKING SECTION */}
        {/* 
    
    
    
    
    
    
    
    
    
     */}

        <div className="w-full pt-48">
          <SeasonDetails />
        </div>
        {/* <div className="flex-col-center w-full">
              <div className="flex w-full max-w-7xl flex-row justify-evenly bg-yellow-500/50 px-6">
                <div className="w-full bg-green-500/50">Bad Guy Kills</div>
                <div className="w-full bg-orange-500/50">Good Guy Kills</div>
              </div>
              <div className="py-3">Kills by Episode</div>
              <div className="py-3">Kills by Teammates</div>
              <div className="py-3">Kills by Bad Guys</div>
            </div>
            <div className="mt-24 flex w-full flex-col">
              <div className="flex w-full flex-col justify-evenly py-6">
                <LargeVideoCard
                  title="Season 1"
                  subTitle="2022"
                  description="Margrave, GA was safe until a new hobo came to town"
                  reacherKills={22}
                  totalDeaths={64}
                  imageRef="/reacher-images/hero/reacher-1920x1080-01.png"
                  // imageRef="/reacher-images/hero/reacher-1920x1080-02.png"
                />
                <LargeVideoCard
                  title="Season 2"
                  subTitle="2023"
                  description="Some other place is getting destroyed"
                  imageRef="/reacher-images/hero/reacher-1920x1080-02.png"
                  // imageRef="/reacher-images/hero/reacher-1920x1080-05.png"
                />
                <LargeVideoCard
                  title="Season 3"
                  subTitle="2024"
                  description="Margrave, GA was safe until a new hobo came to town"
                  imageRef="/reacher-images/hero/reacher-1920x1080-05.png"
                  // imageRef="/reacher-images/hero/reacher-1920x1080-04.png"
                />
              </div>
            </div>
          </div> */}

        {/* ABOVE ^^^^^^^ WORKING SECTION */}

        {/* 
    
    
    
    
    
    
    
           */}

        {/* <div className="flex flex-col items-center justify-center py-24">
              <div className="relative h-[300px] md:h-[400px] lg:h-[600px]">
                <VideoBackground
                  video="/videos/reacher-s1-e1-lightening-long3.mp4"
                  play={true}
                  autoplay={true}
                  loop={true}
                  // video="/videos/reacher-s1-e1-lightening-long.mp4"
                  fallback="/videos/reacher-s1-e1-lightening.jpg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  video
                </div>
              </div>
            </div> */}
        {/* <div className="flex-row-center my-24 space-x-6">
              <VideoCard
                title="Season 1"
                description="One man. One toothbrush. A body count that says, “Don’t mess with the quiet guy.”"
              />
              <VideoCard
                title="Season 2"
                description="Revenge isn’t his goal. It’s just a side effect."
              />
              <VideoCard
                title="Season 3"
                description="No plan. No phone. Just hands."
              />
            </div> */}
      </div>
    </div>
  );
}
