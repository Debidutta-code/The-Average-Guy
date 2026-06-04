import { REVIEWS, CLINIC_DATA } from "@/data/constants";
import { Star, Quote } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-medical-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-700">
              {CLINIC_DATA.rating} / 5.0 (840+ Reviews)
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
            Trusted by Thousands
          </h2>
          <p className="text-slate-600 text-lg">
            Hear from our patients about their experiences at Radiance Skin & Hair Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 h-full flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 opacity-10 group-hover:text-medical-100 transition-colors" />

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 leading-relaxed italic mb-8 flex-grow">
                  &quot;{review.text}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{review.name}</div>
                    <div className="text-xs text-slate-400">{review.date}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-medical-600 font-bold hover:underline">
            View all 840+ Google Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
