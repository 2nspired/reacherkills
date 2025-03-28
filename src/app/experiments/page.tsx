import Image from "next/image";
import Header from "../(main)/_components/Header";

export default function ExperimentsPage() {
  return (
    <div className="flex flex-col">
      <div className="mx-auto w-full max-w-7xl">
        header
        {/* <div className="mx-auto w-full max-w-[1720px]"> */}
        <Header />
      </div>
      <div className="relative flex h-[46rem] w-screen flex-col items-center justify-center sm:h-[44rem] md:h-[60rem]">
        content
        {/* TODO: NEED A NEW IMAGE WITH REACHER ON RIGHT, NOT CENTERED FOR LARGER VIEWS */}
        <Image
          src="/reacher-images/reacher-2560x1440-06.jpg"
          className="h-auto max-w-[2560px] scale-x-[-1] transform object-cover object-center md:scale-x-100 md:object-left 2xl:scale-x-[-1]"
          alt="Reacher"
          fill={true}
          priority={true}
          unoptimized
        />
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="mx-auto max-w-7xl">
            {/* <div className="mx-auto max-w-[1720px]"> */}

            {/* MAIN */}
            <div className="bg-red-500/50 py-6">
              <div className="flex flex-col space-y-1 px-6 font-bebas text-[8rem] font-bold leading-[.90] tracking-wide md:text-[180px]">
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
                <div className="max-w-[800px] font-sometype md:text-xl">
                  A formidable ex–Military Police officer known only as Jack
                  Reacher has been spotted dispensing vigilante justice across
                  small-town America. Targets include corrupt businessmen, dirty
                  cops, and any lowlife foolish enough to stand in his way.
                  Collateral damage is minimal—but the body count is anything
                  but.
                </div>
              </div>
              <div className="mt-10 flex flex-col items-center space-y-2 px-6 md:items-start">
                <div className="font-sometype font-bold">watch on:</div>
                <a
                  href="https://www.amazon.com/gp/video/detail/B09ML1GHXS/ref=atv_sr_fle_c_sr6eee57_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09ML111MB&qid=1742970427979"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="flex w-72 flex-row items-center justify-center rounded-3xl bg-yellow-500 p-4 text-xl font-bold text-white transition-colors duration-300 ease-in-out hover:bg-blue-500">
                    <Image
                      src="/icons/icon-prime-video.svg"
                      alt="Amazon Prime"
                      className="h-[35px] w-auto"
                      width={50}
                      height={50}
                      priority={true}
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SUMMARY SECTION */}
      <div className="flex flex-col items-center bg-blue-500/50">
        <div className="grid w-full max-w-7xl grid-rows-3 gap-6 p-6 text-black sm:grid-cols-3">
          <div className="row-start-1 border border-black p-6 text-center md:col-start-1 md:row-start-auto">
            <div className="font-bebas text-4xl">total kills</div>
            <div className="font-sometype text-2xl">200</div>
          </div>
          <div className="row-start-2 border border-black p-6 text-center md:col-start-2 md:row-start-auto">
            <div className="font-bebas text-4xl">weapons</div>
            <div className="font-sometype text-2xl">bare hands</div>
            <div className="font-sometype text-2xl">gun</div>
            <div className="font-sometype text-2xl">knife</div>
          </div>
          <div className="row-start-3 border border-black p-6 text-center md:col-start-3 md:row-start-auto">
            <div className="font-bebas text-4xl">methods</div>
            <div className="font-sometype text-2xl">choked</div>
            <div className="font-sometype text-2xl">stabbed</div>
            <div className="font-sometype text-2xl">shot</div>
          </div>
        </div>
      </div>
    </div>
  );
}
