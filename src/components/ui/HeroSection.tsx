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
        "relative flex items-center justify-center min-h-[400px] md:min-h-[500px] bg-navy-900 text-white",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-navy-900/70" />
      )}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-navy-200 mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
