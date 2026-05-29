"use client";

import { useState } from "react";

export default function BMITools() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);

  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Healthy Weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  return (
    <section className="bg-[#050505] py-32" id="tools">
      <div className="container mx-auto px-6">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
          <div>
            <h2 className="mb-8 text-5xl font-black text-white md:text-7xl leading-tight">
              KNOW YOUR <br />
              <span className="text-qnts-red italic">NUMBERS</span>
            </h2>
            <p className="text-lg text-white/50 mb-10">
              Data is the foundation of transformation. Use our premium tools to
              calculate your starting point and track your trajectory.
            </p>

            <div className="grid grid-cols-2 gap-10">
               <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-8">
                 <div className="text-4xl font-black text-qnts-lime">{bmi}</div>
                 <div className="text-[10px] uppercase tracking-widest text-white/40">Your Current BMI</div>
               </div>
               <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-8">
                 <div className="text-2xl font-black text-white">{getBMICategory(parseFloat(bmi))}</div>
                 <div className="text-[10px] uppercase tracking-widest text-white/40">Status</div>
               </div>
            </div>
          </div>

          <div className="rounded-[40px] border border-white/5 bg-zinc-900 p-10 md:p-16">
            <div className="space-y-12">
              <div>
                <div className="mb-6 flex justify-between">
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Weight</span>
                  <span className="text-sm font-black text-qnts-lime">{weight} kg</span>
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
                <div className="mb-6 flex justify-between">
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Height</span>
                  <span className="text-sm font-black text-qnts-lime">{height} cm</span>
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

              <button className="w-full rounded-2xl bg-qnts-lime py-5 text-sm font-black uppercase tracking-widest text-black transition-transform hover:scale-105">
                Calculate Deep Stats
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
