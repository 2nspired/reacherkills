import Scrambler from "~/app/(main)/_components/Scrambler";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <div
        className={`flex flex-col px-6 font-bebas tracking-wide sm:flex-row ${className}`}
      >
        <div className="flex flex-col pt-[5px] text-orange-500">REACHER</div>
        <Scrambler
          text="kills"
          className="pt-[5px] leading-[.80] sm:ml-3 sm:leading-none"
        />
      </div>
    </Link>
  );
}
