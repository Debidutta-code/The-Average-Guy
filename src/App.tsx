import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Footer from './components/layout/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: any, e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <main className="relative bg-background text-white selection:bg-gold selection:text-black">
      <Navbar />
      <Hero />
      <div className="relative z-20 bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
        <About />
        <WhyChooseUs />
        <Footer />
      </div>
    </main>
  )
}

export default App
