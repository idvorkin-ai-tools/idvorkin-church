import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export function WelcomeBanner() {
  return (
    <div className="bg-gold-50 border border-gold-200 rounded-xl p-6 md:p-8 text-center">
      <Heart className="w-8 h-8 text-gold-500 mx-auto mb-3" />
      <h3 className="text-xl font-semibold text-navy-900 mb-2">New Here?</h3>
      <p className="text-navy-600 mb-4 max-w-lg mx-auto">
        We'd love to welcome you! Whether you're exploring Orthodoxy or looking for a new church home,
        our doors are always open.
      </p>
      <Link
        to="/about"
        className="inline-flex items-center px-6 py-3 bg-navy-800 text-white rounded-lg text-sm font-medium hover:bg-navy-900 transition-colors"
      >
        Learn More About Us
      </Link>
    </div>
  );
}
