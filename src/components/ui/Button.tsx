import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-navy-800 text-white hover:bg-navy-900",
  secondary: "bg-white text-navy-800 border border-navy-200 hover:bg-navy-50",
  accent: "bg-gold-500 text-navy-900 hover:bg-gold-600 font-semibold",
};

export function Button({ variant = "primary", href, className, children, ...props }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2",
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
