"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/data/images";

const categories = [
  { id: "all", label: "All" },
  { id: "interior", label: "Clinic Interior" },
  { id: "treatment", label: "Treatment Room" },
  { id: "equipment", label: "Equipment" },
  { id: "reception", label: "Reception" },
];

const galleryImages = [
  { src: images.gallery.interior, category: "interior", alt: "Clinic Interior" },
  { src: images.gallery.treatment, category: "treatment", alt: "Treatment Room" },
  { src: images.gallery.equipment, category: "equipment", alt: "Modern Equipment" },
  { src: images.gallery.happyPatients, category: "all", alt: "Happy Patient" },
  { src: images.gallery.reception, category: "reception", alt: "Reception Area" },
  { src: images.hero, category: "interior", alt: "Clinic Entrance" },
];

export const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const filteredImages = filter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Clinic Gallery"
          subtitle="Take a virtual tour of our modern dental facility in Bhubaneswar."
        />

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-md group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
