"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
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
    <section className="bg-black section-padding" id="programs">
      <div className="container-custom">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2">
              TRAINING <br />
              <span className="text-qnts-lime italic">ARSENAL</span>
            </h2>
            <div className="h-1 w-20 bg-qnts-lime" />
          </div>
          <p className="max-w-xs md:text-right">
            Engineered programs for every body type. From raw strength to
            flexible flow, find your discipline.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {programs.map((program) => (
            <SwiperSlide key={program.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <span className="mb-2 inline-block rounded-full bg-qnts-lime/20 px-3 py-0.5 text-[9px] font-black uppercase tracking-widest text-qnts-lime backdrop-blur-md border border-qnts-lime/20">
                    {program.intensity}
                  </span>
                  <h3 className="italic">
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
