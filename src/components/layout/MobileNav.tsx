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
    <div className="md:hidden border-t border-navy-100 bg-white">
      <nav className="px-4 py-3 space-y-1" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={cn(
              "block px-3 py-2.5 text-base font-medium rounded-md transition-colors",
              pathname === item.path
                ? "text-gold-600 bg-gold-50"
                : "text-navy-700 hover:text-navy-900 hover:bg-navy-50"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
