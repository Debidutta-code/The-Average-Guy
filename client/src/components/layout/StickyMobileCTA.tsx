import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Calendar, MessageCircle } from "lucide-react";

export const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 p-4 md:hidden animate-in slide-in-from-bottom-full duration-500">
      <div className="grid grid-cols-3 gap-3">
        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
          className="flex flex-col items-center justify-center py-2 text-foreground/70 hover:text-primary transition-colors"
        >
          <Phone size={20} />
          <span className="text-[10px] font-bold mt-1 uppercase">Call</span>
        </a>
        <Link
          href="#book"
          className="flex flex-col items-center justify-center py-2 bg-primary text-white rounded-xl shadow-lg shadow-primary/20"
        >
          <Calendar size={20} />
          <span className="text-[10px] font-bold mt-1 uppercase">Book</span>
        </Link>
        <a
          href={siteConfig.links.whatsapp}
          target="_blank"
          className="flex flex-col items-center justify-center py-2 text-foreground/70 hover:text-emerald-500 transition-colors"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] font-bold mt-1 uppercase">Chat</span>
        </a>
      </div>
    </div>
  );
};
