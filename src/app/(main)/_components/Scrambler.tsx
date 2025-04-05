"use client";

import { useScramble } from "use-scramble";
import { forwardRef, useImperativeHandle } from "react";

const Scrambler = forwardRef(function Scrambler(
  {
    text,
    className,
  }: {
    text: string;
    className: string;
  },
  ref,
) {
  const { ref: scrambleRef, replay } = useScramble({
    text: text,
    speed: 0.5,
    overflow: true,
    scramble: 10,
    seed: 2,
  });

  useImperativeHandle(ref, () => ({
    triggerScramble: replay,
  }));

  return <div ref={scrambleRef} className={className}></div>;
});

export default Scrambler;
