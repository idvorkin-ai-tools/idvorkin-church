import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-iris-500 text-white hover:bg-iris-600 shadow-sm",
  secondary: "bg-white text-ink-700 border border-cloud-300 hover:bg-cloud-50 hover:border-cloud-400",
  accent: "bg-ember-500 text-white hover:bg-ember-600 shadow-sm shadow-ember-500/20",
};

export function Button({ variant = "primary", href, className, children, ...props }: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-iris-400/50 focus:ring-offset-2",
    variantStyles[variant],
    className
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link to={href} className={styles}>
          {children}
        </Link>
      );
    }
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
