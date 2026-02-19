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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal-stagger">
      {links.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="reveal visible flex flex-col items-center p-7 modern-card text-center group"
        >
          <div className="w-14 h-14 rounded-full bg-iris-50 flex items-center justify-center mb-4 group-hover:bg-iris-100 transition-colors duration-200">
            <item.icon className="w-6 h-6 text-iris-500" />
          </div>
          <span className="font-display text-sm font-semibold text-ink-900">{item.label}</span>
          <span className="text-xs text-ink-400 mt-1">{item.description}</span>
        </Link>
      ))}
    </div>
  );
}
