import { Clock } from "lucide-react";
import services from "../../data/services.json";

export function ServiceTimesCard() {
  return (
    <div className="warm-card rounded-sm p-6 h-full">
      <h3 className="flex items-center gap-2.5 font-display text-xs tracking-[0.2em] uppercase text-midnight-900 mb-5">
        <Clock className="w-4 h-4 text-gold-600" />
        Service Times
      </h3>
      <div className="space-y-0">
        {services.map((s) => (
          <div key={s.id} className="flex justify-between items-center py-3.5 border-b border-parchment-300/60 last:border-0">
            <div>
              <p className="font-heading text-base font-semibold text-midnight-800">{s.name}</p>
              <p className="text-xs text-midnight-400 mt-0.5">{s.day}</p>
            </div>
            <span className="font-display text-xs tracking-wider text-gold-700 bg-gold-100/50 px-3 py-1 rounded-sm">
              {s.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
