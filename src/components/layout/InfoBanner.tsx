import { Clock, MapPin, Phone } from "lucide-react";

export function InfoBanner() {
  return (
    <div className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>Sun Liturgy 9:30 AM</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>2100 Boyer Ave E, Seattle</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>(206) 631-2500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
