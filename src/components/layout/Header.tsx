import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Church } from "lucide-react";
import { cn } from "../../utils/cn";
import { MobileNav } from "./MobileNav";
import navItems from "../../data/navigation.json";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-navy-900 hover:text-navy-700 transition-colors">
            <Church className="w-8 h-8 text-gold-500" />
            <span className="font-heading text-lg font-semibold hidden sm:block">Saint Demetrios</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === item.path
                    ? "text-gold-600 bg-gold-50"
                    : "text-navy-700 hover:text-navy-900 hover:bg-navy-50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-navy-700 hover:text-navy-900"
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
