interface CultureCardProps {
  title: string;
  description: string;
  image: string;
}

export function CultureCard({ title, description, image }: CultureCardProps) {
  return (
    <div className="warm-card rounded-sm overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/40 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-midnight-900 mb-2">{title}</h3>
        <p className="text-sm text-midnight-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
