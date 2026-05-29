"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MobileAppPromotion() {
  return (
    <section className="bg-black section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="relative order-2 lg:order-1">
             <motion.div
               initial={{ rotate: -10, y: 30, opacity: 0 }}
               whileInView={{ rotate: -5, y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="relative z-10 mx-auto w-[240px] md:w-[280px] aspect-[9/19] rounded-[2.5rem] border-[6px] border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden"
             >
                <Image
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
                  fill
                  className="object-cover"
                  alt="App Preview"
                />
             </motion.div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-qnts-lime/10 blur-[100px] -z-10 rounded-full" />
          </div>

          <div className="order-1 lg:order-2">
            <span className="mb-4 inline-block text-[10px] font-black uppercase tracking-[0.3em] text-qnts-lime">
              Digital Power
            </span>
            <h2 className="mb-8">
              YOUR GYM <br />
              <span className="italic text-qnts-lime underline decoration-white/10 underline-offset-8">IN YOUR POCKET</span>
            </h2>
            <p className="mb-10 max-w-md">
              Track workouts, manage memberships, and book your personal training
              sessions instantly. Available for iOS and Android.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-xl bg-white px-6 py-3 transition-all hover:bg-qnts-lime active:scale-95">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" width={100} height={30} alt="App Store" className="h-5 w-auto" />
              </button>
              <button className="flex items-center gap-3 rounded-xl bg-zinc-900 border border-white/10 px-6 py-3 transition-all hover:bg-zinc-800 active:scale-95">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" width={100} height={30} alt="Play Store" className="h-5 w-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
