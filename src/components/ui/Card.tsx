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
    <div className={cn("modern-card overflow-hidden", className)}>
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-ink-900 mb-2">{title}</h3>
        <p className="text-ink-500 text-sm leading-relaxed">{description}</p>
        {link && (
          <a
            href={link.href}
            className="inline-block mt-4 text-sm font-medium text-iris-600 hover:text-iris-700 link-underline transition-colors duration-200"
          >
            {link.label} &rarr;
          </a>
        )}
      </div>
    </div>
  );
}
