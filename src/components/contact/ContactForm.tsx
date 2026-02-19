import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-700">Thank you for reaching out. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="bg-white rounded-xl shadow-sm border border-navy-100 p-6 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">Name</label>
          <input id="name" type="text" required className="w-full px-3 py-2 border border-navy-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">Email</label>
          <input id="email" type="email" required className="w-full px-3 py-2 border border-navy-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">Subject</label>
        <input id="subject" type="text" required className="w-full px-3 py-2 border border-navy-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">Message</label>
        <textarea id="message" rows={5} required className="w-full px-3 py-2 border border-navy-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 resize-none" />
      </div>
      <button type="submit" className="w-full px-6 py-3 bg-navy-800 text-white rounded-lg font-medium hover:bg-navy-900 transition-colors">
        Send Message
      </button>
    </form>
  );
}
