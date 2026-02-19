import { Clock, MapPin, Phone } from "lucide-react";

export function InfoBanner() {
  return (
    <div className="bg-midnight-950 text-parchment-300 byzantine-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 text-xs tracking-wider uppercase font-display">
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-gold-500" />
            <span>Sun Liturgy 9:30 AM</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <MapPin className="w-3 h-3 text-gold-500" />
            <span>2100 Boyer Ave E, Seattle</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3 h-3 text-gold-500" />
            <span>(206) 631-2500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
