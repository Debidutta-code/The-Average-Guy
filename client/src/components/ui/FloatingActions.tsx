import { CLINIC_DATA } from "@/data/constants";
import { MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:hidden">
      <Link
        href={`https://wa.me/${CLINIC_DATA.whatsapp.replace(/[\s+]/g, '')}`}
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce-slow"
      >
        <MessageSquare className="w-6 h-6" />
      </Link>
      <Link
        href="#book"
        className="w-14 h-14 bg-medical-500 text-white rounded-full shadow-2xl flex items-center justify-center"
      >
        <Calendar className="w-6 h-6" />
      </Link>
    </div>
  );
}
