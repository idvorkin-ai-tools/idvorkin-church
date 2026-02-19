import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FestivalSection } from "../components/community/FestivalSection";
import { CultureCard } from "../components/community/CultureCard";

const cultureItems = [
  {
    title: "Greek Dance",
    description: "Learn traditional Greek dances and perform at community events and the annual Greek Festival.",
    image: "/images/raccoon-greek-dance.webp",
  },
  {
    title: "Greek Language",
    description: "Classes for children and adults to learn and preserve the Greek language and heritage.",
    image: "/images/raccoon-greek-language.webp",
  },
  {
    title: "Fellowship Events",
    description: "Regular social gatherings, dinners, and celebrations that bring our community together.",
    image: "/images/raccoon-fellowship.webp",
  },
];

export function CommunityPage() {
  useDocumentTitle("Community");
  const revealRef = useReveal();

  return (
    <div ref={revealRef}>
      <HeroSection
        title="Community"
        subtitle="Building bonds of faith, culture, and friendship"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="reveal">
          <FestivalSection />
        </div>
      </section>

      <section className="bg-cloud-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHeading title="Culture & Heritage" subtitle="Celebrating our Greek Orthodox traditions" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-stagger">
            {cultureItems.map((item) => (
              <div key={item.title} className="reveal">
                <CultureCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
