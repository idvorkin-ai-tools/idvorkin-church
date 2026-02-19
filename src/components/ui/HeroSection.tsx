import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface HeroSectionProps {
  backgroundImage?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function HeroSection({ title, subtitle, children, className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "bg-cloud-50 py-16 md:py-20",
        className
      )}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="accent-line-center" />
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-ink-500 mb-8 font-heading italic max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
