"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Maximize2 } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    title: "Main Reception",
    size: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    title: "Consultation Room",
    size: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop",
    title: "Diagnostic Wing",
    size: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop",
    title: "Waiting Lounge",
    size: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    title: "Our Staff",
    size: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold font-playfair mb-6">Clinic Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into our world-class facilities designed for patient comfort and clinical precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden border border-white/5 ${image.size}`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <h4 className="text-xl font-bold font-playfair">{image.title}</h4>
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mt-2">
                  <Maximize2 size={14} />
                  View Space
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
