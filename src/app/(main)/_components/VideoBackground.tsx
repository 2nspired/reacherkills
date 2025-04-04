import Image from "next/image";

export default function VideoBackground({
  video,
  fallback,
  fallbackAlt,
}: {
  video: string;
  fallback: string;
  fallbackAlt?: string;
}) {
  return (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="min-h-full min-w-full object-cover"
      poster={fallback}
      preload="auto"
    >
      <Image
        src={fallback}
        alt={fallbackAlt ?? "Video background"}
        height={1351}
        width={3840}
        priority={true}
        unoptimized
      />
    </video>
  );
}
