"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const { clock, mouse } = state;
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;

      // Mouse interaction
      sphereRef.current.position.x = THREE.MathUtils.lerp(sphereRef.current.position.x, mouse.x * 2, 0.1);
      sphereRef.current.position.y = THREE.MathUtils.lerp(sphereRef.current.position.y, mouse.y * 2, 0.1);
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#D4AF37" />
      <pointLight position={[-10, -10, -10]} color="#FFBF00" intensity={1} />

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.5}>
          <MeshDistortMaterial
            color="#0a0a0a"
            emissive="#D4AF37"
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={1}
            distort={0.4}
            speed={2}
          />
        </Sphere>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <Scene />
      </Canvas>
    </div>
  );
}
