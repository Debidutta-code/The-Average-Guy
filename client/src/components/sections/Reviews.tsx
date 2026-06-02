"use client";

import { useRef, useEffect } from "react";
import { Star } from "lucide-react";

const reviews = [
  { name: "John Doe", text: "Dr. Arpan is truly exceptional. His expertise and calm demeanor put me at ease immediately.", rating: 5, date: "2 weeks ago" },
  { name: "Sarah Williams", text: "The clinic facilities are top-notch. Best neurology center in the city.", rating: 5, date: "1 month ago" },
  { name: "Michael Chen", text: "Efficient booking process and very detailed consultation. Highly recommend.", rating: 5, date: "3 weeks ago" },
  { name: "Emily Brown", text: "I've seen many specialists, but Dr. Arpan's approach is uniquely effective.", rating: 5, date: "2 months ago" },
  { name: "David Miller", text: "Great staff and very professional environment. Five stars!", rating: 5, date: "5 days ago" },
  { name: "Lisa Thompson", text: "Found relief for my chronic migraines after years of searching. Thank you!", rating: 5, date: "1 week ago" },
];

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 bg-black/50 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 text-primary mb-2">
            <Star className="fill-primary" size={20} />
            <Star className="fill-primary" size={20} />
            <Star className="fill-primary" size={20} />
            <Star className="fill-primary" size={20} />
            <Star className="fill-primary" size={20} />
            <span className="font-bold text-white ml-2">4.9 / 5.0</span>
          </div>
          <h2 className="text-3xl font-bold font-playfair">Patient Feedback on Google</h2>
        </div>
        <div className="text-center md:text-right">
          <div className="text-4xl font-bold text-white mb-1">500+</div>
          <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Authentic Reviews</div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden whitespace-nowrap cursor-default hover:[animation-play-state:paused]"
      >
        {[...reviews, ...reviews].map((review, i) => (
          <div
            key={i}
            className="inline-block w-[350px] glass p-8 rounded-2xl border-white/5 whitespace-normal shrink-0"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-white">{review.name}</span>
              <span className="text-[10px] text-muted-foreground uppercase">{review.date}</span>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              &ldquo;{review.text}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
