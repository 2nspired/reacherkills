import Scrambler from "~/app/(main)/_components/Scrambler";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/">
      <div className={`flex px-6 font-bebas tracking-wide ${className}`}>
        <div className="text-accent flex flex-col pt-[5px]">REACHER</div>
        <Scrambler
          text="kills"
          className="pt-[5px] leading-[.80] sm:leading-none"
        />
      </div>
    </Link>
  );
}
