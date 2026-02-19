import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServiceSchedule } from "../components/services/ServiceSchedule";
import { SacramentsList } from "../components/services/SacramentsList";

export function WorshipPage() {
  useDocumentTitle("Worship");
  return (
    <>
      <HeroSection
        title="Worship"
        subtitle="Join us in prayer, praise, and the celebration of the Holy Sacraments"
        backgroundImage="https://placehold.co/1920x600/102a43/f0b429?text=Worship"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading title="Service Schedule" subtitle="Weekly worship services open to all" />
        <ServiceSchedule />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SectionHeading title="The Holy Sacraments" subtitle="The sacred mysteries of the Orthodox Church" />
        <SacramentsList />
      </section>
    </>
  );
}
