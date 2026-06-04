import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold text-white leading-tight">
                Dr. Partha Mohapatra
              </span>
              <span className="text-xs uppercase tracking-widest text-medical-400 font-medium">
                Dermatology Clinic
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Premium dermatology and trichology care in Bhubaneswar. Advanced treatments for skin, hair, and aesthetic concerns.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-500 transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-medical-500 transition-colors text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Gallery', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-medical-400 transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-medical-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Treatments</h4>
            <ul className="space-y-4">
              {['Acne Treatment', 'Hair Restoration', 'Laser Care', 'Anti-Aging', 'Skin Allergy'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="hover:text-medical-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">
              Subscribe to get latest skin care tips and clinic updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-slate-800 border-none rounded-l-lg px-4 py-3 w-full focus:ring-1 focus:ring-medical-500 outline-none"
              />
              <button className="bg-medical-500 text-white px-4 py-3 rounded-r-lg hover:bg-medical-600 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Partha Mohapatra Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
