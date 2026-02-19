import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import { MobileNav } from "./MobileNav";
import { useScrolled } from "../../hooks/useScrolled";
import navItems from "../../data/navigation.json";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-display text-lg font-bold tracking-tight text-ink-900">
              St. Demetrios
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  pathname === item.path
                    ? "text-iris-600 bg-iris-50"
                    : "text-ink-600 hover:text-ink-900 hover:bg-cloud-200/60"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 px-5 py-2 text-sm font-semibold text-white bg-iris-500 rounded-full hover:bg-iris-600 active:scale-[0.97] transition-all duration-200"
            >
              Visit Us
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-ink-700 hover:text-ink-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
