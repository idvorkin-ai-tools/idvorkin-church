import { Calendar } from "lucide-react";
import events from "../../data/events.json";

export function UpcomingEvents() {
  return (
    <div className="space-y-4">
      {events.slice(0, 3).map((event) => (
        <div key={event.id} className="flex gap-5 p-5 warm-card rounded-sm group">
          <div className="flex-shrink-0 w-14 h-14 bg-midnight-900 text-parchment-100 rounded-sm flex flex-col items-center justify-center group-hover:bg-midnight-800 transition-colors duration-300">
            <Calendar className="w-5 h-5 text-gold-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-heading text-base font-semibold text-midnight-900">{event.title}</h4>
            <p className="text-xs text-gold-700 mt-1 font-display tracking-wider uppercase">
              {event.date} &middot; {event.time}
            </p>
            <p className="text-sm text-midnight-500 mt-1.5 line-clamp-2 leading-relaxed">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
