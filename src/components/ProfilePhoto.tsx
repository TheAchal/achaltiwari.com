"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfilePhoto() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border-2 border-[var(--color-beige-dark)] bg-[var(--color-achal-light)] flex items-center justify-center flex-shrink-0">
        <span
          className="text-4xl font-bold text-[var(--color-achal)]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          AT
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/images/achal-profile.jpeg"
      alt="Achal Tiwari"
      width={192}
      height={192}
      className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl border-2 border-[var(--color-beige-dark)] object-cover flex-shrink-0"
      onError={() => setError(true)}
      priority
    />
  );
}
