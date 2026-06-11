"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { images } from "@/data/images";

const galleryItems = [
  { src: images.hero, category: "Clinic", title: "Modern Reception" },
  { src: images.gallery.reception, category: "Interior", title: "Patient Waiting Area" },
  { src: images.gallery.consultation, category: "Consultation", title: "Digital Consultation Room" },
  { src: images.gallery.treatment, category: "Treatment", title: "Advanced Treatment Setup" },
  { src: images.services.implants, category: "Technology", title: "Sterilized Equipment" },
  { src: images.services.smileDesigning, category: "Clinical", title: "Premium Dental Care" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          badge="Our Clinic"
          title="State-of-the-Art Facilities"
          description="Take a virtual tour of our modern dental clinic equipped with the latest technology for your comfort and safety."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-premium transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 border-4 border-white">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <Maximize2 size={24} />
                  </div>
                </div>

                {/* Info Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 block">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-10 right-10 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Clinic Gallery"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
