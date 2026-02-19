import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { MinistriesGrid } from "../components/ministries/MinistriesGrid";

export function MinistriesPage() {
  useDocumentTitle("Ministries");
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        title="Ministries"
        subtitle="Serve, grow, and connect through our parish ministries"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="reveal">
          <SectionHeading title="Our Ministries" subtitle="Find your place in the life of our parish" />
        </div>
        <div className="reveal">
          <MinistriesGrid />
        </div>
      </section>
    </div>
  );
}
