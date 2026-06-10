import { images } from "./images";
import {
  Stethoscope,
  Sparkles,
  FileText,
  Activity,
  Zap,
  Heart,
  Baby,
  ShieldCheck,
  Component,
  Smile,
  Layers,
  Smartphone
} from "lucide-react";

export const services = [
  {
    id: "checkup",
    title: "Dental Checkup",
    description: "Comprehensive oral examination to detect and prevent dental issues early.",
    image: images.services.checkup,
    icon: Stethoscope
  },
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    description: "Professional scaling and polishing to remove plaque, tartar, and stains.",
    image: images.services.cleaning,
    icon: Sparkles
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Advanced endodontic therapy to save infected teeth and relieve pain.",
    image: images.services.rootCanal,
    icon: Activity
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent and natural-looking replacement for missing teeth.",
    image: images.services.implants,
    icon: Layers
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Safe and effective brightening for a dazzling, confident smile.",
    image: images.services.whitening,
    icon: Zap
  },
  {
    id: "smile-design",
    title: "Smile Designing",
    description: "Customized cosmetic enhancements to create your perfect smile.",
    image: images.services.smileDesigning,
    icon: Smile
  },
  {
    id: "braces",
    title: "Braces & Aligners",
    description: "Orthodontic solutions for perfectly aligned teeth and a better bite.",
    image: images.services.braces,
    icon: Component
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    description: "Painless removal of damaged or problematic teeth, including wisdom teeth.",
    image: images.services.extraction,
    icon: FileText
  },
  {
    id: "fillings",
    title: "Dental Fillings",
    description: "High-quality, tooth-colored restorations for cavities and minor damage.",
    image: images.services.fillings,
    icon: ShieldCheck
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    description: "Gentle and fun dental care specially designed for children.",
    image: images.services.pediatric,
    icon: Baby
  },
  {
    id: "gum-treatment",
    title: "Gum Treatment",
    description: "Specialized care for healthy gums and treatment of periodontal diseases.",
    image: images.services.gumTreatment,
    icon: Heart
  },
  {
    id: "crowns",
    title: "Crowns & Bridges",
    description: "Durable and aesthetic restorations to protect and replace damaged teeth.",
    image: images.services.crowns,
    icon: Smartphone
  }
];
