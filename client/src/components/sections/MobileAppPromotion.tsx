"use client";

import { motion } from "framer-motion";

export default function MobileAppPromotion() {
  return (
    <section className="bg-black py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
             <motion.div
               initial={{ rotate: -10, y: 50, opacity: 0 }}
               whileInView={{ rotate: -5, y: 0, opacity: 1 }}
               className="relative z-10 mx-auto w-[280px] md:w-[320px] aspect-[9/19] rounded-[3rem] border-[8px] border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden"
             >
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
                  className="h-full w-full object-cover"
                  alt="App Preview"
                />
             </motion.div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-qnts-lime/10 blur-[120px] -z-10 rounded-full" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.3em] text-qnts-lime">
              Digital Power
            </span>
            <h2 className="mb-8 text-5xl font-black text-white md:text-7xl">
              YOUR GYM <br />
              <span className="italic text-qnts-red">IN YOUR POCKET</span>
            </h2>
            <p className="mb-10 text-lg text-white/50">
              Track workouts, manage memberships, and book your personal training
              sessions instantly. Available for iOS and Android.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 transition-transform hover:scale-105">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-6" alt="App Store" />
              </button>
              <button className="flex items-center gap-3 rounded-2xl bg-zinc-900 border border-white/10 px-8 py-4 transition-transform hover:scale-105">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-6" alt="Play Store" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
