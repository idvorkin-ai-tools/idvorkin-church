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
    <header className="sticky top-0 z-50 bg-parchment-50/90 backdrop-blur-lg border-b border-parchment-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-midnight-900 flex items-center justify-center group-hover:bg-midnight-800 transition-colors">
              <Church className="w-5 h-5 text-gold-400" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-sm tracking-widest uppercase text-midnight-900">
                Saint Demetrios
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-midnight-400 font-body">
                Greek Orthodox Church
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3.5 py-2 text-xs font-display tracking-wider uppercase transition-all duration-300 rounded",
                  pathname === item.path
                    ? "text-gold-700 bg-gold-100/60"
                    : "text-midnight-600 hover:text-midnight-900 hover:bg-parchment-200/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-midnight-700 hover:text-midnight-900 transition-colors"
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
