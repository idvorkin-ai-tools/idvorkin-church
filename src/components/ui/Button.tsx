import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-midnight-900 text-parchment-100 hover:bg-midnight-800 border border-midnight-700",
  secondary: "bg-parchment-50/20 text-parchment-100 border border-parchment-300/30 hover:bg-parchment-50/30 backdrop-blur-sm",
  accent: "bg-gradient-to-r from-gold-600 to-gold-500 text-midnight-950 hover:from-gold-500 hover:to-gold-400 font-semibold shadow-lg shadow-gold-500/20",
};

export function Button({ variant = "primary", href, className, children, ...props }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center px-7 py-3 rounded-sm text-xs font-display tracking-[0.15em] uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:ring-offset-2 focus:ring-offset-midnight-900",
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
