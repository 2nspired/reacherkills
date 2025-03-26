"use client";

import { useScramble } from "use-scramble";

export default function Scrambler({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const { ref, replay } = useScramble({
    text: text,
    speed: 0.5,
    // tick: 2,
    overflow: true,
    scramble: 10,
    seed: 2,
  });

  return (
    <div
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
      className={className}
    ></div>
  );
}
