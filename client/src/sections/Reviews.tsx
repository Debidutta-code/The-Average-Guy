"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rajesh Mohanty",
    rating: 5,
    text: "Best dental clinic in Bapuji Nagar. Dr. Kapoor is very professional and explained the procedure clearly. The treatment was absolutely painless.",
    date: "2 months ago"
  },
  {
    name: "Priyanka Das",
    rating: 5,
    text: "Had a great experience with my RCT. The clinic is very clean and the staff is very polite. Highly recommended for family dental care.",
    date: "1 month ago"
  },
  {
    name: "Sandeep Sahoo",
    rating: 5,
    text: "Modern equipment and expert diagnosis. I went for teeth whitening and the results are amazing. Very happy with the service.",
    date: "3 weeks ago"
  },
  {
    name: "Anjali Mishra",
    rating: 5,
    text: "Finally found a dentist who actually cares about patient comfort. Gentle touch and very reasonable pricing in Bhubaneswar.",
    date: "4 months ago"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4">Patient Stories</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Trusted by Hundreds of <span className="text-primary italic">Happy</span> Patients
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
               <div className="flex text-yellow-400">
                 {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
               </div>
               <span className="font-bold text-slate-900">5.0 Rating</span>
               <span className="text-slate-400 text-sm">(13 Google Reviews)</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 relative group"
            >
              <div className="text-primary/10 absolute top-6 right-8 group-hover:text-primary/20 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>
              <div className="flex text-yellow-400 mb-4">
                 {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">&quot;{review.text}&quot;</p>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold mt-1">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a
            href="https://www.google.com/search?q=Kapoor%27s+Dental+Care+Centre+Bhubaneswar"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-full font-bold text-slate-700 hover:border-primary hover:text-primary transition-all shadow-sm"
           >
             <Image src="https://www.google.com/favicon.ico" alt="Google" width={20} height={20} />
             <span>Read all Google Reviews</span>
           </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
