import { cn } from "../../utils/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">{title}</h2>
      <div className="w-16 h-1 bg-gold-500 mx-auto mb-4" />
      {subtitle && <p className="text-navy-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
