import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ClergyGrid } from "../components/about/ClergyGrid";
import { MissionSection } from "../components/about/MissionSection";

export function AboutPage() {
  useDocumentTitle("About");
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        title="About Our Parish"
        subtitle="A vibrant community of faith in the heart of Seattle since 1916"
        backgroundImage="/images/raccoon-hero-welcome.webp"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="reveal">
          <MissionSection />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="reveal">
          <SectionHeading title="Our Clergy" subtitle="Dedicated servants guiding our community in faith" />
        </div>
        <div className="reveal">
          <ClergyGrid />
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="reveal">
          <SectionHeading title="Our History" subtitle="Over a century of faith in the Pacific Northwest" />
        </div>
        <div className="reveal warm-card rounded-sm p-8 md:p-10 text-midnight-600 leading-relaxed space-y-5">
          <p className="font-heading text-lg">
            Saint Demetrios Greek Orthodox Church has been a cornerstone of the Seattle Greek community
            since 1916. For over a century, our parish has served as a spiritual home, cultural center,
            and gathering place for Orthodox Christians in the Pacific Northwest.
          </p>
          <p>
            Our beautiful church building on Boyer Avenue East stands as a testament to the faith and
            dedication of generations of parishioners who have built and sustained this community.
          </p>
          <p>
            Today, Saint Demetrios continues to grow and thrive, welcoming newcomers and lifelong members
            alike in the timeless traditions of Orthodox Christianity.
          </p>
        </div>
      </section>
    </div>
  );
}
