"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  PerspectiveCamera,
  Environment,
  ContactShadows,
  MeshTransmissionMaterial
} from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function BottleModel({ scrollProgress }: { scrollProgress: { value: number } }) {
  const meshRef = useRef<THREE.Group>(null);
  const liquidRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    const p = scrollProgress.value;

    // Stage-based transformations (mimicking the previous logic but in 3D)
    // 0 -> 0.25: Slight scale up, gentle tilt
    // 0.25 -> 0.6: Rotate to show side profile, move down slightly
    // 0.6 -> 0.9: Dramatic descent, show bottom/top angle
    // 0.9 -> 1.0: Land in center, show final hero angle

    if (p < 0.25) {
      const innerP = p / 0.25;
      meshRef.current.scale.setScalar(1 + innerP * 0.1);
      meshRef.current.rotation.y = innerP * Math.PI * 0.2; // 36 degrees reveal
    } else if (p < 0.6) {
      const innerP = (p - 0.25) / 0.35;
      meshRef.current.scale.setScalar(1.1 + innerP * 0.15);
      meshRef.current.rotation.y = (Math.PI * 0.2) + innerP * Math.PI * 0.3; // Total ~90 degrees
      meshRef.current.position.y = -innerP * 1;
    } else if (p < 0.9) {
      const innerP = (p - 0.6) / 0.3;
      meshRef.current.position.y = -1 - innerP * 5; // Descent
      meshRef.current.rotation.x = innerP * 0.5; // Tilt to show cap
      meshRef.current.rotation.z = innerP * 0.2;
    } else {
      const innerP = (p - 0.9) / 0.1;
      meshRef.current.position.y = 5 - innerP * 5; // Enter from top
      meshRef.current.rotation.x = 0.5 * (1 - innerP);
      meshRef.current.rotation.z = 0.2 * (1 - innerP);
      meshRef.current.rotation.y = (Math.PI * 0.5) + innerP * 0.2;
      meshRef.current.scale.setScalar(1.25 - innerP * 0.15);
    }

    // Idle float (Framer Motion replacement)
    meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
  });

  return (
    <group ref={meshRef}>
      {/* Main Glass Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 2.5, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.2}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.1}
          color="#ffffff"
          background={new THREE.Color("#050505")}
        />
      </mesh>

      {/* Liquid inside */}
      <mesh ref={liquidRef} position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 2, 64]} />
        <meshPhysicalMaterial
          color="#3b82f6"
          transparent
          opacity={0.4}
          roughness={0}
          metalness={0.5}
          transmission={0.8}
          ior={1.33}
        />
      </mesh>

      {/* Cap */}
      <mesh position={[0, 1.4, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 64]} />
        <meshStandardMaterial color="#333333" roughness={0.1} metalness={0.8} />
      </mesh>

      {/* Label (simplified) */}
      <mesh position={[0, 0, 0.81]} rotation={[0, 0, 0]}>
        <planeGeometry args={[1, 0.5]} />
        <meshStandardMaterial color="white" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

export function Bottle3D() {
  const scrollProgress = useMemo(() => ({ value: 0 }), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          scrollProgress.value = self.progress;
        },
      });
    });
    return () => ctx.revert();
  }, [scrollProgress]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={35} />

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <BottleModel scrollProgress={scrollProgress} />
        </Float>

        <ContactShadows
          position={[0, -3, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
