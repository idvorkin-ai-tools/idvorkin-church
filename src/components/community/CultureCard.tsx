interface CultureCardProps {
  title: string;
  description: string;
  image: string;
}

export function CultureCard({ title, description, image }: CultureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-navy-100 overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy-900 mb-2">{title}</h3>
        <p className="text-sm text-navy-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
