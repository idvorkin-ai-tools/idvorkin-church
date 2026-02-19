import { Music, UtensilsCrossed, Church } from "lucide-react";

export function FestivalSection() {
  return (
    <div className="bg-gradient-to-br from-navy-800 to-navy-900 text-white rounded-xl p-8 md:p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Seattle Greek Festival</h3>
        <div className="w-12 h-1 bg-gold-400 mx-auto mb-6" />
        <p className="text-navy-200 text-lg mb-8">
          Join us for our annual celebration of Greek culture, food, and community.
          Experience authentic Greek cuisine, traditional music and dance, church tours,
          and warm hospitality.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5 text-gold-400" />
            <span>Authentic Greek Food</span>
          </div>
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-gold-400" />
            <span>Live Music & Dance</span>
          </div>
          <div className="flex items-center gap-2">
            <Church className="w-5 h-5 text-gold-400" />
            <span>Church Tours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
