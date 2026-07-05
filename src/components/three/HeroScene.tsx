"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, ContactShadows } from "@react-three/drei";
import MonogramA from "./MonogramA";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 5]} intensity={2.2} />
        <pointLight position={[-4, -2, 3]} intensity={30} color="#e8974a" />
        <pointLight position={[4, 2, 4]} intensity={22} color="#b8bec9" />

        <MonogramA />

        <ContactShadows
          position={[0, -1.75, 0]}
          opacity={0.45}
          scale={9}
          blur={2.6}
          far={4}
          color="#000000"
        />

        {/* Self-contained reflections (no external HDR) via light panels */}
        <Environment resolution={256} frames={1}>
          <Lightformer
            intensity={2}
            position={[0, 2, 3]}
            scale={[6, 3, 1]}
            color="#ffffff"
          />
          <Lightformer
            intensity={1.4}
            position={[-3, -1, 2]}
            scale={[4, 4, 1]}
            color="#e8974a"
          />
          <Lightformer
            intensity={1.6}
            position={[3, 1, 2]}
            scale={[3, 3, 1]}
            color="#ffffff"
          />
          <Lightformer
            intensity={1}
            position={[0, -3, 1]}
            scale={[6, 2, 1]}
            color="#b8bec9"
          />
        </Environment>
      </Suspense>
    </Canvas>
  );
}
