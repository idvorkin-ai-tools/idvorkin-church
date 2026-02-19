import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-14", className)}>
      <h2 className="font-display text-2xl md:text-3xl tracking-wide uppercase text-midnight-900 mb-4">
        {title}
      </h2>
      <div className="cross-divider max-w-xs mx-auto mb-5">
        <span className="cross-icon">&#10013;</span>
      </div>
      {subtitle && (
        <p className="font-heading text-lg italic text-midnight-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
