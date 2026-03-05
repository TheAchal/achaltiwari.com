import Image from "next/image";

interface ImageShowcaseProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function ImageShowcase({ src, alt, caption }: ImageShowcaseProps) {
  return (
    <figure className="my-10">
      <div className="rounded-xl overflow-hidden border border-[var(--color-beige-dark)] bg-[var(--color-card)]">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-[var(--color-muted)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
