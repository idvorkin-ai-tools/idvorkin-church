import { Link } from "react-router-dom";

export function WelcomeBanner() {
  return (
    <div className="modern-card p-8 md:p-10 h-full">
      <p className="text-sm font-semibold text-iris-500 uppercase tracking-wider mb-3">
        Welcome
      </p>
      <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-900 mb-3">
        New to Saint Demetrios?
      </h3>
      <p className="text-ink-500 mb-6 max-w-lg leading-relaxed">
        We&rsquo;d love to welcome you. Whether you&rsquo;re exploring Orthodoxy or looking for a new church home,
        our doors are always open.
      </p>
      <Link
        to="/about"
        className="inline-flex items-center px-6 py-3 bg-iris-500 text-white rounded-full text-sm font-semibold hover:bg-iris-600 active:scale-[0.97] transition-all duration-200"
      >
        Learn More About Us
      </Link>
    </div>
  );
}
