interface CultureCardProps {
  title: string;
  description: string;
  image: string;
}

export function CultureCard({ title, description, image }: CultureCardProps) {
  return (
    <div className="modern-card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-ink-900 mb-2">{title}</h3>
        <p className="text-sm text-ink-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
