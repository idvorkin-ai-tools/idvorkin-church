import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { MinistriesGrid } from "../components/ministries/MinistriesGrid";

export function MinistriesPage() {
  useDocumentTitle("Ministries");
  return (
    <>
      <HeroSection
        title="Ministries"
        subtitle="Serve, grow, and connect through our parish ministries"
        backgroundImage="https://placehold.co/1920x600/102a43/f0b429?text=Ministries"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading title="Our Ministries" subtitle="Find your place in the life of our parish" />
        <MinistriesGrid />
      </section>
    </>
  );
}
