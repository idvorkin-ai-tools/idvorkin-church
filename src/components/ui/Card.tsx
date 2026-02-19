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
    <div className={cn("warm-card rounded-sm overflow-hidden", className)}>
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-midnight-900 mb-2">{title}</h3>
        <p className="text-midnight-500 text-sm leading-relaxed">{description}</p>
        {link && (
          <a
            href={link.href}
            className="inline-block mt-4 text-xs font-display tracking-wider uppercase text-gold-700 hover:text-gold-600 transition-colors duration-300"
          >
            {link.label} &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
