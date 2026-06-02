"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import InteractiveBrain from "./InteractiveBrain";
import { TextReveal } from "@/components/ui/Animations";

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    title: "Migraine Care",
    description: "Advanced abortive and preventive therapies for chronic headaches and migraines.",
    color: "text-blue-400",
  },
  {
    title: "Stroke Recovery",
    description: "Rapid intervention and comprehensive post-stroke rehabilitation protocols.",
    color: "text-teal-400",
  },
  {
    title: "Epilepsy Management",
    description: "Precision diagnosis and medication management for seizure disorders.",
    color: "text-blue-500",
  },
  {
    title: "Parkinson's Treatment",
    description: "Holistic approach to movement disorders and neurodegenerative conditions.",
    color: "text-indigo-400",
  },
  {
    title: "Memory Disorders",
    description: "Early detection and management of Alzheimer's and cognitive decline.",
    color: "text-cyan-400",
  },
  {
    title: "Neuropathy Care",
    description: "Comprehensive evaluation and treatment for peripheral nerve disorders.",
    color: "text-emerald-400",
  },
];

export default function BrainShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const canvasContainerRef = useRef<HTMLDivElement>(null!);
  const contentRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".specialty-item");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: 1,
      });

      items.forEach((item, i) => {
        const element = item as HTMLElement;
        gsap.fromTo(
          element,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${i * 35}% top`,
              end: `${(i + 1) * 35}% top`,
              scrub: true,
            },
          }
        );

        if (i < items.length - 1) {
            gsap.to(element, {
                opacity: 0,
                y: -30,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: `${(i + 0.7) * 35}% top`,
                    end: `${(i + 1) * 35}% top`,
                    scrub: true,
                }
            })
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative h-[80vh] min-h-[600px] lg:h-screen lg:min-h-[800px] bg-black overflow-hidden flex items-center py-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div ref={canvasContainerRef} className="h-[400px] lg:h-[600px] relative order-2 lg:order-1">
            <InteractiveBrain />
          </div>

          <div ref={contentRef} className="relative h-[300px] flex flex-col justify-center order-1 lg:order-2">
            <div className="mb-8">
              <TextReveal>
                <h2 className="text-3xl lg:text-5xl font-bold font-playfair mb-4">
                  Specialized <span className="text-primary">Neuro Expertise</span>
                </h2>
              </TextReveal>
              <p className="text-muted-foreground text-base max-w-md">
                Scroll to explore our core neurological specialties.
              </p>
            </div>

            <div className="relative h-48">
              {specialties.map((spec) => (
                <div
                  key={spec.title}
                  className="specialty-item absolute inset-0 flex flex-col justify-center opacity-0"
                >
                  <h3 className={`text-2xl lg:text-4xl font-bold mb-3 ${spec.color}`}>
                    {spec.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
