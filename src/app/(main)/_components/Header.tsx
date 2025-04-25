import Logo from "~/app/(main)/_components/Logo";

export default function Header() {
  return (
    <header className="min-h-[3vw] w-full p-4 md:px-8">
      <div className="section-child">
        <div className="flex flex-row items-center justify-between">
          <Logo className="flex w-32 items-center text-2xl" />
          <div className="font-sometype hidden text-sm md:block lg:text-base">
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
