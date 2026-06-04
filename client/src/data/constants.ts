import {
  Stethoscope,
  User,
  Sparkles,
  Clock,
  ShieldCheck,
  Award,
} from "lucide-react";

export const CLINIC_DATA = {
  name: "Dr. Partha Mohapatra",
  title: "Dermatologist & Skin, Hair Specialist",
  clinicName: "Radiance Skin & Hair Clinic",
  rating: 4.9,
  reviewsCount: 840,
  experience: "12+",
  patientsServed: "10,000+",
  location: "Nayapalli, Bhubaneswar",
  address: "Plot No. 124, Nayapalli, Near IDBI Bank, Bhubaneswar, Odisha 751012",
  phone: "+91 99370 12345",
  whatsapp: "+91 99370 12345",
  email: "contact@drparthaskin.com",
  workingHours: "Mon - Sat: 10:00 AM - 08:00 PM",
};

export const SERVICES = [
  {
    id: "acne",
    title: "Acne Treatment",
    description: "Comprehensive medical and cosmetic solutions for active acne and stubborn scars.",
    symptoms: ["Cystic acne", "Blackheads", "Acne scarring", "Hormonal breakouts"],
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "hair-loss",
    title: "Hair Loss Therapy",
    description: "Advanced hair restoration treatments including PRP and medical hair growth therapies.",
    symptoms: ["Thinning hair", "Alopecia", "Scalp infections", "Receding hairline"],
    icon: User,
    image: "https://images.unsplash.com/photo-1527799822394-465a3d6037cd?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "laser",
    title: "Laser Hair Removal",
    description: "Painless, permanent hair reduction using world-class laser technology for all skin types.",
    symptoms: ["Unwanted body hair", "Ingrown hairs", "Hirsutism"],
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "pigmentation",
    title: "Pigmentation Treatment",
    description: "Effective removal of dark spots, melasma, and uneven skin tone for a radiant glow.",
    symptoms: ["Melasma", "Sun spots", "Hyper-pigmentation", "Dark circles"],
    icon: Award,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "anti-aging",
    title: "Anti-Aging Care",
    description: "Minimize fine lines and wrinkles with Botox, fillers, and advanced skin tightening.",
    symptoms: ["Fine lines", "Wrinkles", "Sagging skin", "Volume loss"],
    icon: Clock,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "skin-allergy",
    title: "Skin Allergy",
    description: "Diagnosis and treatment of various skin allergies, eczema, and dermatitis.",
    symptoms: ["Itching", "Redness", "Rashes", "Swelling"],
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1628154491740-2f451b239221?q=80&w=2070&auto=format&fit=crop",
  }
];

export const REVIEWS = [
  {
    name: "Subhashree Mohanty",
    text: "Dr. Partha is very patient and explains everything clearly. My acne cleared up in just 3 months. Best dermatologist in Bhubaneswar!",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Rakesh Patra",
    text: "Excellent treatment for hair loss. I can see visible results from the PRP sessions. The clinic is very clean and professional.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Anita Dash",
    text: "Highly recommended for laser hair removal. It was almost painless and the results are amazing. Very premium feel clinic.",
    rating: 5,
    date: "3 weeks ago"
  }
];

export const FAQS = [
  {
    question: "What is the consultation fee?",
    answer: "The initial consultation fee is ₹500, which includes a comprehensive skin/hair analysis and treatment plan."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book directly via our website, call us at +91 99370 12345, or send a WhatsApp message for quick booking."
  },
  {
    question: "Are your treatments safe?",
    answer: "Yes, all our treatments are FDA-approved and performed by experienced medical professionals under Dr. Partha's supervision."
  },
  {
    question: "Is there a recovery period for laser treatments?",
    answer: "Most of our laser treatments have zero to minimal downtime, allowing you to return to work immediately."
  }
];
