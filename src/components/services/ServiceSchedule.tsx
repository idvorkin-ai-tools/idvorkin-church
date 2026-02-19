import services from "../../data/services.json";

export function ServiceSchedule() {
  return (
    <div className="warm-card rounded-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-midnight-900">
            <th className="px-6 py-4 text-left text-[10px] font-display tracking-[0.2em] uppercase text-gold-400">Service</th>
            <th className="px-6 py-4 text-left text-[10px] font-display tracking-[0.2em] uppercase text-gold-400">Day</th>
            <th className="px-6 py-4 text-left text-[10px] font-display tracking-[0.2em] uppercase text-gold-400">Time</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr
              key={s.id}
              className={i % 2 === 0 ? "bg-parchment-50" : "bg-parchment-100"}
            >
              <td className="px-6 py-5">
                <p className="font-heading text-base font-semibold text-midnight-900">{s.name}</p>
                <p className="text-sm text-midnight-400 mt-1">{s.description}</p>
              </td>
              <td className="px-6 py-5 text-midnight-600">{s.day}</td>
              <td className="px-6 py-5">
                <span className="font-display text-xs tracking-wider text-gold-700 bg-gold-100/50 px-3 py-1 rounded-sm">
                  {s.time}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
