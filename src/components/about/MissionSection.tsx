import church from "../../data/church.json";

export function MissionSection() {
  return (
    <div className="modern-card bg-iris-50 border-iris-100 p-10 md:p-14 text-center">
      <p className="text-sm font-semibold text-iris-500 uppercase tracking-wider mb-4">
        Our Mission
      </p>
      <div className="accent-line-center" />
      <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-ink-900 italic max-w-2xl mx-auto leading-relaxed">
        &ldquo;{church.mission}&rdquo;
      </p>
    </div>
  );
}
