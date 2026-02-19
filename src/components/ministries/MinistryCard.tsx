import type { Ministry } from "../../types";

const audienceBadge: Record<string, string> = {
  youth: "bg-iris-50 text-iris-600",
  adults: "bg-ember-50 text-ember-600",
  families: "bg-sage-50 text-sage-600",
  all: "bg-cloud-100 text-ink-600",
};

export function MinistryCard({ name, description, audience, image }: Ministry) {
  return (
    <div className="modern-card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2.5 mb-2">
          <h3 className="font-display text-base font-semibold text-ink-900">{name}</h3>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full capitalize ${audienceBadge[audience]}`}>
            {audience}
          </span>
        </div>
        <p className="text-sm text-ink-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
