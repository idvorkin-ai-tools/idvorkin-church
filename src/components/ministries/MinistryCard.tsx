import type { Ministry } from "../../types";

const audienceBadge: Record<string, string> = {
  youth: "bg-midnight-800 text-parchment-200",
  adults: "bg-burgundy-600 text-parchment-200",
  families: "bg-midnight-700 text-parchment-200",
  all: "bg-gold-700 text-parchment-50",
};

export function MinistryCard({ name, description, audience, image }: Ministry) {
  return (
    <div className="warm-card rounded-sm overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/40 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2.5 mb-2">
          <h3 className="font-heading text-lg font-semibold text-midnight-900">{name}</h3>
          <span className={`text-[9px] font-display tracking-[0.15em] uppercase px-2.5 py-0.5 rounded-sm ${audienceBadge[audience]}`}>
            {audience}
          </span>
        </div>
        <p className="text-sm text-midnight-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
