import Image from "next/image";

interface Screenshot {
  src: string;
  alt: string;
  label?: string;
}

export default function ScreenshotGrid({ images }: { images: Screenshot[] }) {
  return (
    <div className="my-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
      {images.map((img, i) => (
        <div key={i} className="group">
          <div className="rounded-lg overflow-hidden border border-[var(--color-beige-dark)] bg-[var(--color-card)] hover:border-[var(--color-achal)]/30 transition-colors">
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
          {img.label && (
            <p className="mt-2 text-xs text-[var(--color-muted)] text-center">
              {img.label}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
