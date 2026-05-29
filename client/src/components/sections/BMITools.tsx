"use client";

import { useState } from "react";

export default function BMITools() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const bmiValue = parseFloat((weight / ((height / 100) * (height / 100))).toFixed(1));

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Healthy";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <section className="bg-[#050505] section-padding" id="tools">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6">
              KNOW YOUR <br />
              <span className="text-qnts-lime italic underline decoration-white/10 underline-offset-8">NUMBERS</span>
            </h2>
            <p className="max-w-md mb-10">
              Data is the foundation of transformation. Use our premium tools to
              calculate your starting point and track your trajectory.
            </p>

            <div className="grid grid-cols-2 gap-6">
               <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-6">
                 <div className="text-3xl font-black text-qnts-lime">{bmiValue}</div>
                 <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Your Current BMI</div>
               </div>
               <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-6">
                 <div className="text-xl font-black text-white">{getBMICategory(bmiValue)}</div>
                 <div className="text-[9px] font-bold uppercase tracking-widest text-white/30">Status</div>
               </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/5 bg-zinc-900/50 p-8 md:p-12 backdrop-blur-sm">
            <div className="space-y-10">
              <div>
                <div className="mb-4 flex justify-between items-end">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Weight</span>
                  <span className="text-sm font-black text-qnts-lime">{weight} <span className="text-[10px] text-white/40 font-bold">kg</span></span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(parseInt(e.target.value))}
                  className="w-full accent-qnts-lime h-1 bg-black rounded-full appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="mb-4 flex justify-between items-end">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Height</span>
                  <span className="text-sm font-black text-qnts-lime">{height} <span className="text-[10px] text-white/40 font-bold">cm</span></span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(parseInt(e.target.value))}
                  className="w-full accent-qnts-lime h-1 bg-black rounded-full appearance-none cursor-pointer"
                />
              </div>

              <button className="w-full rounded-2xl bg-qnts-lime py-4 text-[11px] font-black uppercase tracking-widest text-black transition-all hover:bg-white active:scale-95 shadow-xl shadow-qnts-lime/5">
                Calculate Deep Stats
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
