import { Music, UtensilsCrossed, Church } from "lucide-react";

export function FestivalSection() {
  return (
    <div className="modern-card bg-iris-50 border-iris-100 p-10 md:p-14">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-iris-500 uppercase tracking-wider mb-3">
          Annual Celebration
        </p>
        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-ink-900 mb-4">
          Seattle Greek Festival
        </h3>
        <div className="accent-line-center" />
        <p className="text-lg text-ink-500 mb-10 leading-relaxed font-heading italic">
          Join us for our annual celebration of Greek culture, food, and community.
          Experience authentic Greek cuisine, traditional music and dance, church tours,
          and warm hospitality.
        </p>
        <div className="flex flex-wrap justify-center gap-10 text-sm font-medium">
          <div className="flex items-center gap-2.5">
            <UtensilsCrossed className="w-5 h-5 text-iris-500" />
            <span className="text-ink-700">Authentic Greek Food</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Music className="w-5 h-5 text-iris-500" />
            <span className="text-ink-700">Live Music & Dance</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Church className="w-5 h-5 text-iris-500" />
            <span className="text-ink-700">Church Tours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
