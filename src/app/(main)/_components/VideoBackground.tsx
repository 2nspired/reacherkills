"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function VideoBackground({
  video,
  fallback,
  fallbackAlt,
  autoplay = true,
  play = false,
  loop = false,
}: {
  video: string;
  fallback: string;
  fallbackAlt?: string;
  autoplay?: boolean;
  play?: boolean;
  loop?: boolean;
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
    <div className="relative z-0 h-full w-full rounded">
      <Image
        src={fallback}
        alt={fallbackAlt ?? "Video background"}
        className="relative min-h-full min-w-full rounded object-cover"
        height={1351}
        width={3840}
        priority={true}
        unoptimized
      />
      <video
        ref={videoRef}
        src={video}
        autoPlay={playStatus}
        loop={loop}
        muted
        playsInline
        className={`absolute top-0 min-h-full min-w-full rounded object-cover opacity-0 transition-opacity duration-500 ${
          playStatus && !viewed ? "opacity-100" : "opacity-0"
        }`}
        height={1351}
        width={3840}
        poster={fallback}
        preload="auto"
        onEnded={() => {
          setViewed(true);
        }}
      >
        <Image
          src={fallback}
          alt={fallbackAlt ?? "Video background"}
          className="min-h-full min-w-full rounded object-cover"
          height={1351}
          width={3840}
          priority={true}
          unoptimized
        />
      </video>
    </div>
  );
}
