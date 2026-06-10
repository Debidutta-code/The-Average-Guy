import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {
  label: string;
  error?: string;
  as?: "input" | "textarea" | "select";
}

export const Input = React.forwardRef<HTMLInputElement & HTMLTextAreaElement & HTMLSelectElement, InputProps>(
  ({ label, error, as = "input", className, id, ...props }, ref) => {
    const Component = as as "input" | "textarea" | "select";
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
        >
          {label}
        </label>
        <Component
          ref={ref}
          id={inputId}
          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 transition-all outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary ${
            error ? "border-red-500" : "border-slate-200 dark:border-slate-800"
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
