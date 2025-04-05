// import Image from "next/image";
import Header from "../(main)/_components/Header";
import { IoMdRefresh } from "react-icons/io";
import VideoBackground from "../(main)/_components/VideoBackground";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

// h-[calc(100vh-97px)] max-h-[778px]
export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col justify-start">
      <div className="mx-auto flex h-28 w-full max-w-7xl flex-col justify-center">
        <Header />
      </div>
      <div className="h-[calc(100vh-112px)] min-h-[684px]">
        <div className="flex h-full w-full flex-col items-center justify-start">
          <div className="relative h-full max-h-[820px] w-full md:max-h-[1024px] lg:max-h-[1280px]">
            <div className="absolute inset-0 z-0 scale-x-[-1] transform bg-[url('/reacher-images/reacher-2560x1440-06.jpg')] bg-cover bg-top 2xl:scale-x-[-1]" />
            <div className="relative z-10 h-full overflow-hidden">
              <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-between py-6">
                {/* MAIN */}
                <div>
                  <div className="flex flex-col space-y-1 px-6 font-bebas text-8xl font-bold leading-[.90] tracking-wide sm:text-[9rem] md:text-[180px]">
                    <div className="text-accent">REACHER</div>
                    <div className="leading-[.60]">KILLS</div>
                  </div>
                  <div className="flex flex-row items-start justify-between">
                    <div className="px-6 pt-3 font-bebas text-4xl leading-[.90] tracking-wide sm:text-6xl md:text-8xl">
                      <div>EVERY BAD GUY.</div>
                      <div>EVERY EPISODE.</div>
                    </div>
                    <div className="mt-2 hidden w-96 px-6 text-right font-bebas text-6xl">
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
                  <div className="text max-w-[800px] font-sometype md:text-xl">
                    A formidable ex–Military Police officer known only as Jack
                    Reacher has been spotted dispensing vigilante justice across
                    small-town America. Targets include corrupt businessmen,
                    dirty cops, and any lowlife foolish enough to stand in his
                    way. Collateral damage is minimal—but the body count is
                    anything but.
                  </div>
                  <a
                    className="group mt-10 flex w-52 flex-row items-center rounded-lg border-2 border-accent bg-black/50 px-4 py-2 font-sometype font-semibold transition-all duration-300 ease-in-out hover:border-transparent hover:bg-white/60 hover:bg-none hover:text-black"
                    href="https://www.amazon.com/gp/video/detail/B09ML1GHXS/ref=atv_sr_fle_c_sr6eee57_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09ML111MB&qid=1742970427979"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Season 3 Streaming
                  </a>
                </div>

                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SUMMARY SECTION */}
      <div className="flex flex-col items-center">
        <div className="flex h-screen w-full max-w-7xl flex-col items-center justify-center px-6 md:h-1/2 md:py-20">
          <div className="pb-20 pt-36 text-center font-sometype text-2xl italic">
            “Every action has its consequence, and I make sure they’re just.”
          </div>
          <button className="group flex items-center space-x-2 rounded-full bg-accent px-8 py-2 font-bold text-white hover:bg-accent-foreground">
            <IoMdRefresh
              size={26}
              className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
            />
          </button>
        </div>
        <div className="relative my-10 h-[400px] lg:h-[600px]">
          <VideoBackground
            video="/videos/reacher-s1-e1-lightening-long3.mp4"
            // video="/videos/reacher-s1-e1-lightening-long.mp4"
            fallback="/videos/reacher-s1-e1-lightening.jpg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            testing
          </div>
        </div>
        <div className="mt-20 grid w-full max-w-7xl grid-rows-3 gap-6 p-6 lg:grid-cols-3 lg:grid-rows-1">
          <Card className="border-0">
            <CardHeader>
              <CardTitle className="font-bebas text-5xl tracking-wide text-zinc-200">
                REACHER BODY COUNT
              </CardTitle>
              <CardDescription>Confirmed kills and counting.</CardDescription>
            </CardHeader>
            <CardContent className="text-zinc-200">
              <div className="text-center font-sometype text-[9rem]">200</div>
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
                <div className="h-10 w-64 bg-zinc-200"></div>
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
      </div>
    </div>
  );
}
