import { Link } from "react-router-dom";
import { Church, Mail, Phone, MapPin } from "lucide-react";
import church from "../../data/church.json";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Church className="w-6 h-6 text-gold-400" />
              <span className="text-white font-heading text-lg font-semibold">Saint Demetrios</span>
            </div>
            <p className="text-sm leading-relaxed">
              {church.mission}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>{church.address}<br />{church.city}, {church.state} {church.zip}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{church.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{church.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2 text-sm" aria-label="Footer navigation">
              <Link to="/about" className="block hover:text-white transition-colors">About Us</Link>
              <Link to="/worship" className="block hover:text-white transition-colors">Worship Services</Link>
              <Link to="/ministries" className="block hover:text-white transition-colors">Ministries</Link>
              <Link to="/give" className="block hover:text-white transition-colors">Give</Link>
              <Link to="/contact" className="block hover:text-white transition-colors">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-sm text-navy-400">
          <p>&copy; {new Date().getFullYear()} {church.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
