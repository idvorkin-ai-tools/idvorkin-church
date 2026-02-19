import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { GivingOptions } from "../components/stewardship/GivingOptions";
import { PledgeInfo } from "../components/stewardship/PledgeInfo";

export function GivePage() {
  useDocumentTitle("Give");
  return (
    <>
      <HeroSection
        title="Give"
        subtitle="Your generosity sustains and strengthens our parish"
        backgroundImage="https://placehold.co/1920x600/102a43/f0b429?text=Give"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PledgeInfo />
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SectionHeading title="Ways to Give" subtitle="Choose the method that works best for you" />
        <GivingOptions />
      </section>
    </>
  );
}
