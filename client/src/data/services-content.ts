import { images } from "@/data/images";
import {
  Activity,
  Layers,
  Zap,
  Smile,
  Component,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  Baby,
  FileText,
  Smartphone,
  Heart
} from "lucide-react";

export const servicesContent = {
  "root-canal-treatment-bhubaneswar": {
    title: "Best Root Canal Treatment in Bhubaneswar",
    description: "Expert, painless Root Canal Treatment (RCT) at MO Dental Clinic. Save your natural teeth with our advanced endodontic therapy.",
    content: "Root Canal Treatment (RCT) is a dental procedure used to save a tooth that is badly decayed or becomes infected. At MO Dental Clinic, we use the latest technology to ensure a painless and efficient RCT experience.",
    image: images.services.rootCanal,
    icon: Activity,
    benefits: ["Relieves dental pain", "Prevents spread of infection", "Saves natural tooth", "Restores chewing function"],
    faqs: [
      { q: "Is RCT painful?", a: "No, with modern anesthesia, RCT is no more painful than a regular filling." },
      { q: "How many sittings are required?", a: "Most cases are completed in 1-2 sittings." }
    ]
  },
  "dental-implants-bhubaneswar": {
    title: "Top Dental Implants in Bhubaneswar",
    description: "Restore your smile with premium dental implants at MO Dental Clinic. Permanent, natural-looking tooth replacement solutions.",
    content: "Dental implants are the gold standard for replacing missing teeth. They look, feel, and function like natural teeth. Our specialists ensure precise placement for long-lasting results.",
    image: images.services.implants,
    icon: Layers,
    benefits: ["Permanent solution", "Look and feel natural", "No damage to adjacent teeth", "Improved speech and comfort"],
    faqs: [
      { q: "How long do implants last?", a: "With proper care, dental implants can last a lifetime." },
      { q: "Are implants safe?", a: "Yes, they are made of biocompatible titanium and are very safe." }
    ]
  },
  "teeth-whitening-bhubaneswar": {
    title: "Professional Teeth Whitening in Bhubaneswar",
    description: "Get a brighter, whiter smile with our advanced teeth whitening treatments. Safe and effective results in just one session.",
    content: "Our professional teeth whitening procedure removes deep stains and discoloration, giving you a dazzling smile that boosts your confidence.",
    image: images.services.whitening,
    icon: Zap,
    benefits: ["Instant results", "Safe for enamel", "Boosts confidence", "Customized shade"],
    faqs: [
      { q: "Does whitening damage enamel?", a: "Professional whitening is safe and does not damage enamel when done correctly." },
      { q: "How long do results last?", a: "Results can last up to 2 years with good oral hygiene." }
    ]
  },
  "braces-treatment-bhubaneswar": {
    title: "Orthodontic Braces & Aligners in Bhubaneswar",
    description: "Perfectly align your teeth with our modern braces and clear aligner treatments. Specialized orthodontic care for all ages.",
    content: "Whether you prefer traditional braces or modern invisible aligners, we provide the best orthodontic solutions to correct crowding, gaps, and bite issues.",
    image: images.services.braces,
    icon: Component,
    benefits: ["Improved aesthetics", "Better oral health", "Corrects bite issues", "Options for all ages"],
    faqs: [
      { q: "Are clear aligners effective?", a: "Yes, clear aligners are highly effective for most orthodontic cases." },
      { q: "What is the best age for braces?", a: "Orthodontic treatment can be successful at any age." }
    ]
  },
  "smile-designing-bhubaneswar": {
    title: "Expert Smile Designing in Bhubaneswar",
    description: "Transform your smile with customized cosmetic dentistry at MO Dental Clinic. Personalized plans for your dream smile.",
    content: "Smile Designing is a cosmetic dental procedure that creates artistic smiles. It involves a combination of various dental treatments to achieve the desired aesthetic look.",
    image: images.services.smileDesigning,
    icon: Smile,
    benefits: ["Complete transformation", "Customized for your face", "Corrects multiple issues", "Natural appearance"],
    faqs: [
      { q: "How is a smile designed?", a: "We use digital analysis to plan a smile that complements your facial features." },
      { q: "Is it expensive?", a: "We offer various options to fit different budgets." }
    ]
  },
  "dental-checkup-bhubaneswar": {
    title: "Comprehensive Dental Checkup in Bhubaneswar",
    description: "Maintain optimal oral health with regular dental checkups at MO Dental Clinic. Comprehensive examinations for the whole family.",
    content: "Regular dental checkups are the foundation of good oral health. Our thorough examination includes screening for cavities, gum disease, and oral cancer.",
    image: images.services.checkup,
    icon: Stethoscope,
    benefits: ["Early detection", "Professional advice", "Oral cancer screening", "Preventive care"],
    faqs: [
      { q: "How often should I have a checkup?", a: "We recommend a checkup every six months for most patients." },
      { q: "What happens during a checkup?", a: "We examine your teeth, gums, and mouth, and may take X-rays if needed." }
    ]
  },
  "teeth-cleaning-bhubaneswar": {
    title: "Professional Teeth Cleaning in Bhubaneswar",
    description: "Restore your oral hygiene with professional scaling and polishing. Effective removal of plaque and tartar for a fresh feel.",
    content: "Professional cleaning removes plaque and tartar that regular brushing can't reach, preventing gum disease and keeping your breath fresh.",
    image: images.services.cleaning,
    icon: Sparkles,
    benefits: ["Prevents gum disease", "Removes stains", "Freshens breath", "Brightens smile"],
    faqs: [
      { q: "Is scaling painful?", a: "Most patients experience little to no discomfort during professional cleaning." },
      { q: "How long does it take?", a: "A typical cleaning session takes 30-45 minutes." }
    ]
  },
  "tooth-extraction-bhubaneswar": {
    title: "Painless Tooth Extraction in Bhubaneswar",
    description: "Safe and comfortable tooth extraction procedures at MO Dental Clinic. Expert care for damaged or wisdom teeth.",
    content: "When a tooth cannot be saved, we provide gentle and painless extraction procedures, ensuring your comfort throughout the process.",
    image: images.services.extraction,
    icon: FileText,
    benefits: ["Relieves chronic pain", "Prevents infection spread", "Quick recovery", "Painless procedure"],
    faqs: [
      { q: "Is extraction painful?", a: "We use local anesthesia to ensure the procedure is completely painless." },
      { q: "What is the recovery time?", a: "Most patients recover within a few days following our aftercare instructions." }
    ]
  },
  "dental-fillings-bhubaneswar": {
    title: "Quality Dental Fillings in Bhubaneswar",
    description: "Restore decayed teeth with high-quality, tooth-colored fillings. Durable and aesthetic solutions for cavities.",
    content: "We use advanced composite materials for fillings that match the natural color of your teeth, restoring function and aesthetics.",
    image: images.services.fillings,
    icon: ShieldCheck,
    benefits: ["Natural appearance", "Durable materials", "Prevents further decay", "Single visit procedure"],
    faqs: [
      { q: "How long do fillings last?", a: "Composite fillings typically last 5-10 years with good care." },
      { q: "Do you use silver fillings?", a: "We prefer tooth-colored composite materials for better aesthetics and safety." }
    ]
  },
  "kids-dentistry-bhubaneswar": {
    title: "Best Kids Dentistry in Bhubaneswar",
    description: "Gentle and friendly dental care for children at MO Dental Clinic. Building healthy smiles for the little ones.",
    content: "We provide a welcoming environment for children, focusing on preventive care and educating young patients about oral hygiene.",
    image: images.services.pediatric,
    icon: Baby,
    benefits: ["Child-friendly environment", "Preventive focus", "Habit counseling", "Gentle care"],
    faqs: [
      { q: "When should a child's first visit be?", a: "By their first birthday or when the first tooth appears." },
      { q: "Are milk teeth important?", a: "Yes, they hold space for permanent teeth and are crucial for speech and eating." }
    ]
  },
  "gum-treatment-bhubaneswar": {
    title: "Effective Gum Treatment in Bhubaneswar",
    description: "Specialized care for healthy gums and treatment of periodontal diseases. Restore your gum health with our experts.",
    content: "Healthy gums are essential for a healthy smile. We offer specialized treatments for gingivitis and periodontitis to prevent tooth loss.",
    image: images.services.gumTreatment,
    icon: Heart,
    benefits: ["Prevents tooth loss", "Reduces inflammation", "Stops gum bleeding", "Improves overall health"],
    faqs: [
      { q: "What are signs of gum disease?", a: "Bleeding while brushing, swollen gums, and persistent bad breath." },
      { q: "Is gum disease reversible?", a: "Early-stage gingivitis is reversible with professional treatment and good hygiene." }
    ]
  },
  "crowns-bridges-bhubaneswar": {
    title: "Dental Crowns & Bridges in Bhubaneswar",
    description: "Protect and restore your teeth with durable dental crowns and bridges. Aesthetic and long-lasting dental restorations.",
    content: "Crowns and bridges are fixed prosthetic devices that restore damaged teeth or replace missing ones, providing strength and a natural look.",
    image: images.services.crowns,
    icon: Smartphone,
    benefits: ["Restores function", "Aesthetic appearance", "Durable protection", "Prevents tooth shifting"],
    faqs: [
      { q: "How long do crowns last?", a: "With good hygiene, they can last 10-15 years or more." },
      { q: "What's the difference between a crown and bridge?", a: "A crown covers one tooth; a bridge replaces one or more missing teeth." }
    ]
  }
};
