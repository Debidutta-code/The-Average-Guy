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
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-black">
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
      <div className="container-custom relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="mb-6 inline-block rounded-full border border-qnts-lime/30 bg-qnts-lime/10 px-5 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-qnts-lime">
            Evolution of Fitness
          </span>
          <h1>
            TRANSFORM YOUR <br />
            <span className="text-qnts-lime">BODY INTO POWER</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-xl mx-auto"
        >
          Elite fitness. Real transformations. Premium training experience.
          Discover the power within you at Bhubaneswar&apos;s most advanced gym.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button className="btn-primary">
            Start Transformation
          </button>
          <button className="btn-secondary">
            Book Free Trial
          </button>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {[
            { label: "Transformations", value: "10K+" },
            { label: "Rating", value: "5.0 ★" },
            { label: "Availability", value: "24/7" },
            { label: "Expert Coaches", value: "50+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-black text-white md:text-3xl">{stat.value}</div>
              <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hidden md:block"
      >
        <div className="h-10 w-5 rounded-full border border-white/20 p-1 flex justify-center">
          <div className="h-1.5 w-1 rounded-full bg-qnts-lime" />
        </div>
      </motion.div>
    </section>
  );
}
