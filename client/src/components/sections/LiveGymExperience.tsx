"use client";

import { motion } from "framer-motion";

export default function LiveGymExperience() {
  return (
    <section className="bg-[#050505] py-32">
      <div className="container mx-auto px-6">
        <div className="rounded-[40px] bg-zinc-900 p-10 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-qnts-lime to-transparent" />

          <div className="relative z-10 grid gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-qnts-lime opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-qnts-lime"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-qnts-lime">
                  Live Status: Optimizing
                </span>
              </div>

              <h2 className="mb-8 text-5xl font-black text-white md:text-7xl">
                EXPERIENCE <br />
                <span className="italic text-qnts-red">THE PULSE</span>
              </h2>

              <div className="space-y-10">
                <div className="group">
                  <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-widest text-white/40">
                    <span>Current Crowd Meter</span>
                    <span className="text-qnts-lime">45% (Moderate)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-black">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full rounded-full bg-qnts-lime shadow-[0_0_15px_rgba(223,255,0,0.5)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-black text-white">5:30 AM</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40">
                      Peak Hours Start
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white">08/10</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40">
                      Trainers on Floor
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-2xl bg-black">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
                  alt="Live Gym"
                  className="h-full w-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                     <div className="mb-4 inline-block rounded-full bg-white/10 p-6 backdrop-blur-xl">
                       <div className="h-4 w-4 rounded-full bg-qnts-red animate-pulse" />
                     </div>
                     <div className="text-xs font-black uppercase tracking-widest text-white">
                       Live Feed (HQ)
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
