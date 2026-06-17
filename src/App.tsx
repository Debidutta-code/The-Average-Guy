import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ImageSequence from './components/ImageSequence'
import { Coffee, Wind, Home } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=3000',
      pin: true,
      scrub: true,
      onUpdate: (self: { progress: number }) => {
        setProgress(self.progress)
      },
    })
  }, { scope: containerRef })

  return (
    <main className="bg-[#050505] text-white">
      {/* Section 1: Hero (Pinned) */}
      <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <ImageSequence progress={progress} />

        <div className="relative z-10 text-center px-4 pt-40">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 drop-shadow-2xl">
            Coffee Monk
          </h1>
          <p className="text-xl md:text-2xl text-accent font-light tracking-widest uppercase mb-8">
            Premium Artisanal Coffee
          </p>
          <button className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-[#050505] transition-all duration-300 rounded-full font-medium tracking-wide">
            Explore
          </button>
        </div>

        {/* Gradient overlay for better text readability and transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505] pointer-events-none" />
      </section>

      {/* Section 2: Content */}
      <section className="relative z-20 px-4 py-32 max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">The Perfect Cup</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            This section exists only to demonstrate the scroll transition from the image sequence animation into normal website content.
            Experience the harmony of traditional craft and modern precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="group p-8 border border-white/10 rounded-2xl hover:border-accent/50 transition-colors duration-500">
            <Coffee className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-semibold mb-4">Fresh Beans</h3>
            <p className="text-gray-400 leading-relaxed">
              Sourced from the finest high-altitude plantations, our beans are roasted daily in small batches.
            </p>
          </div>

          <div className="group p-8 border border-white/10 rounded-2xl hover:border-accent/50 transition-colors duration-500">
            <Wind className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-semibold mb-4">Artisan Brewing</h3>
            <p className="text-gray-400 leading-relaxed">
              Every cup is a masterpiece, crafted by masters who understand the delicate chemistry of flavor.
            </p>
          </div>

          <div className="group p-8 border border-white/10 rounded-2xl hover:border-accent/50 transition-colors duration-500">
            <Home className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-semibold mb-4">Cozy Atmosphere</h3>
            <p className="text-gray-400 leading-relaxed">
              Find your sanctuary in our thoughtfully designed spaces, where time slows down for the perfect sip.
            </p>
          </div>
        </div>
      </section>

      {/* Footer-like spacer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Coffee Monk. All rights reserved.
      </footer>
    </main>
  )
}

export default App
