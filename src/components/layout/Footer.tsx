import { Link } from "react-router-dom";
import { Church, Mail, Phone, MapPin } from "lucide-react";
import church from "../../data/church.json";

export function Footer() {
  return (
    <footer className="relative bg-midnight-950 text-parchment-400 grain">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-900/50 to-transparent h-24 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-midnight-800 flex items-center justify-center">
                <Church className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <span className="text-parchment-100 font-display text-sm tracking-widest uppercase block">
                  Saint Demetrios
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-parchment-500 font-body block">
                  Seattle, Washington
                </span>
              </div>
            </div>
            <p className="leading-relaxed font-heading text-lg italic text-parchment-300">
              &ldquo;{church.mission}&rdquo;
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs tracking-[0.2em] uppercase text-gold-500 mb-5">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-600 mt-0.5 shrink-0" />
                <span className="text-parchment-300">{church.address}<br />{church.city}, {church.state} {church.zip}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="text-parchment-300">{church.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="text-parchment-300">{church.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs tracking-[0.2em] uppercase text-gold-500 mb-5">
              Navigate
            </h3>
            <nav className="space-y-2.5 text-sm" aria-label="Footer navigation">
              <Link to="/about" className="block text-parchment-400 hover:text-gold-400 transition-colors duration-300">About Us</Link>
              <Link to="/worship" className="block text-parchment-400 hover:text-gold-400 transition-colors duration-300">Worship Services</Link>
              <Link to="/ministries" className="block text-parchment-400 hover:text-gold-400 transition-colors duration-300">Ministries</Link>
              <Link to="/give" className="block text-parchment-400 hover:text-gold-400 transition-colors duration-300">Give</Link>
              <Link to="/contact" className="block text-parchment-400 hover:text-gold-400 transition-colors duration-300">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 text-center">
          <div className="cross-divider mb-6">
            <span className="cross-icon">&#10013;</span>
          </div>
          <p className="text-xs text-parchment-500 tracking-wider">
            &copy; {new Date().getFullYear()} {church.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
