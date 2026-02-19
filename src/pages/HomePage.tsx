import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServiceTimesCard } from "../components/home/ServiceTimesCard";
import { WelcomeBanner } from "../components/home/WelcomeBanner";
import { QuickLinks } from "../components/home/QuickLinks";
import { UpcomingEvents } from "../components/home/UpcomingEvents";
import { Button } from "../components/ui/Button";

export function HomePage() {
  useDocumentTitle();
  return (
    <>
      <HeroSection
        title="Saint Demetrios Greek Orthodox Church"
        subtitle="Loving God and One Another in Spirit and Truth"
        backgroundImage="https://placehold.co/1920x800/102a43/f0b429?text=Saint+Demetrios+Church"
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="accent" href="/worship">Service Times</Button>
          <Button variant="secondary" href="/about">Learn More</Button>
        </div>
      </HeroSection>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <WelcomeBanner />
          </div>
          <div>
            <ServiceTimesCard />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SectionHeading title="Get Connected" subtitle="Find your place in our parish family" />
        <QuickLinks />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SectionHeading title="Upcoming Events" subtitle="Join us for worship, fellowship, and community" />
        <div className="max-w-2xl mx-auto">
          <UpcomingEvents />
        </div>
      </section>
    </>
  );
}
