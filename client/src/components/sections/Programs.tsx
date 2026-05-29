"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const programs = [
  {
    title: "Fat Loss",
    image: "https://images.unsplash.com/photo-1518611012118-29a8d63ce0c2?auto=format&fit=crop&q=80",
    intensity: "High",
  },
  {
    title: "Muscle Building",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    intensity: "Extreme",
  },
  {
    title: "CrossFit",
    image: "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?auto=format&fit=crop&q=80",
    intensity: "Elite",
  },
  {
    title: "Yoga",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    intensity: "Flow",
  },
  {
    title: "Zumba",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80",
    intensity: "Energy",
  },
  {
    title: "Functional",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
    intensity: "Dynamic",
  },
];

export default function Programs() {
  return (
    <section className="bg-black py-32" id="programs">
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-5xl font-black text-white md:text-7xl">
              TRAINING <br />
              <span className="text-qnts-lime italic">ARSENAL</span>
            </h2>
          </div>
          <p className="max-w-md text-right text-white/50">
            Engineered programs for every body type. From raw strength to
            flexible flow, find your discipline.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {programs.map((program) => (
            <SwiperSlide key={program.title}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-3xl"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-10 left-10">
                  <span className="mb-2 inline-block rounded-full bg-qnts-lime/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-qnts-lime backdrop-blur-md">
                    {program.intensity}
                  </span>
                  <h3 className="text-4xl font-black italic tracking-tighter text-white">
                    {program.title}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
