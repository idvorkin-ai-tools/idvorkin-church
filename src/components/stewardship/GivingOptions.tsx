import { CreditCard, Landmark, Mail } from "lucide-react";

const options = [
  {
    icon: CreditCard,
    title: "Online Giving",
    description: "Make a secure one-time or recurring donation through our online portal.",
    action: "Give Online",
  },
  {
    icon: Landmark,
    title: "In Person",
    description: "Place your offering in the collection tray during Sunday services.",
    action: "Visit Us",
  },
  {
    icon: Mail,
    title: "By Mail",
    description: "Send a check to: 2100 Boyer Ave E, Seattle, WA 98112",
    action: "Get Address",
  },
];

export function GivingOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {options.map((opt) => (
        <div key={opt.title} className="bg-white rounded-xl shadow-sm border border-navy-100 p-6 text-center hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <opt.icon className="w-7 h-7 text-gold-600" />
          </div>
          <h3 className="text-lg font-semibold text-navy-900 mb-2">{opt.title}</h3>
          <p className="text-sm text-navy-600 mb-4">{opt.description}</p>
          <button className="px-5 py-2 bg-navy-800 text-white rounded-lg text-sm font-medium hover:bg-navy-900 transition-colors">
            {opt.action}
          </button>
        </div>
      ))}
    </div>
  );
}
