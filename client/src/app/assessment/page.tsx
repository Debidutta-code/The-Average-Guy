"use client";

import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    text: "How would you describe your skin&apos;s natural oil production?",
    options: [
      { text: "Very oily, especially in the T-zone", type: "Oily" },
      { text: "Generally dry and tight", type: "Dry" },
      { text: "Mix of oily and dry areas", type: "Combination" },
      { text: "Well-balanced", type: "Normal" }
    ]
  },
  {
    id: 2,
    text: "How does your skin react to new products?",
    options: [
      { text: "Easily irritated or turns red", type: "Sensitive" },
      { text: "Rarely has a reaction", type: "Resilient" },
      { text: "Sometimes breaks out", type: "Acne-Prone" }
    ]
  },
  {
    id: 3,
    text: "What is your primary skin concern?",
    options: [
      { text: "Active acne or breakouts", concern: "Acne Treatment" },
      { text: "Fine lines and wrinkles", concern: "Anti-Aging" },
      { text: "Dark spots or uneven tone", concern: "Pigmentation" },
      { text: "Dullness or rough texture", concern: "Skin Rejuvenation" }
    ]
  }
];

export default function SkinAssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ text: string; type?: string; concern?: string }[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: { text: string; type?: string; concern?: string }) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const skinType = answers.find(a => a.type)?.type || "Combination";
    const primaryConcern = answers.find(a => a.concern)?.concern || "Skin Health";

    return (
      <div className="pb-24 px-4 flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white rounded-[40px] p-8 md:p-16 shadow-2xl border border-slate-100 text-center space-y-8 animate-in fade-in zoom-in duration-500">
           <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
              <Sparkles size={40} />
           </div>
           <h2 className="text-3xl md:text-5xl font-playfair font-bold">Your Skin Analysis</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Skin Type</p>
                 <p className="text-2xl font-bold text-primary">{skinType}</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Recommended Focus</p>
                 <p className="text-2xl font-bold text-primary">{primaryConcern}</p>
              </div>
           </div>
           <div className="space-y-4 pt-8">
              <h3 className="text-xl font-bold text-slate-900">Dr. Elena&apos;s Recommendation</h3>
              <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
                Based on your profile, we recommend a personalized {primaryConcern.toLowerCase()} plan. Your {skinType.toLowerCase()} skin requires specific care to maintain balance and achieve optimal results.
              </p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/book" className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary-600 transition-all shadow-lg">
                Book Recommended Treatment
              </Link>
              <button onClick={reset} className="flex items-center justify-center space-x-2 text-slate-600 font-bold hover:text-primary transition-colors">
                <RefreshCw size={18} />
                <span>Retake Quiz</span>
              </button>
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-slate-900">Skin Assessment</h1>
          <p className="text-xl text-slate-600">Discover your skin type and get professional recommendations in less than 2 minutes.</p>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 p-8 md:p-16 relative overflow-hidden">
           {/* Progress Indicator */}
           <div className="absolute top-0 left-0 w-full h-2 bg-slate-50">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
           </div>

           <div className="space-y-12 animate-in fade-in slide-in-from-right duration-500">
              <div className="space-y-4">
                 <p className="text-sm font-bold text-primary uppercase tracking-widest">Question {currentStep + 1} of {questions.length}</p>
                 <h3 className="text-2xl md:text-4xl font-playfair font-bold text-slate-900 leading-tight">
                    {questions[currentStep].text}
                 </h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                 {questions[currentStep].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(option)}
                      className="group flex items-center justify-between p-6 rounded-2xl border-2 border-slate-100 bg-slate-50 hover:border-primary hover:bg-primary/5 transition-all text-left"
                    >
                       <span className="text-lg font-bold text-slate-700 group-hover:text-primary transition-colors">{option.text}</span>
                       <div className="w-8 h-8 rounded-full border-2 border-slate-200 bg-white group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all">
                          <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100" />
                       </div>
                    </button>
                 ))}
              </div>
           </div>
        </div>

        <p className="text-center mt-12 text-slate-500 text-sm italic">
           *This assessment is for informational purposes and does not replace a clinical diagnosis.
        </p>
      </div>
    </div>
  );
}
