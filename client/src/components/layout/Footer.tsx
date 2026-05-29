"use client";

import Link from "next/link";
import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-8 block text-4xl font-black tracking-tighter text-white">
              QNTS<span className="text-qnts-lime">FITNESS</span>
            </Link>
            <p className="max-w-md text-lg text-white/40">
              The ultimate destination for premium fitness, elite coaching, and
              world-class transformations in Bhubaneswar.
            </p>
          </div>

          <div>
            <h4 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-white">Navigation</h4>
            <ul className="space-y-4">
              {["Programs", "Locations", "Pricing", "Gallery", "About"].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-sm font-medium text-white/60 transition-colors hover:text-qnts-lime">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-white">Connect</h4>
            <div className="flex gap-6">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <Link key={i} href="#" className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white transition-all hover:bg-qnts-lime hover:text-black">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10">
          <p className="text-xs font-bold uppercase tracking-widest text-white/20 mb-4 md:mb-0">
            © 2024 QNTS FITNESS. ALL RIGHTS RESERVED.
          </p>
          <div className="text-[100px] md:text-[200px] font-black leading-none text-white/[0.02] absolute bottom-0 left-0 pointer-events-none select-none w-full text-center">
             QNTS FITNESS
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
