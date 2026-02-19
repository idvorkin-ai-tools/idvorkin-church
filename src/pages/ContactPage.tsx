import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ContactForm } from "../components/contact/ContactForm";
import { MapEmbed } from "../components/contact/MapEmbed";
import { OfficeInfo } from "../components/contact/OfficeInfo";

export function ContactPage() {
  useDocumentTitle("Contact");
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you"
        backgroundImage="/images/raccoon-contact.webp"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="reveal">
            <SectionHeading title="Send a Message" className="text-left" />
            <ContactForm />
          </div>
          <div className="reveal">
            <SectionHeading title="Visit Us" className="text-left" />
            <div className="space-y-6">
              <OfficeInfo />
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
