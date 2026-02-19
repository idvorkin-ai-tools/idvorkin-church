import { useRef } from "react";
import church from "../../data/church.json";

export function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const inputStyles = "w-full px-4 py-3 bg-cloud-50 border border-cloud-300 rounded-xl text-sm text-ink-800 focus:outline-none focus:ring-2 focus:ring-iris-400/40 focus:border-iris-400 transition-colors";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(subjectRef.current?.value || "Website Inquiry");
    const body = encodeURIComponent(
      `From: ${nameRef.current?.value || ""} (${emailRef.current?.value || ""})\n\n${messageRef.current?.value || ""}`
    );
    window.location.href = `mailto:${church.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="modern-card p-6 md:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink-700 mb-2">Name</label>
          <input id="name" ref={nameRef} type="text" required className={inputStyles} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-2">Email</label>
          <input id="email" ref={emailRef} type="email" required className={inputStyles} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-ink-700 mb-2">Subject</label>
        <input id="subject" ref={subjectRef} type="text" required className={inputStyles} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-2">Message</label>
        <textarea id="message" ref={messageRef} rows={5} required className={`${inputStyles} resize-none`} />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3.5 bg-iris-500 text-white rounded-full text-sm font-semibold hover:bg-iris-600 active:scale-[0.97] transition-all duration-200"
      >
        Send Message
      </button>
      <p className="text-xs text-ink-400 text-center">Opens your email client to send the message</p>
    </form>
  );
}
