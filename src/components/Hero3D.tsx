"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./three/HeroScene"), {
  ssr: false,
  loading: () => <FallbackA />,
});

function FallbackA() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span
        className="chrome-text font-bold leading-none select-none"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(8rem, 22vw, 15rem)",
        }}
      >
        A
      </span>
    </div>
  );
}

export default function Hero3D() {
  return (
    <div className="relative w-full aspect-square max-w-[460px] mx-auto">
      <HeroScene />
    </div>
  );
}
