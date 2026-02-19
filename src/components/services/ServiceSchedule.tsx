import services from "../../data/services.json";

export function ServiceSchedule() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-navy-100 overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-navy-800 text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold">Service</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Day</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Time</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s, i) => (
            <tr key={s.id} className={i % 2 === 0 ? "bg-white" : "bg-navy-50"}>
              <td className="px-6 py-4">
                <p className="font-medium text-navy-900">{s.name}</p>
                <p className="text-sm text-navy-500 mt-1">{s.description}</p>
              </td>
              <td className="px-6 py-4 text-navy-700">{s.day}</td>
              <td className="px-6 py-4 text-gold-600 font-semibold">{s.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
