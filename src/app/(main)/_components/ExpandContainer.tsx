"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExpandContainer({
  title,
  titleClassName,
  className,
  children,
  defaultOpen = false,
}: {
  title?: string;
  titleClassName?: string;
  className?: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div onClick={() => setOpen(!open)} className="">
      {title && (
        <div className="flex flex-row items-center justify-between">
          <div className={`${titleClassName}`}>{title}</div>
          {open ? (
            <div className="flex-col-center">
              <ChevronDown size={16} />
            </div>
          ) : (
            <ChevronUp size={16} className="flex-col-center" />
          )}
        </div>
      )}
      <div
        className={`h-full overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[500px] opacity-100" : "opactiy-0 max-h-0"} ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
