import Logo from "~/app/(main)/_components/Logo";
import { PiFanFill } from "react-icons/pi";
import { FiTriangle } from "react-icons/fi";

export default function Header() {
  return (
    <header className="min-h-[3vw] w-full">
      {
        <div className="flex-col-center w-full bg-yellow-400">
          <div className="flex w-full max-w-7xl flex-col items-start space-y-2 space-x-2 px-5 py-3 text-sm text-zinc-950 md:flex-row md:items-center md:justify-start md:space-y-0">
            <div className="flex flex-row items-center space-x-2">
              <div className="inline-block animate-spin">
                <PiFanFill size={20} className="animate-spin-slow" />
              </div>
              <div className="font-semibold">Just A Fan With a Keyboard.</div>
            </div>
            <div className="text-left text-xs md:text-sm">
              Not affiliated with Amazon, Lee Child, or anyone official.
            </div>
          </div>
        </div>
      }
      <div className="section-child p-4 md:p-6">
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <Logo className="flex w-32 items-center text-2xl" />
          <div className="font-sometype text-xs md:block md:text-sm lg:text-base">
            More Accurate Than the Police Reports.
          </div>
          {/* <a
            className="border-accent font-sometype rounded-lg border-2 px-3 py-1.5 text-sm font-semibold transition-colors duration-300 ease-in-out hover:border-transparent hover:bg-zinc-200/50 hover:text-zinc-50 md:text-base"
            href="https://www.amazon.com/gp/video/detail/B09ML1GHXS/ref=atv_sr_fle_c_sr6eee57_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09ML111MB&qid=1742970427979"
            target="_blank"
            rel="noreferrer"
          >
            Watch Now
          </a> */}
        </div>
      </div>
    </header>
  );
}
