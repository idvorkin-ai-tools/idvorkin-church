import { Link } from "react-router-dom";

export function WelcomeBanner() {
  return (
    <div className="relative bg-gradient-to-br from-parchment-50 to-parchment-200 border border-parchment-300 rounded-sm p-8 md:p-10 overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold-400/20 rounded-bl-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold-400/20 rounded-tr-[40px] pointer-events-none" />

      <span className="font-display text-[10px] tracking-[0.3em] uppercase text-gold-700 block mb-4">
        Welcome
      </span>
      <h3 className="font-heading text-2xl md:text-3xl text-midnight-900 mb-3 italic">
        New to Saint Demetrios?
      </h3>
      <p className="text-midnight-500 mb-6 max-w-lg leading-relaxed">
        We&rsquo;d love to welcome you. Whether you&rsquo;re exploring Orthodoxy or looking for a new church home,
        our doors are always open.
      </p>
      <Link
        to="/about"
        className="inline-flex items-center px-6 py-3 bg-midnight-900 text-parchment-100 rounded-sm text-xs font-display tracking-[0.15em] uppercase hover:bg-midnight-800 transition-colors duration-300"
      >
        Learn More About Us
      </Link>
    </div>
  );
}
