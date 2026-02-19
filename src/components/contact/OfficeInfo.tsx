import { MapPin, Phone, Mail, Clock } from "lucide-react";
import church from "../../data/church.json";

export function OfficeInfo() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-navy-100 p-6">
      <h3 className="text-lg font-semibold text-navy-900 mb-4">Church Office</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-navy-800">Address</p>
            <p className="text-sm text-navy-600">{church.address}<br />{church.city}, {church.state} {church.zip}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-navy-800">Phone</p>
            <p className="text-sm text-navy-600">{church.phone}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-navy-800">Email</p>
            <p className="text-sm text-navy-600">{church.email}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-navy-800">Office Hours</p>
            <p className="text-sm text-navy-600">Monday &ndash; Friday: 9:00 AM &ndash; 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
