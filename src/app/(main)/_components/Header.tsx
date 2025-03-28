import Image from "next/image";
import Logo from "~/app/(main)/_components/Logo";

export default function Header() {
  return (
    <div className="my-3 mt-6 flex w-full flex-col items-start">
      <div className="flex w-full flex-col justify-between md:flex-row md:items-center">
        <Logo className="flex flex-row items-center text-5xl md:justify-center" />
        <div className="px-6 font-sometype font-bold md:px-0 lg:text-lg">
          More Accurate Than the Police Reports.
        </div>
        <div className="flex flex-row items-center space-x-2 p-6 md:pr-6">
          <a
            href="https://www.amazon.com/gp/video/detail/B09ML1GHXS/ref=atv_sr_fle_c_sr6eee57_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B09ML111MB&qid=1742970427979"
            target="_blank"
            rel="noreferrer"
          >
            <button className="rounded-3xl bg-yellow-500 px-10 py-2 text-sm text-white transition-colors duration-300 ease-in-out hover:bg-blue-500">
              <Image
                src="/icons/icon-prime-video.svg"
                alt="Amazon Prime"
                width={80}
                height={25}
                priority={true}
              />
            </button>
          </a>
        </div>
      </div>

      <nav className="px-6 md:mt-6">[summary] [season stats] </nav>
    </div>
  );
}
