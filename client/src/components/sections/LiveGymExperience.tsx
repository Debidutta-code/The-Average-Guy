"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LiveGymExperience() {
  return (
    <section className="bg-[#050505] section-padding">
      <div className="container-custom">
        <div className="rounded-[2.5rem] bg-zinc-900/50 p-8 md:p-16 relative overflow-hidden border border-white/5">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-qnts-lime to-transparent" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-qnts-lime opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-qnts-lime"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-qnts-lime">
                  Live Status: Optimizing
                </span>
              </div>

              <h2 className="mb-8">
                EXPERIENCE <br />
                <span className="italic text-qnts-lime underline decoration-white/10 underline-offset-8">THE PULSE</span>
              </h2>

              <div className="space-y-8">
                <div className="group">
                  <div className="mb-3 flex justify-between text-[10px] font-black uppercase tracking-widest text-white/40">
                    <span>Current Crowd Meter</span>
                    <span className="text-qnts-lime">45% (Moderate)</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-black/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full rounded-full bg-qnts-lime shadow-[0_0_10px_rgba(223,255,0,0.4)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-2xl font-black text-white">5:30 AM</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">
                      Peak Hours Start
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">08/10</div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">
                      Trainers on Floor
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-2xl bg-black/50 border border-white/5 relative">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
                  alt="Live Gym"
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="text-center">
                     <div className="mb-4 inline-block rounded-full bg-white/5 p-4 backdrop-blur-xl border border-white/10">
                       <div className="h-2 w-2 rounded-full bg-qnts-lime animate-pulse" />
                     </div>
                     <div className="text-[9px] font-black uppercase tracking-widest text-white/60">
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
