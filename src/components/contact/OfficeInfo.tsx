import { MapPin, Phone, Mail, Clock } from "lucide-react";
import church from "../../data/church.json";

export function OfficeInfo() {
  return (
    <div className="modern-card p-6">
      <h3 className="font-display text-sm font-semibold text-ink-900 mb-5">Church Office</h3>
      <div className="space-y-5">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 bg-iris-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-iris-500" />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-ink-800">Address</p>
            <p className="text-sm text-ink-500 mt-0.5">{church.address}<br />{church.city}, {church.state} {church.zip}</p>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 bg-iris-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <Phone className="w-4 h-4 text-iris-500" />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-ink-800">Phone</p>
            <p className="text-sm text-ink-500 mt-0.5">{church.phone}</p>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 bg-iris-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <Mail className="w-4 h-4 text-iris-500" />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-ink-800">Email</p>
            <p className="text-sm text-ink-500 mt-0.5">{church.email}</p>
          </div>
        </div>
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 bg-iris-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <Clock className="w-4 h-4 text-iris-500" />
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-ink-800">Office Hours</p>
            <p className="text-sm text-ink-500 mt-0.5">Monday &ndash; Friday: 9:00 AM &ndash; 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
