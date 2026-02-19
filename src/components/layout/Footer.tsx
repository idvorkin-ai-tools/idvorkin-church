import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import church from "../../data/church.json";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-cloud-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-display text-lg font-bold text-white block mb-3">
              St. Demetrios
            </span>
            <p className="text-cloud-400 leading-relaxed font-heading text-lg italic">
              &ldquo;{church.mission}&rdquo;
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-iris-400 uppercase tracking-wider mb-5">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-iris-400 mt-0.5 shrink-0" />
                <span>{church.address}<br />{church.city}, {church.state} {church.zip}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-iris-400 shrink-0" />
                <span>{church.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-iris-400 shrink-0" />
                <span>{church.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-iris-400 uppercase tracking-wider mb-5">
              Navigate
            </h3>
            <nav className="space-y-2.5 text-sm" aria-label="Footer navigation">
              <Link to="/about" className="block text-cloud-400 hover:text-iris-300 transition-colors duration-200">About Us</Link>
              <Link to="/worship" className="block text-cloud-400 hover:text-iris-300 transition-colors duration-200">Worship Services</Link>
              <Link to="/ministries" className="block text-cloud-400 hover:text-iris-300 transition-colors duration-200">Ministries</Link>
              <Link to="/give" className="block text-cloud-400 hover:text-iris-300 transition-colors duration-200">Give</Link>
              <Link to="/contact" className="block text-cloud-400 hover:text-iris-300 transition-colors duration-200">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-800 text-center">
          <p className="text-xs text-cloud-500">
            &copy; {new Date().getFullYear()} {church.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
