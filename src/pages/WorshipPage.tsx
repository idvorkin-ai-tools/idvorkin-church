import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServiceSchedule } from "../components/services/ServiceSchedule";
import { SacramentsList } from "../components/services/SacramentsList";

export function WorshipPage() {
  useDocumentTitle("Worship");
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        title="Worship"
        subtitle="Join us in prayer, praise, and the celebration of the Holy Sacraments"
        backgroundImage="/images/raccoon-hero-worship.webp"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="reveal">
          <SectionHeading title="Service Schedule" subtitle="Weekly worship services open to all" />
        </div>
        <div className="reveal">
          <ServiceSchedule />
        </div>
      </section>

      <section className="relative bg-midnight-950 grain py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHeading title="The Holy Sacraments" subtitle="The sacred mysteries of the Orthodox Church" />
          </div>
          <div className="reveal">
            <SacramentsList />
          </div>
        </div>
      </section>
    </div>
  );
}
