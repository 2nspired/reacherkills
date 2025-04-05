"use client";

import { IoMdRefresh } from "react-icons/io";
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "~/components/ui/textGenerateEffect";

export default function ReacherSays() {
  const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const timeout = setTimeout(() => {}, 10000);

    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 bg-cover bg-top">
      <div className="w-full text-center font-bebas text-2xl tracking-wider md:text-3xl lg:text-5xl">
        <TextGenerateEffect
          key={quote}
          words={`"${quote}"`}
          className="text-2xl text-white md:text-3xl lg:text-5xl"
          filter={true}
          duration={0.5}
        />
      </div>
      <div className="font-sometype md:text-2xl">{" - Reacher"}</div>
    </div>
  );
}

const quotes = [
  "I don’t need to talk much. My actions say it all.",
  "In a world of chaos, I make my own order.",
  "Sometimes, silence is the loudest answer.",
  "When you face me, you face the consequences.",
  "I don’t choose sides; I choose justice.",
  "A man’s past is never far behind—it shapes what he does.",
  "Mess with the wrong person and you’ll learn your lesson.",
  "I’m not here to play games; I’m here to set things right.",
  "The truth always finds a way, no matter how deeply it’s buried.",
  "I don’t wait for permission to do what’s right.",
  "If you’ve got nothing to hide, then silence is golden.",
  "I trust actions over empty words any day.",
  "Out here, the quiet ones often have the loudest impact.",
  "Some people just talk—my deeds do the talking.",
  "I have no time for apologies; only results matter.",
  "When the world turns its back, I step in.",
  "I don’t fear confrontation—I welcome it.",
  "Justice isn’t given; it’s taken.",
  "The past may shape us, but it never defines us.",
  "Every action has its consequence, and I make sure they’re just.",
  "You can run, but you can’t hide from your fate.",
  "I never back down, no matter how tough the fight gets.",
  "Sometimes, my silence is my greatest strength.",
  "I live by one rule: do what’s right, no matter the cost.",
  "When push comes to shove, I deliver.",
];
