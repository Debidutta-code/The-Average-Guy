import Image from "next/image";
import { Plus } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery/clinic-1.jpg", alt: "Modern treatment room", title: "Technology" },
  { src: "/images/gallery/clinic-2.jpg", alt: "Reception area", title: "Reception" },
  { src: "/images/gallery/clinic-3.jpg", alt: "Sterilization room", title: "Safety" },
  { src: "/images/gallery/clinic-4.jpg", alt: "Patient lounge", title: "Lounge" },
  { src: "/images/gallery/clinic-5.jpg", alt: "Dental equipment", title: "Equipment" },
  { src: "/images/gallery/clinic-6.jpg", alt: "Operation theater", title: "Surgery" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm">Our Facility</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">
            Modern Clinic <span className="text-primary">Experience</span>
          </h3>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Take a virtual tour of our state-of-the-art dental facility in Bhubaneswar.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-[24px] md:rounded-[40px] overflow-hidden bg-slate-100 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Plus size={24} />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <p className="text-sm font-medium uppercase tracking-widest">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
