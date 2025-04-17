// TODO: default image mobile and desktop
// TODO: view/video Options

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VidCard({
  title,
  subtitle,
  description,
  video,
  image,
  altText,
  autoplay = true,
  play = false,
  loop = true,
  className,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  video: string;
  image: string;
  altText?: string;
  autoplay?: boolean;
  play?: boolean;
  loop?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [viewed, setViewed] = useState(false);

  const playStatus = autoplay || play;

  useEffect(() => {
    if (playStatus && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Video playback failed:", err);
      });
    } else if (!playStatus && videoRef.current) {
      videoRef.current.pause();
    }
  }, [playStatus]);

  return (
    <div
      className={`${className} z-0 flex flex-col items-center justify-center`}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <Image
        src={image}
        alt={altText ?? "Video background"}
        className="absolute top-0 left-0 h-full w-full object-cover"
        fill
        priority={true}
        unoptimized
      />
      <div
        className={`absolute top-0 left-0 flex size-full flex-col opacity-0 transition-opacity duration-500 ${
          playStatus && !viewed ? "opacity-100" : "opacity-0"
        }`}
      >
        <video
          ref={videoRef}
          src={video}
          autoPlay={playStatus}
          loop={loop}
          muted
          playsInline
          className="h-full w-full object-cover"
          poster={image}
          preload="auto"
          onEnded={() => {
            setViewed(true);
          }}
        >
          <Image
            src={image}
            alt={altText ?? "Video background"}
            className="h-full w-full object-fill"
            fill
            priority={true}
            unoptimized
          />
        </video>
      </div>
      {(title ?? subtitle ?? description) && (
        <>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-end px-4 text-zinc-100">
            <div className="flex min-h-28 w-full max-w-7xl flex-col justify-start">
              <div className="text-accent text-2xl font-bold">{title}</div>
              <div className="text-xs md:text-sm">{subtitle}</div>
              <div className="pt-1 text-sm md:text-base">{description}</div>
            </div>
          </div>
          <div className="absolute inset-0 z-10 mb-[-1px] bg-black mask-t-from-10% mask-t-to-70%"></div>
        </>
      )}
    </div>
  );
}
