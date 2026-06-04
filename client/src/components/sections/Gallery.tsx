import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
    title: "Reception Area",
    category: "Clinic"
  },
  {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    title: "Consultation Room",
    category: "Clinic"
  },
  {
    url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop",
    title: "Laser Treatment Suite",
    category: "Equipment"
  },
  {
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    title: "Modern Diagnostics",
    category: "Equipment"
  },
  {
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    title: "Patient Lounge",
    category: "Clinic"
  },
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    title: "Sterile Environment",
    category: "Safety"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-medical-600 font-bold uppercase tracking-wider text-sm">Our Facility</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
            Inside Our Clinic
          </h2>
          <p className="text-slate-600 text-lg">
            A premium, sterile, and welcoming environment designed for your comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up">
              <div className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-md">
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-medical-400 text-[10px] font-bold uppercase tracking-widest">{img.category}</span>
                  <h4 className="text-white font-bold text-lg">{img.title}</h4>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
