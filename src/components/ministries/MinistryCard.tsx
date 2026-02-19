import type { Ministry } from "../../types";

const audienceBadge: Record<string, string> = {
  youth: "bg-blue-100 text-blue-700",
  adults: "bg-purple-100 text-purple-700",
  families: "bg-green-100 text-green-700",
  all: "bg-gold-100 text-gold-700",
};

export function MinistryCard({ name, description, audience, image }: Ministry) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-navy-100 overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={name} className="w-full h-40 object-cover" />
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-navy-900">{name}</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${audienceBadge[audience]}`}>
            {audience}
          </span>
        </div>
        <p className="text-sm text-navy-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
