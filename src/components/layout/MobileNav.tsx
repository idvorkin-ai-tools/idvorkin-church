import { Link, useLocation } from "react-router-dom";
import { cn } from "../../utils/cn";
import navItems from "../../data/navigation.json";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { pathname } = useLocation();

  if (!open) return null;

  return (
    <div className="md:hidden border-t border-parchment-300/60 bg-parchment-50/95 backdrop-blur-lg">
      <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={cn(
              "block px-4 py-3 text-sm font-display tracking-wider uppercase rounded-lg transition-all duration-300",
              pathname === item.path
                ? "text-gold-700 bg-gold-100/50 border-l-2 border-gold-500"
                : "text-midnight-600 hover:text-midnight-900 hover:bg-parchment-200/40"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
