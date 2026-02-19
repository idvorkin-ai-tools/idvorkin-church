import { Calendar } from "lucide-react";
import events from "../../data/events.json";

export function UpcomingEvents() {
  return (
    <div className="space-y-4">
      {events.slice(0, 3).map((event) => (
        <div key={event.id} className="flex gap-5 p-5 modern-card group">
          <div className="flex-shrink-0 w-14 h-14 bg-iris-50 text-iris-600 rounded-xl flex flex-col items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-display text-base font-semibold text-ink-900">{event.title}</h4>
            <p className="text-xs font-semibold text-iris-500 mt-1">
              {event.date} &middot; {event.time}
            </p>
            <p className="text-sm text-ink-500 mt-1.5 line-clamp-2 leading-relaxed">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
