"use client";

interface VideoPlayerProps {
  src: string;
  caption?: string;
}

export default function VideoPlayer({ src, caption }: VideoPlayerProps) {
  return (
    <figure className="my-10">
      <div className="rounded-xl overflow-hidden border border-[var(--color-beige-dark)] bg-[var(--color-card)]">
        <video
          src={src}
          controls
          playsInline
          preload="metadata"
          className="w-full h-auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-[var(--color-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
