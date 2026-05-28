"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Environment, ContactShadows, Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Steam() {
  const points = useMemo(() => {
    const p = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      p[i * 3] = (Math.random() - 0.5) * 2;
      p[i * 3 + 1] = Math.random() * 4;
      p[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < 200; i++) {
        positions[i * 3 + 1] += 0.01;
        if (positions[i * 3 + 1] > 4) positions[i * 3 + 1] = 0;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={points}>
      <PointMaterial
        transparent
        color="#f59e0b"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

interface MeshDistortMaterialImpl extends THREE.MeshStandardMaterial {
  distort: number;
  speed: number;
}

function CoffeeScene() {
  const meshRef = useRef<THREE.Group>(null);
  const materialRef = useRef<MeshDistortMaterialImpl>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => setScrollProgress(self.progress),
      },
    });

    if (meshRef.current) {
      tl.to(meshRef.current.position, {
        z: -5,
        y: -2,
        ease: "none",
      });
      tl.to(meshRef.current.rotation, {
        x: Math.PI * 2,
        z: Math.PI,
        ease: "none",
      }, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;

      // Mouse interaction influence
      const mouseX = state.mouse.x * 0.3;
      const mouseY = state.mouse.y * 0.3;
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, mouseX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, mouseY - (scrollProgress * 2), 0.05);
    }

    if (materialRef.current) {
      materialRef.current.distort = THREE.MathUtils.lerp(0.4, 0.8, scrollProgress);
      materialRef.current.speed = THREE.MathUtils.lerp(2, 5, scrollProgress);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={100} color="#f59e0b" />
      <pointLight position={[-10, -10, -10]} intensity={50} color="#8b4513" />
      <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={100} castShadow />

      <Environment preset="night" />

      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <group ref={meshRef}>
          {/* Mug Body */}
          <mesh castShadow>
            <cylinderGeometry args={[1, 0.8, 2, 32]} />
            <MeshDistortMaterial
              ref={materialRef}
              color="#1a1a1a"
              roughness={0.1}
              metalness={1}
              distort={0.2}
              speed={2}
            />
          </mesh>
          {/* Handle */}
          <mesh position={[0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.5, 0.1, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={1} />
          </mesh>
          {/* Coffee Surface */}
          <mesh position={[0, 0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.9, 32]} />
            <meshStandardMaterial color="#3d2314" roughness={0.3} />
          </mesh>
        </group>
        <Steam />
      </Float>

      <ContactShadows
        position={[0, -3, 0]}
        opacity={0.6}
        scale={20}
        blur={3}
        far={10}
        color="#000000"
      />
    </>
  );
}

export default function ExperienceCanvas() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <CoffeeScene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
      {/* Cinematic grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
