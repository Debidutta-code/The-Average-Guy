import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollSequence from './ScrollSequence';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;

    if (content) {
      gsap.to(content, {
        opacity: 0,
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-auto">
      {/* Animation Section */}
      <div className="sticky top-0 w-full h-screen">
        <ScrollSequence />
      </div>

      {/* Hero Content Overlay - This will be positioned on top of the pinned canvas */}
      <div
        ref={contentRef}
        className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none z-10"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-8xl font-playfair font-bold mb-6 leading-tight text-white"
          >
            Crafted For <br />
            <span className="text-gold">Coffee Lovers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-2xl text-secondary max-w-2xl mx-auto mb-10 font-inter"
          >
            Premium artisanal coffee roasted with passion and served with perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 pointer-events-auto"
          >
            <button className="bg-gold text-black px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105">
              Explore Menu
            </button>
            <button className="border border-white/20 hover:border-gold px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest bg-white/5 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 text-white">
              Visit Cafe
            </button>
          </motion.div>
        </div>
      </div>

      {/* Spacer to allow scroll through the sequence */}
      <div className="h-[300vh]"></div>
    </section>
  );
};

export default Hero;
