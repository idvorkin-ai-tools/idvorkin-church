import * as Icons from "lucide-react";
import type { Sacrament } from "../../types";

export function SacramentCard({ name, description, icon }: Sacrament) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon] || Icons.CircleDot;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-navy-100 p-6 text-center hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <IconComponent className="w-6 h-6 text-gold-600" />
      </div>
      <h3 className="text-lg font-semibold text-navy-900 mb-2">{name}</h3>
      <p className="text-sm text-navy-600 leading-relaxed">{description}</p>
    </div>
  );
}
