import type { ClergyMember } from "../../types";

export function ClergyCard({ name, title, role, image, bio }: ClergyMember) {
  return (
    <div className="warm-card rounded-sm overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-midnight-900">{name}</h3>
        <p className="font-display text-[10px] tracking-[0.2em] uppercase text-gold-700 mt-1">
          {title} &middot; {role}
        </p>
        <p className="text-midnight-500 text-sm leading-relaxed mt-3">{bio}</p>
      </div>
    </div>
  );
}
