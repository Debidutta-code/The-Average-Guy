import React from 'react';
import { blogPosts } from '@/data/siteData';
import { Star, Quote, PlayCircle } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: "Patient Reviews | SkinCare Clinic",
  description: "Read what our patients have to say about their experiences and results at SkinCare Clinic.",
};

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900">Patient Testimonials</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Your trust is our greatest achievement. Here is what our patients say about their journey with us.</p>
        </div>

        {/* Video Testimonials Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-playfair font-bold mb-12 text-center">Video Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative rounded-[32px] overflow-hidden aspect-[9/16] bg-slate-100 shadow-xl">
                <Image
                  src={`https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=1000&fit=crop`}
                  alt="Video Testimonial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle className="text-white w-12 h-12" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-bold text-lg">Emma&apos;s Hair Journey</p>
                  <p className="text-sm text-slate-300">PRP Therapy Results</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm relative hover:shadow-xl transition-all group">
              <Quote className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={64} />
              <div className="flex text-amber-400 space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 leading-relaxed italic mb-8 relative z-10">
                &quot;The experience was absolutely wonderful. The staff is professional and the results are better than I expected. I highly recommend SkinCare Clinic for any dermatological concerns.&quot;
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden relative">
                   <Image src={`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop`} alt="Patient" fill />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Patient {i+1}</p>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">Skin Rejuvenation</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
