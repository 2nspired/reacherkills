import Image from "next/image";
import Header from "../(main)/_components/Header";
import { IoMdRefresh } from "react-icons/io";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex h-full w-full flex-col justify-start">
      <div className="mx-auto w-full max-w-7xl">
        <Header />
      </div>

      <div className="relative h-[46rem] w-full md:h-[60rem]">
        <div className="absolute inset-0 z-0 scale-x-[-1] transform bg-[url('/reacher-images/reacher-2560x1440-06.jpg')] bg-cover bg-center md:scale-x-100 md:bg-left 2xl:scale-x-[-1]" />

        {/* TODO: NEED A NEW IMAGE WITH REACHER ON RIGHT, NOT CENTERED FOR LARGER VIEWS */}
        {/* <Image
          src="/reacher-images/reacher-2560x1440-06.jpg"
          className="h-auto max-w-[2560px] scale-x-[-1] transform object-cover object-center md:scale-x-100 md:object-left 2xl:scale-x-[-1]"
          alt="Reacher"
          fill={true}
          priority={true}
          unoptimized
        /> */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <div className="mx-auto w-full max-w-7xl">
            {/* <div className="mx-auto max-w-[1720px]"> */}

            {/* MAIN */}
            <div className="w-full py-6">
              <div className="flex flex-col space-y-1 px-6 font-bebas text-[7rem] font-bold leading-[.90] tracking-wide sm:text-[9rem] md:text-[180px]">
                <div className="text-accent">REACHER</div>
                <div className="leading-[.60]">KILLS</div>
              </div>
              <div className="flex flex-row items-start justify-between">
                <div className="px-6 pt-3 font-bebas text-4xl leading-[.90] tracking-wide md:text-8xl">
                  <div>EVERY BAD GUY.</div>
                  <div>EVERY EPISODE.</div>
                </div>
                <div className="mt-2 hidden w-96 px-6 text-right font-bebas text-6xl">
                  <div>Total Kills</div>
                  <div>Methods &</div>
                  <div>Weapons Used</div>
                </div>
              </div>
              <div className="mt-14 px-6">
                <div className="font-bebas text-4xl tracking-wide md:text-6xl">
                  SITREP
                </div>
                <div className="text max-w-[800px] font-sometype md:text-xl">
                  A formidable ex–Military Police officer known only as Jack
                  Reacher has been spotted dispensing vigilante justice across
                  small-town America. Targets include corrupt businessmen, dirty
                  cops, and any lowlife foolish enough to stand in his way.
                  Collateral damage is minimal—but the body count is anything
                  but.
                </div>
              </div>
              <a
                className="group ml-6 mt-12 flex w-80 flex-row items-center justify-around space-x-6 rounded-lg border-2 border-accent px-3 py-5 transition-all duration-300 ease-in-out hover:border-transparent hover:bg-white/60 hover:bg-none"
                href="https://www.amazon.com/gp/video/detail/B09ML1GHXS/ref=atv_sr_fle_c_sr6eee57_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09ML111MB&qid=1742970427979"
                target="_blank"
                rel="noreferrer"
              >
                <div className="font-sometype font-semibold transition-colors duration-300 ease-in-out group-hover:text-black">
                  Season 3 streaming
                </div>
                <Image
                  src="/icons/icon-prime-video.svg"
                  alt="Amazon Prime"
                  className="transition duration-300 ease-in-out group-hover:invert group-hover:filter"
                  width={80}
                  height={25}
                  priority={true}
                />
              </a>
              {/* <div className="mt-12 flex flex-col items-center space-y-2 px-6 md:items-start">
                <div className="font-sometype font-bold">
                  season 3 streaming now
                </div>
                <a
                  href="https://www.amazon.com/gp/video/detail/B09ML1GHXS/ref=atv_sr_fle_c_sr6eee57_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09ML111MB&qid=1742970427979"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="flex flex-row items-center justify-center rounded-full bg-yellow-500 p-3 px-14 text-xl font-bold text-white transition-colors duration-300 ease-in-out hover:bg-blue-500">
                    <Image
                      src="/icons/icon-prime-video.svg"
                      alt="Amazon Prime"
                      // className="h-[35px] w-auto"
                      width={80}
                      height={25}
                      priority={true}
                    />
                  </button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* SUMMARY SECTION */}
      <div className="flex flex-col items-center">
        <div className="flex w-full max-w-7xl flex-col items-center px-6 pb-24">
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
        <div className="grid w-full max-w-7xl grid-rows-3 gap-6 p-6 lg:grid-cols-3 lg:grid-rows-1">
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
