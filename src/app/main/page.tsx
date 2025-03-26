import Image from "next/image";
import Header from "../(main)/_components/Header";

export default function HomePage() {
  return (
    <div>
      <div className="mx-auto w-full max-w-[1720px]">
        <Header />
      </div>
      <div className="relative flex h-[900] w-screen flex-col items-center justify-center">
        <Image
          src="/reacher-images/reacher-2560x1440-06.jpg"
          className="h-auto max-w-[2560px] object-cover object-left"
          alt="Reacher"
          fill={true}
          priority={true}
          unoptimized
        />
        <div className="absolute left-0 top-0 h-full w-full">
          <div className="mx-auto max-w-[1720px]">
            <div className="py-6">
              <div className="flex flex-col space-y-1 px-6 font-bebas text-[180px] font-bold leading-[.90] tracking-wide">
                <div className="text-orange-500">REACHER</div>
                <div className="leading-[.60]">KILLS</div>
              </div>
              <div className="flex flex-row items-start justify-between">
                <div className="px-6 pt-3 font-bebas text-8xl leading-[.90] tracking-wide">
                  <div>EVERY BAD GUY.</div>
                  <div>EVERY EPISODE.</div>
                </div>
                <div className="mt-2 w-96 px-6 text-right font-bebas text-6xl">
                  <div>Total Kills</div>
                  <div>Methods &</div>
                  <div>Weapons Used</div>
                </div>
              </div>

              <div className="mt-14 px-6">
                <div className="font-bebas text-6xl tracking-wide">SITREP</div>
                <div className="max-w-[800px] font-sometype text-xl">
                  A formidable ex–Military Police officer known only as Jack
                  Reacher has been spotted dispensing vigilante justice across
                  small-town America. Targets include corrupt businessmen, dirty
                  cops, and any lowlife foolish enough to stand in his way.
                  Collateral damage is minimal—but the body count is anything
                  but.
                </div>
              </div>
              <div className="mt-10 flex flex-col space-y-2 px-6">
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
      <div>
        <div>summary section</div>
      </div>
    </div>
  );
}
