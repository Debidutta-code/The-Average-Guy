"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error maath does not have types
import * as random from "maath/random/dist/maath-random.esm";
import { motion } from "framer-motion";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#DFFF00"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Particles />
          </Suspense>
        </Canvas>
      </div>

      {/* Cinematic Video Overlay Placeholder */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-black" />

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="mb-4 inline-block rounded-full border border-qnts-lime/30 bg-qnts-lime/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] text-qnts-lime">
            Evolution of Fitness
          </span>
          <h1 className="text-6xl font-black leading-[1.1] text-white md:text-8xl lg:text-9xl">
            TRANSFORM YOUR <br />
            <span className="text-qnts-lime">BODY INTO POWER</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl text-lg font-medium text-white/60 md:text-xl lg:text-2xl"
        >
          Elite fitness. Real transformations. Premium training experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col gap-6 sm:flex-row"
        >
          <button className="group relative overflow-hidden rounded-full bg-qnts-lime px-10 py-5 text-sm font-black uppercase tracking-widest text-black transition-all hover:scale-105">
            <span className="relative z-10">Start Transformation</span>
            <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 group-hover:translate-y-0" />
          </button>
          <button className="rounded-full border border-white/20 px-10 py-5 text-sm font-black uppercase tracking-widest text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black">
            Book Free Trial
          </button>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-20">
          {[
            { label: "Transformations", value: "10K+" },
            { label: "Rating", value: "5.0 ★" },
            { label: "Locations", value: "24/7" },
            { label: "Expert Coaches", value: "50+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div className="h-12 w-6 rounded-full border-2 border-white/20 p-1">
          <div className="h-2 w-full rounded-full bg-qnts-lime" />
        </div>
      </motion.div>
    </section>
  );
}
