"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// A bold geometric "A" built as an extruded shape (no font asset needed):
// solid triangular body, open legs at the bottom, one triangular counter.
export default function MonogramA() {
  const group = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.95, -1.15); // bottom-left outer
    shape.lineTo(-0.2, 1.15); // up to apex (left)
    shape.lineTo(0.2, 1.15); // apex (right)
    shape.lineTo(0.95, -1.15); // bottom-right outer
    shape.lineTo(0.55, -1.15); // bottom-right inner
    shape.lineTo(0.34, -0.35); // up inner-right to crossbar
    shape.lineTo(-0.34, -0.35); // across crossbar top
    shape.lineTo(-0.55, -1.15); // down inner-left
    shape.closePath();

    const counter = new THREE.Path();
    counter.moveTo(-0.24, -0.28);
    counter.lineTo(0.24, -0.28);
    counter.lineTo(0.0, 0.62);
    counter.closePath();
    shape.holes.push(counter);

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.5,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelSegments: 5,
      steps: 1,
      curveSegments: 24,
    });
    geo.center();
    return geo;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    // slow auto-spin + cursor-reactive tilt + gentle float
    group.current.rotation.y = t * 0.25 + state.pointer.x * 0.6;
    group.current.rotation.x = -state.pointer.y * 0.35;
    group.current.position.y = Math.sin(t * 0.8) * 0.06;
  });

  return (
    <group ref={group} scale={1.15}>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color="#d7dbe2"
          metalness={1}
          roughness={0.22}
          envMapIntensity={1.5}
        />
      </mesh>
    </group>
  );
}
