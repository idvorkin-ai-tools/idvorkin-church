import type { ClergyMember } from "../../types";

export function ClergyCard({ name, title, role, image, bio }: ClergyMember) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-navy-100 overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy-900">{name}</h3>
        <p className="text-gold-600 text-sm font-medium mb-2">{title} &middot; {role}</p>
        <p className="text-navy-600 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
