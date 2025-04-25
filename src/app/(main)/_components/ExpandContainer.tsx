"use client";

import { ScrollArea } from "~/components/ui/scroll-area";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExpandContainer({
  startHeight = "h-28",
  maxHeight = "h-60",
  className,
  children,
  defaultOpen = false,
}: {
  startHeight?: string;
  maxHeight?: string;
  className?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      onClick={() => setOpen(!open)}
      className={`${className} ${startHeight} ${open && maxHeight} relative mb-3 overflow-hidden transition-all duration-300 ease-in-out`}
    >
      <div
        className={`absolute inset-0 top-0 h-full backdrop-blur-xs transition-all duration-300 ease-in-out ${open ? "bg-none mask-t-from-0% mask-t-to-0% backdrop-blur-none" : "bg-zinc-900/40 mask-t-from-3% mask-t-to-20% mask-r-from-60% mask-l-from-60%"}`}
      ></div>
      {open ? <ScrollArea className="h-full">{children}</ScrollArea> : children}
      <div className="flex-col-center absolute bottom-0 z-50 mt-10 w-full">
        <ChevronDown
          className={`${
            !open
              ? "inline-block opacity-100 drop-shadow-2xl filter"
              : "hidden opacity-0"
          } transition-opacity duration-300 ease-in-out`}
        />

        <ChevronUp
          className={`${
            open
              ? "drops-shadow-black inline-block opacity-100 drop-shadow-2xl filter"
              : "hidden opacity-0"
          } transition-opacity duration-300 ease-in-out`}
        />
      </div>
    </div>
  );
}
