"use client";

import { useState } from "react";
import VideoBackground from "~/app/(main)/_components/VideoBackground";

export default function VideoCard({
  title,
  subtitle,
  description,
  imageRef = "/videos/reacher-s1-e1-lightening.jpg",
  videoRef = "/videos/reacher-s1-e1-lightening-long3.mp4",
  className,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
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
          <div className="py-1">{subtitle}</div>
          <div className="py-1">{description}</div>
        </div>
      </div>
    </div>
  );
}
