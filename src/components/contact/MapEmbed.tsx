export function MapEmbed() {
  return (
    <div className="rounded-sm overflow-hidden border border-parchment-300 shadow-sm">
      <iframe
        title="Saint Demetrios Greek Orthodox Church Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.5!2d-122.3155!3d47.6432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM4JzM1LjUiTiAxMjLCsDE4JzU1LjgiVw!5e0!3m2!1sen!2sus!4v1"
        className="w-full h-64 md:h-80"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
