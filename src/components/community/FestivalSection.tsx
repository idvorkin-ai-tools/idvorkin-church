import { Music, UtensilsCrossed, Church } from "lucide-react";

export function FestivalSection() {
  return (
    <div className="relative bg-midnight-900 text-parchment-100 rounded-sm p-10 md:p-14 overflow-hidden grain">
      {/* Decorative borders */}
      <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-500/10 rounded-sm pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="font-display text-[10px] tracking-[0.3em] uppercase text-gold-500 block mb-3">
          Annual Celebration
        </span>
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl tracking-wide uppercase text-parchment-50 mb-4">
          Seattle Greek Festival
        </h3>
        <div className="cross-divider max-w-xs mx-auto mb-8">
          <span className="cross-icon">&#10013;</span>
        </div>
        <p className="font-heading text-lg italic text-parchment-300 mb-10 leading-relaxed">
          Join us for our annual celebration of Greek culture, food, and community.
          Experience authentic Greek cuisine, traditional music and dance, church tours,
          and warm hospitality.
        </p>
        <div className="flex flex-wrap justify-center gap-10 text-xs font-display tracking-wider uppercase">
          <div className="flex items-center gap-2.5">
            <UtensilsCrossed className="w-5 h-5 text-gold-500" />
            <span className="text-parchment-200">Authentic Greek Food</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Music className="w-5 h-5 text-gold-500" />
            <span className="text-parchment-200">Live Music & Dance</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Church className="w-5 h-5 text-gold-500" />
            <span className="text-parchment-200">Church Tours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
