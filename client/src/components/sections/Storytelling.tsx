"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const stories = [
  {
    title: "Discipline",
    desc: "The bridge between goals and accomplishment.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
  },
  {
    title: "Pain",
    desc: "Temporary sacrifice for permanent greatness.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c64b52d2?auto=format&fit=crop&q=80",
  },
  {
    title: "Transformation",
    desc: "Shed your limits, embrace your power.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80",
  },
  {
    title: "Confidence",
    desc: "Look in the mirror and love the progress.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
  },
  {
    title: "Power",
    desc: "Unleash the ultimate version of yourself.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80",
  },
];

export default function Storytelling() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".story-section");

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
          snap: 1,
        });

        gsap.fromTo(
          section.querySelector(".story-content"),
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom center",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black">
      {stories.map((story, i) => (
        <section
          key={story.title}
          className="story-section relative flex h-screen w-full items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover opacity-30 grayscale transition-all duration-700 hover:scale-110 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black" />
          </div>

          {/* Content */}
          <div className="story-content container relative z-10 px-6 text-center">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.5em] text-qnts-lime">
              0{i + 1}
            </span>
            <h2 className="mb-6 text-7xl font-black uppercase italic tracking-tighter text-white md:text-9xl">
              {story.title}
            </h2>
            <p className="mx-auto max-w-xl text-lg font-medium text-white/60 md:text-2xl">
              {story.desc}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
