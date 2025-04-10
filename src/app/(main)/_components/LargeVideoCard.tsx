"use client";

import { useState } from "react";
import Skull from "~/app/(main)/_components/svg/SkullCross";
import VideoBackground from "~/app/(main)/_components/VideoBackground";

export default function LargeVideoCard({
  title,
  subTitle,
  description,
  totalDeaths = 99,
  reacherKills = 1,
  imageRef = "/videos/reacher-s1-e1-lightening.jpg",
  videoRef = "/videos/reacher-s1-e1-lightening-long3.mp4",
  className,
}: {
  title?: string;
  subTitle?: string;
  description?: string;
  totalDeaths?: number;
  reacherKills?: number;
  imageRef?: string;
  videoRef?: string;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${className} hover:bg-range-200/30 relative flex h-full w-full flex-col items-center transition-colors duration-200 ease-in-out md:aspect-video lg:max-h-[40vh]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0 mask-b-from-60% mask-b-to-100% bg-cover bg-bottom-left md:mask-t-from-100% md:mask-t-to-0 lg:bg-center">
        <VideoBackground
          video={videoRef}
          fallback={imageRef}
          autoplay={isHovered}
          play={isHovered}
          loop={true}
        />
      </div>

      {/* Backdrop blur bottom */}
      <div className="absolute inset-x-0 bottom-0 z-5 h-1/3 mask-t-from-70% backdrop-blur-md"></div>

      <div className="relative z-10 flex h-full w-full max-w-7xl flex-col-reverse items-start justify-between md:flex-row md:items-end">
        <div className="flex w-full flex-col p-6 md:min-h-2/5 md:w-2/3">
          <div className="text-accent text-2xl font-bold md:text-4xl">
            {title}
          </div>
          <div className="py-1">{subTitle}</div>
          <div className="py-1">{description}</div>
        </div>
        <div className="z-10 flex flex-col items-end self-end pt-6 md:min-h-2/5 md:min-w-1/3">
          <div className="md:backdrop-blue-none mr-6 flex w-fit flex-col justify-end rounded-lg bg-zinc-900/50 px-6 pt-4 pb-3 backdrop-blur-xs md:bg-transparent">
            <div className="flex flex-row items-center space-x-2">
              <div className="md:hidden">
                <Skull fill="#FFFFFF" className="size-8 fill-zinc-200" />
              </div>
              <div className="hidden md:block">
                <Skull fill="#FFFFFF" className="size-12 fill-zinc-200" />
              </div>
              <div className="font-sometype text-[2.5rem] leading-none font-bold md:text-[3rem]">
                {totalDeaths}
              </div>
            </div>
            <div className="flex w-fit flex-row items-center space-x-2 text-zinc-200">
              <div className="font-bebas tracking-none flex flex-row p-1 pt-2 text-[2rem] leading-none md:text-[3rem]">
                <div className="">R</div>
                <div className="text-accent">K</div>
              </div>
              <div className="font-sometype text-[2rem] leading-none font-bold md:text-[3rem]">
                {reacherKills}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
