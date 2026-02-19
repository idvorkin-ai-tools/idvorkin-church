import { Link } from "react-router-dom";
import { BookOpen, Users, Heart, Phone } from "lucide-react";

const links = [
  { icon: BookOpen, label: "Worship", description: "Service times & sacraments", path: "/worship" },
  { icon: Users, label: "Ministries", description: "Get involved", path: "/ministries" },
  { icon: Heart, label: "Give", description: "Support our parish", path: "/give" },
  { icon: Phone, label: "Contact", description: "Reach out to us", path: "/contact" },
];

export function QuickLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {links.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="flex flex-col items-center p-6 bg-white rounded-xl border border-navy-100 hover:shadow-md hover:border-gold-200 transition-all text-center group"
        >
          <item.icon className="w-8 h-8 text-navy-400 group-hover:text-gold-500 transition-colors mb-3" />
          <span className="font-semibold text-navy-900 text-sm">{item.label}</span>
          <span className="text-xs text-navy-500 mt-1">{item.description}</span>
        </Link>
      ))}
    </div>
  );
}
