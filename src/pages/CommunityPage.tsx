import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FestivalSection } from "../components/community/FestivalSection";
import { CultureCard } from "../components/community/CultureCard";

const cultureItems = [
  {
    title: "Greek Dance",
    description: "Learn traditional Greek dances and perform at community events and the annual Greek Festival.",
    image: "https://placehold.co/600x400/243b53/f0b429?text=Greek+Dance",
  },
  {
    title: "Greek Language",
    description: "Classes for children and adults to learn and preserve the Greek language and heritage.",
    image: "https://placehold.co/600x400/243b53/f0b429?text=Greek+Language",
  },
  {
    title: "Fellowship Events",
    description: "Regular social gatherings, dinners, and celebrations that bring our community together.",
    image: "https://placehold.co/600x400/243b53/f0b429?text=Fellowship",
  },
];

export function CommunityPage() {
  useDocumentTitle("Community");
  return (
    <>
      <HeroSection
        title="Community"
        subtitle="Building bonds of faith, culture, and friendship"
        backgroundImage="https://placehold.co/1920x600/102a43/f0b429?text=Community"
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FestivalSection />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SectionHeading title="Culture & Heritage" subtitle="Celebrating our Greek Orthodox traditions" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cultureItems.map((item) => (
            <CultureCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}
