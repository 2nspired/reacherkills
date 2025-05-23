import { cn } from "~/lib/utils";

export default function GridBackground() {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",

          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
    </>
  );
}
