import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServiceTimesCard } from "../components/home/ServiceTimesCard";
import { WelcomeBanner } from "../components/home/WelcomeBanner";
import { QuickLinks } from "../components/home/QuickLinks";
import { UpcomingEvents } from "../components/home/UpcomingEvents";
import { Button } from "../components/ui/Button";

export function HomePage() {
  useDocumentTitle();
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        title="Saint Demetrios"
        subtitle="Loving God and One Another in Spirit and Truth"
        backgroundImage="/images/raccoon-hero-welcome.webp"
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="accent" href="/worship">Service Times</Button>
          <Button variant="secondary" href="/about">Explore Our Parish</Button>
        </div>
      </HeroSection>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 reveal">
            <WelcomeBanner />
          </div>
          <div className="reveal">
            <ServiceTimesCard />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="reveal">
          <SectionHeading title="Get Connected" subtitle="Find your place in our parish family" />
        </div>
        <div className="reveal">
          <QuickLinks />
        </div>
      </section>

      <section className="relative bg-midnight-950 grain py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHeading title="Upcoming Events" subtitle="Join us for worship, fellowship, and community" />
          </div>
          <div className="max-w-2xl mx-auto reveal">
            <UpcomingEvents />
          </div>
        </div>
      </section>
    </div>
  );
}
