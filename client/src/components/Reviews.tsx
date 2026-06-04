import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "A. Kumar",
    condition: "Acne Treatment",
    rating: 5,
    text: "Excellent treatment for acne. Dr. Partha is very professional and explained the process clearly. I saw visible results within 3 weeks."
  },
  {
    name: "S. Patra",
    condition: "Hair Loss",
    rating: 5,
    text: "Best dermatologist in Bhubaneswar for hair issues. The clinical approach is very structured and effective. Highly recommended."
  },
  {
    name: "R. Sharma",
    condition: "Skin Allergy",
    rating: 4,
    text: "Had a chronic skin allergy for months. Dr. Partha diagnosed it correctly in the first visit. Very satisfied with the outcome."
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
              Patient <span className="text-medical-500">Testimonials</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Hear from our patients who have experienced life-changing skin and hair treatments at our clinic.
            </p>
          </div>

          <div className="bg-medical-50 p-6 rounded-2xl border border-medical-100 flex flex-col items-center">
            <div className="text-4xl font-bold text-slate-900 flex items-baseline gap-1">
              4.9 <span className="text-lg text-slate-400 font-normal">/ 5</span>
            </div>
            <div className="flex gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-medical-500 text-medical-500" />
              ))}
            </div>
            <p className="text-sm font-semibold text-medical-600">983 Google Reviews</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative group transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <Quote className="absolute top-6 right-8 text-medical-200 group-hover:text-medical-500 transition-colors" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-medical-500 text-medical-500" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 relative z-10 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-medical-100 rounded-full flex items-center justify-center text-medical-600 font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-medical-500 font-medium">{review.condition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
