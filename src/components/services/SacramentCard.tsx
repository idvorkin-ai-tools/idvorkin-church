import { Droplets, Flame, Wine, Heart, Crown, Hand, BookOpen, CircleDot, type LucideIcon } from "lucide-react";
import type { Sacrament } from "../../types";

const ICON_MAP: Record<string, LucideIcon> = {
  Droplets, Flame, Wine, Heart, Crown, Hand, BookOpen,
};

export function SacramentCard({ name, description, icon }: Sacrament) {
  const IconComponent = ICON_MAP[icon] ?? CircleDot;

  return (
    <div className="modern-card p-6 text-center group">
      <div className="w-14 h-14 bg-iris-50 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-iris-100 transition-colors duration-200">
        <IconComponent className="w-6 h-6 text-iris-500" />
      </div>
      <h3 className="font-display text-sm font-semibold text-ink-900 mb-2">{name}</h3>
      <p className="text-sm text-ink-500 leading-relaxed font-heading italic">{description}</p>
    </div>
  );
}
