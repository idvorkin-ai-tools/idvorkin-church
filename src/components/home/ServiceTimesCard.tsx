import { Clock } from "lucide-react";
import services from "../../data/services.json";

export function ServiceTimesCard() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-navy-100 p-6">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-navy-900 mb-4">
        <Clock className="w-5 h-5 text-gold-500" />
        Service Times
      </h3>
      <div className="space-y-3">
        {services.map((s) => (
          <div key={s.id} className="flex justify-between items-center py-2 border-b border-navy-50 last:border-0">
            <div>
              <p className="font-medium text-navy-800">{s.name}</p>
              <p className="text-sm text-navy-500">{s.day}</p>
            </div>
            <span className="text-gold-600 font-semibold">{s.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
