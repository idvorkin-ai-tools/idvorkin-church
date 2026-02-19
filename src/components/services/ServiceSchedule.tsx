import services from "../../data/services.json";

export function ServiceSchedule() {
  return (
    <div className="modern-card overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-ink-900">
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-iris-300">Service</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-iris-300">Day</th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-iris-300">Time</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr
              key={s.id}
              className={i % 2 === 0 ? "bg-white" : "bg-cloud-50"}
            >
              <td className="px-6 py-5">
                <p className="font-display text-sm font-semibold text-ink-900">{s.name}</p>
                <p className="text-sm text-ink-400 mt-1">{s.description}</p>
              </td>
              <td className="px-6 py-5 text-ink-600">{s.day}</td>
              <td className="px-6 py-5">
                <span className="text-xs font-semibold text-iris-600 bg-iris-50 px-3 py-1 rounded-full">
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
