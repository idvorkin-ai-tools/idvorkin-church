import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="warm-card rounded-sm p-8 text-center border-l-2 border-gold-500">
        <h3 className="font-heading text-xl font-semibold text-midnight-900 mb-2">Message Sent</h3>
        <p className="text-midnight-500">Thank you for reaching out. We&rsquo;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="warm-card rounded-sm p-6 md:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-[10px] font-display tracking-[0.2em] uppercase text-midnight-600 mb-2">Name</label>
          <input
            id="name"
            type="text"
            required
            className="w-full px-4 py-3 bg-parchment-100 border border-parchment-300 rounded-sm text-sm text-midnight-800 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[10px] font-display tracking-[0.2em] uppercase text-midnight-600 mb-2">Email</label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-4 py-3 bg-parchment-100 border border-parchment-300 rounded-sm text-sm text-midnight-800 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-[10px] font-display tracking-[0.2em] uppercase text-midnight-600 mb-2">Subject</label>
        <input
          id="subject"
          type="text"
          required
          className="w-full px-4 py-3 bg-parchment-100 border border-parchment-300 rounded-sm text-sm text-midnight-800 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[10px] font-display tracking-[0.2em] uppercase text-midnight-600 mb-2">Message</label>
        <textarea
          id="message"
          rows={5}
          required
          className="w-full px-4 py-3 bg-parchment-100 border border-parchment-300 rounded-sm text-sm text-midnight-800 focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3.5 bg-midnight-900 text-parchment-100 rounded-sm text-xs font-display tracking-[0.2em] uppercase hover:bg-midnight-800 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
