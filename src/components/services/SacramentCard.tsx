import { Droplets, Flame, Wine, Heart, Crown, Hand, BookOpen, CircleDot, type LucideIcon } from "lucide-react";
import type { Sacrament } from "../../types";

const ICON_MAP: Record<string, LucideIcon> = {
  Droplets, Flame, Wine, Heart, Crown, Hand, BookOpen,
};

export function SacramentCard({ name, description, icon }: Sacrament) {
  const IconComponent = ICON_MAP[icon] ?? CircleDot;

  return (
    <div className="warm-card rounded-sm p-6 text-center group">
      <div className="w-14 h-14 bg-midnight-900 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:shadow-lg group-hover:shadow-gold-500/15 transition-shadow duration-300">
        <IconComponent className="w-6 h-6 text-gold-500" />
      </div>
      <h3 className="font-display text-xs tracking-[0.15em] uppercase text-midnight-900 mb-2">{name}</h3>
      <p className="text-sm text-midnight-500 leading-relaxed font-heading italic">{description}</p>
    </div>
  );
}
