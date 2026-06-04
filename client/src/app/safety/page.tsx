import { Shield, Lock, EyeOff, CheckCircle, UserCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SafetyPage() {
  const safetyRules = [
    {
      title: "Identity Verification",
      icon: <UserCheck size={24} />,
      description: "All companions undergo a rigorous multi-stage verification process, including identity checks and reference validation."
    },
    {
      title: "Discrete Communication",
      icon: <EyeOff size={24} />,
      description: "Your communication with us and our companions is handled through secure, encrypted channels to protect your privacy."
    },
    {
      title: "Safe Meeting Guidelines",
      icon: <Shield size={24} />,
      description: "We provide comprehensive safety guidelines for both clients and companions to ensure every encounter is respectful and secure."
    },
    {
      title: "Data Protection",
      icon: <Lock size={24} />,
      description: "Your personal information is never shared with third parties. We adhere to the highest standards of data privacy (GDPR compliant)."
    }
  ];

  return (
    <div className="container px-4 py-24 pb-32 max-w-5xl">
      <header className="text-center space-y-6 mb-20">
        <h1 className="text-5xl md:text-7xl font-playfair">Safety & Discretion</h1>
        <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
          At Lumina, your safety and privacy are not just priorities; they are the foundation of our elite service.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {safetyRules.map((rule, idx) => (
          <Card key={idx} className="bg-accent/20 border-none">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                {rule.icon}
              </div>
              <h3 className="text-2xl font-playfair">{rule.title}</h3>
              <p className="text-muted-foreground leading-relaxed italic">
                &quot;{rule.description}&quot;
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-8 md:p-12 space-y-8">
        <h2 className="text-3xl font-playfair flex items-center gap-3">
          <AlertTriangle className="text-amber-500" /> Our Commitment to Ethics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> Consensual & Respectful
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We maintain a zero-tolerance policy for any form of harassment, coercion, or illegal activity. Every encounter must be based on mutual respect and explicit consent.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> Professional Conduct
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Companions are professionals who manage their own schedules and services. Lumina acts as a high-end introductory platform ensuring the quality and safety of these connections.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-center text-muted-foreground text-sm italic">
        For any safety concerns or immediate assistance, our 24/7 concierge is available at <span className="text-amber-500 font-bold">concierge@lumina.com</span>
      </footer>
    </div>
  );
}
