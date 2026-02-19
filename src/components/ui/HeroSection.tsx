import { cn } from "../../utils/cn";

interface HeroSectionProps {
  backgroundImage?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

export function HeroSection({ backgroundImage, title, subtitle, children, className, overlay = true }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center min-h-[420px] md:min-h-[520px] bg-midnight-950 text-parchment-50 overflow-hidden grain",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      {overlay && (
        <div className="absolute inset-0 hero-gradient" />
      )}

      {/* Decorative arch shapes */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] border border-gold-500/10 rounded-t-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] border border-gold-500/5 rounded-t-full pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-24">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight tracking-wide uppercase text-shimmer">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-parchment-300 mb-10 font-heading italic text-xl md:text-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
    </section>
  );
}
