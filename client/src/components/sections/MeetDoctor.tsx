import Image from "next/image";
import { CheckCircle2, GraduationCap, Award, Heart } from "lucide-react";

export const MeetDoctor = () => {
  return (
    <section id="doctor" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Doctor Image */}
          <div className="relative animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-8 border-slate-50">
              <Image
                src="/images/team/doctor.jpg"
                alt="Lead Dentist at Smile Planet Dental Care"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-[32px] text-white shadow-xl shadow-primary/20">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm font-medium opacity-90 uppercase tracking-wider">Years of <br />Experience</div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="space-y-4">
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm">Meet Our Specialist</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold">
                Expert Care by <br />
                <span className="text-primary">Dr. Partha Mohapatra</span>
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed italic border-l-4 border-primary pl-6">
                &quot;My philosophy is simple: Treat every patient like family and provide care that is gentle, effective, and lasting.&quot;
              </p>
            </div>

            <p className="text-foreground/60 leading-relaxed text-lg">
              Dr. Partha Mohapatra is a highly qualified dental surgeon with a passion for aesthetic dentistry and oral health. With over 15 years of experience, he has helped thousands of patients achieve their dream smiles in Bhubaneswar.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: GraduationCap, title: "Qualifications", text: "BDS, MDS (Prosthodontics)" },
                { icon: Award, title: "Specialization", text: "Implantologist & Aesthetic Expert" },
                { icon: CheckCircle2, title: "Achievements", text: "Gold Medalist in Oral Surgery" },
                { icon: Heart, title: "Patient Care", text: "10,000+ Successful Procedures" },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground">{item.title}</h5>
                    <p className="text-sm text-foreground/60">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="#book" className="btn btn-primary h-14 px-10">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
