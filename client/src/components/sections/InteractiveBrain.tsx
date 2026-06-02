"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, PerspectiveCamera, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function BrainCore() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.position.y = Math.sin(time) * 0.1;
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef}>
      <MeshDistortMaterial
        color="#3b82f6"
        speed={3}
        distort={0.4}
        radius={1}
        metalness={0.8}
        roughness={0.2}
      />
    </Sphere>
  );
}

function BrainOrbits() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.z = time * 0.1;
    groupRef.current.rotation.x = time * 0.05;
  });

  const orbits = useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => ({
      radius: 1.5 + i * 0.4,
      speed: 0.5 + i * 0.2,
      color: i === 0 ? "#64FFDA" : i === 1 ? "#3b82f6" : "#CCD6F6",
    }));
  }, []);

  return (
    <group ref={groupRef}>
      {orbits.map((orbit, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[orbit.radius, orbit.radius + 0.02, 64]} />
          <meshBasicMaterial color={orbit.color} transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

export default function InteractiveBrain() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <BrainCore />
          <BrainOrbits />
        </Float>
      </Canvas>
    </div>
  );
}
