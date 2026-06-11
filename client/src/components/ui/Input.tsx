import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string;
  error?: string;
  as?: "input" | "textarea" | "select";
}

export const Input = React.forwardRef<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement, InputProps>(
  ({ label, error, className, as = "input", children, ...props }, ref) => {
    const Component = as as React.ElementType;

    return (
      <div className="space-y-2.5">
        <label className="text-xs font-bold text-foreground/50 uppercase tracking-[0.1em] ml-1">
          {label}
        </label>
        <div className="relative">
          <Component
            ref={ref}
            className={cn(
              "w-full bg-slate-50 border-2 border-slate-100 rounded-[18px] px-5 py-3.5 text-foreground placeholder:text-slate-400 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 focus-visible:ring-primary/20 outline-none transition-all duration-300 text-sm",
              as === "textarea" && "min-h-[120px] resize-none",
              error && "border-rose-200 bg-rose-50/50 focus:border-rose-400 focus:ring-rose-500/5",
              className
            )}
            {...props}
          >
            {children}
          </Component>
        </div>
        {error && <p className="text-xs text-rose-500 font-semibold ml-2 animate-in fade-in slide-in-from-top-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
