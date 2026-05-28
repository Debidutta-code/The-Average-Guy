"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, MeshDistortMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CoffeeScene() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffa500" />

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#2a1810"
            speed={3}
            distort={0.4}
            radius={1}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function ExperienceCanvas() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <CoffeeScene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </div>
  );
}
