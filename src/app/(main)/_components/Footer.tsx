import { TbBrandGithubFilled } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="flex-col-center bg-red-500">
      <div className="flex w-full max-w-7xl flex-row items-center justify-center space-x-6 px-4 py-6 lg:px-6">
        <div className="-skew-x-12 bg-zinc-900 px-4 py-2">
          <div className="min-w-[95px] skew-x-12 text-center text-sm font-semibold">
            fan project.
          </div>
        </div>
        <div className="text-sm font-semibold text-zinc-900">
          No affiliation with Reacher or its rights holders. All trademarks and
          copyrights belong to their respective owners.
        </div>
      </div>
      <FooterLinkHover />
    </footer>
  );
}

const FooterLinkHover = () => {
  return (
    <div className="flex-col-center bg-accent w-full">
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
  );
};
