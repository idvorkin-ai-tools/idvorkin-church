import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ContactForm } from "../components/contact/ContactForm";
import { MapEmbed } from "../components/contact/MapEmbed";
import { OfficeInfo } from "../components/contact/OfficeInfo";

export function ContactPage() {
  useDocumentTitle("Contact");
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We'd love to hear from you"
        backgroundImage="https://placehold.co/1920x600/102a43/f0b429?text=Contact"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SectionHeading title="Send a Message" className="text-left" />
            <ContactForm />
          </div>
          <div>
            <SectionHeading title="Visit Us" className="text-left" />
            <div className="space-y-6">
              <OfficeInfo />
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
