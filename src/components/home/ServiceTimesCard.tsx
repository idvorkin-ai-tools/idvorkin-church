import { Clock } from "lucide-react";
import services from "../../data/services.json";

export function ServiceTimesCard() {
  return (
    <div className="modern-card p-6 h-full">
      <h3 className="flex items-center gap-2.5 text-sm font-semibold text-ink-900 mb-5">
        <Clock className="w-4 h-4 text-iris-500" />
        Service Times
      </h3>
      <div className="space-y-0">
        {services.map((s) => (
          <div key={s.id} className="flex justify-between items-center py-3.5 border-b border-cloud-200 last:border-0">
            <div>
              <p className="font-display text-sm font-semibold text-ink-800">{s.name}</p>
              <p className="text-xs text-ink-400 mt-0.5">{s.day}</p>
            </div>
            <span className="text-xs font-semibold text-iris-600 bg-iris-50 px-3 py-1 rounded-full">
              {s.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
