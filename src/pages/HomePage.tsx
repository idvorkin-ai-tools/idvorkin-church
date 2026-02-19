import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { HomeHero } from "../components/home/HomeHero";
import { ServiceTimesCard } from "../components/home/ServiceTimesCard";
import { WelcomeBanner } from "../components/home/WelcomeBanner";
import { QuickLinks } from "../components/home/QuickLinks";
import { UpcomingEvents } from "../components/home/UpcomingEvents";

export function HomePage() {
  useDocumentTitle();
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <HomeHero />

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

      <section className="bg-cloud-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHeading title="Get Connected" subtitle="Find your place in our parish family" />
          </div>
          <div className="reveal">
            <QuickLinks />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
