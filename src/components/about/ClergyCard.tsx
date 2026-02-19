import type { ClergyMember } from "../../types";

export function ClergyCard({ name, title, role, image, bio }: ClergyMember) {
  return (
    <div className="modern-card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-ink-900">{name}</h3>
        <p className="text-sm font-medium text-iris-500 mt-1">
          {title} &middot; {role}
        </p>
        <p className="text-ink-500 text-sm leading-relaxed mt-3">{bio}</p>
      </div>
    </div>
  );
}
