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
    <div className="md:hidden fixed inset-0 top-16 z-40 bg-white/98 backdrop-blur-xl">
      <nav className="flex flex-col items-center justify-center h-full gap-2 px-6" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={cn(
              "w-full text-center py-4 text-2xl font-display font-semibold rounded-xl transition-colors duration-200",
              pathname === item.path
                ? "text-iris-600 bg-iris-50"
                : "text-ink-800 hover:text-iris-600 hover:bg-cloud-100"
            )}
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={onClose}
          className="mt-4 px-8 py-3 text-lg font-semibold text-white bg-iris-500 rounded-full hover:bg-iris-600 transition-colors"
        >
          Visit Us
        </Link>
      </nav>
    </div>
  );
}
