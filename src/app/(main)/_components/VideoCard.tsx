"use client";
import { cn } from "~/lib/utils";

export function VideoCard({
  title,
  description,
  bgImage = "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  bgVideo = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
}: {
  title?: string;
  description?: string;
  bgImage?: string;
  bgVideo?: string;
}) {
  return (
    <div className="w-full max-w-xs">
      <div
        className={cn(
          "group card relative mx-auto flex h-96 w-full cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
          "transition-all duration-500",
        )}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            backgroundImage: `url(${bgVideo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
        <div className="text relative z-50">
          <h1 className="relative text-xl font-bold text-gray-50 md:text-3xl">
            {title}
          </h1>
          <p className="relative my-4 min-h-24 text-base font-normal text-gray-50">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
