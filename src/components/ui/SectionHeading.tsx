import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <div className="accent-line-center" />
      <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-ink-500 text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
