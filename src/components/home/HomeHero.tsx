import { Button } from "../ui/Button";

export function HomeHero() {
  return (
    <section className="bg-cloud-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-iris-500 uppercase tracking-wider mb-4">
              Welcome to
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-gradient-iris">Saint Demetrios</span>
              <br />
              <span className="text-ink-900">Greek Orthodox Church</span>
            </h1>
            <p className="text-lg text-ink-500 mb-8 max-w-lg font-heading italic">
              Loving God and one another in Spirit and Truth
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" href="/worship">Service Times</Button>
              <Button variant="secondary" href="/about">Explore Our Parish</Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-iris-500/10">
              <img
                src="/images/raccoon-hero-welcome.webp"
                alt="Welcome to Saint Demetrios"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
