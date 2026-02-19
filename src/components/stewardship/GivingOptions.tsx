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
        <div key={opt.title} className="modern-card p-7 text-center group">
          <div className="w-16 h-16 bg-iris-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-iris-100 transition-colors duration-200">
            <opt.icon className="w-7 h-7 text-iris-500" />
          </div>
          <h3 className="font-display text-sm font-semibold text-ink-900 mb-2">{opt.title}</h3>
          <p className="text-sm text-ink-500 mb-5 leading-relaxed">{opt.description}</p>
          <Link
            to={opt.href}
            className="inline-block px-6 py-2.5 bg-iris-500 text-white rounded-full text-sm font-semibold hover:bg-iris-600 active:scale-[0.97] transition-all duration-200"
          >
            {opt.action}
          </Link>
        </div>
      ))}
    </div>
  );
}
