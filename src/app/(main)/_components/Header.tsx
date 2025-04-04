import Logo from "~/app/(main)/_components/Logo";

export default function Header() {
  return (
    <div className="flex w-full flex-col items-start px-6 py-3">
      <div className="flex w-full flex-row justify-between md:flex-row md:items-center">
        <div className="flex w-full flex-col justify-between md:flex-row md:items-center">
          <Logo className="flex flex-row items-center text-3xl md:w-[226px] md:justify-start md:text-5xl" />
          <div className="w-full pr-6 font-sometype text-xs font-bold md:text-center md:text-base lg:text-lg">
            More Accurate Than the Police Reports.
          </div>
        </div>
        <div className="flex flex-row items-center md:w-auto">
          <a
            href="https://www.amazon.com/gp/video/detail/B09ML1GHXS/ref=atv_sr_fle_c_sr6eee57_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09ML111MB&qid=1742970427979"
            target="_blank"
            rel="noreferrer"
          >
            <button className="rounded-lg border-2 border-accent px-3 py-2 font-sometype text-sm font-bold transition-colors duration-300 ease-in-out hover:border-transparent hover:bg-blue-500 hover:text-white md:text-base">
              <div className="w-20 md:hidden">Watch Now</div>
              <div className="hidden md:block md:w-36">Watch on Prime</div>
            </button>
          </a>
        </div>
      </div>

      <nav className="hidden px-6 md:mt-6">[summary] [season stats] </nav>
    </div>
  );
}
