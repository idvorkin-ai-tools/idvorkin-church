import church from "../../data/church.json";

export function MissionSection() {
  return (
    <div className="bg-navy-800 text-white rounded-xl p-8 md:p-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
      <div className="w-12 h-1 bg-gold-400 mx-auto mb-6" />
      <p className="text-xl md:text-2xl text-navy-100 font-heading italic max-w-2xl mx-auto">
        "{church.mission}"
      </p>
    </div>
  );
}
