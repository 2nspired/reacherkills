"use client";

import Scrambler from "~/app/(main)/_components/Scrambler";
import Link from "next/link";
import { useRef } from "react";

export default function Logo({ className }: { className?: string }) {
  const scramblerRef = useRef<{ triggerScramble: () => void }>(null);

  const handleHover = () => {
    scramblerRef.current?.triggerScramble();
  };

  return (
    <Link href="/">
      <div
        onMouseEnter={handleHover}
        onFocus={handleHover}
        className={`font-bebas tracking-wide ${className}`}
      >
        <div className="text-accent flex flex-col pt-[5px]">REACHER</div>
        <Scrambler
          ref={scramblerRef}
          text="kills"
          className="pt-[5px] leading-[.80] sm:leading-none"
        />
      </div>
    </Link>
  );
}
