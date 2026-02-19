import church from "../../data/church.json";

export function MissionSection() {
  return (
    <div className="relative bg-midnight-900 text-parchment-100 rounded-sm p-10 md:p-14 text-center overflow-hidden grain">
      {/* Decorative arched frame */}
      <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold-500/10 rounded-sm pointer-events-none" />
      <div className="absolute top-8 left-8 right-8 bottom-8 border border-gold-500/5 rounded-sm pointer-events-none" />

      <div className="relative z-10">
        <span className="font-display text-[10px] tracking-[0.3em] uppercase text-gold-500 block mb-4">
          Our Mission
        </span>
        <div className="cross-divider max-w-xs mx-auto mb-8">
          <span className="cross-icon">&#10013;</span>
        </div>
        <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-parchment-100 italic max-w-2xl mx-auto leading-relaxed">
          &ldquo;{church.mission}&rdquo;
        </p>
      </div>
    </div>
  );
}
