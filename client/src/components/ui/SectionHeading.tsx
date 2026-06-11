import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  isH1?: boolean;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading = ({
  badge,
  title,
  isH1 = false,
  description,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) => {
  const HeadingTag = isH1 ? "h1" : "h2";

  return (
    <div
      className={cn(
        "max-w-3xl mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-black uppercase tracking-[0.2em] mb-4 border border-primary/10">
          {badge}
        </span>
      )}
      <HeadingTag
        className={cn(
          "text-4xl md:text-5xl font-extrabold mb-6 leading-[1.1]",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </HeadingTag>
      {description && (
        <p
          className={cn(
            "text-lg font-medium leading-relaxed",
            light ? "text-white/70" : "text-slate-500"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
