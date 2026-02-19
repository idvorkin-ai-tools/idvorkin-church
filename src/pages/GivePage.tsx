import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { GivingOptions } from "../components/stewardship/GivingOptions";
import { PledgeInfo } from "../components/stewardship/PledgeInfo";

export function GivePage() {
  useDocumentTitle("Give");
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        title="Give"
        subtitle="Your generosity sustains and strengthens our parish"
        backgroundImage="/images/raccoon-giving.webp"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="reveal">
          <PledgeInfo />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="reveal">
          <SectionHeading title="Ways to Give" subtitle="Choose the method that works best for you" />
        </div>
        <div className="reveal">
          <GivingOptions />
        </div>
      </section>
    </div>
  );
}
