import { cn } from "../../utils/cn";

interface CardProps {
  image?: string;
  title: string;
  description: string;
  link?: { label: string; href: string };
  className?: string;
}

export function Card({ image, title, description, link, className }: CardProps) {
  return (
    <div className={cn("bg-white rounded-xl shadow-sm border border-navy-100 overflow-hidden hover:shadow-md transition-shadow", className)}>
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy-900 mb-2">{title}</h3>
        <p className="text-navy-600 text-sm leading-relaxed">{description}</p>
        {link && (
          <a
            href={link.href}
            className="inline-block mt-4 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors"
          >
            {link.label} &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
