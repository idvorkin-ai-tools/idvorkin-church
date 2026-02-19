import { Link } from "react-router-dom";
import { CreditCard, Landmark, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface GivingOption {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  href: string;
}

const options: GivingOption[] = [
  {
    icon: CreditCard,
    title: "Online Giving",
    description: "Make a secure one-time or recurring donation through our online portal.",
    action: "Give Online",
    href: "/contact",
  },
  {
    icon: Landmark,
    title: "In Person",
    description: "Place your offering in the collection tray during Sunday services.",
    action: "Visit Us",
    href: "/contact",
  },
  {
    icon: Mail,
    title: "By Mail",
    description: "Send a check to: 2100 Boyer Ave E, Seattle, WA 98112",
    action: "Get Address",
    href: "/contact",
  },
];

export function GivingOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger">
      {options.map((opt) => (
        <div key={opt.title} className="warm-card rounded-sm p-7 text-center group">
          <div className="w-16 h-16 bg-midnight-900 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:shadow-lg group-hover:shadow-gold-500/15 transition-shadow duration-300">
            <opt.icon className="w-7 h-7 text-gold-500" />
          </div>
          <h3 className="font-display text-xs tracking-[0.15em] uppercase text-midnight-900 mb-2">{opt.title}</h3>
          <p className="text-sm text-midnight-500 mb-5 leading-relaxed">{opt.description}</p>
          <Link
            to={opt.href}
            className="inline-block px-6 py-2.5 bg-midnight-900 text-parchment-100 rounded-sm text-[10px] font-display tracking-[0.2em] uppercase hover:bg-midnight-800 transition-colors duration-300"
          >
            {opt.action}
          </Link>
        </div>
      ))}
    </div>
  );
}
