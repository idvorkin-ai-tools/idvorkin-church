import { Calendar } from "lucide-react";
import events from "../../data/events.json";

export function UpcomingEvents() {
  return (
    <div className="space-y-4">
      {events.slice(0, 3).map((event) => (
        <div key={event.id} className="flex gap-4 p-4 bg-white rounded-xl border border-navy-100 hover:shadow-sm transition-shadow">
          <div className="flex-shrink-0 w-14 h-14 bg-navy-800 text-white rounded-lg flex flex-col items-center justify-center">
            <Calendar className="w-5 h-5 text-gold-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-navy-900 text-sm">{event.title}</h4>
            <p className="text-xs text-navy-500 mt-1">{event.date} &middot; {event.time}</p>
            <p className="text-sm text-navy-600 mt-1 line-clamp-2">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
