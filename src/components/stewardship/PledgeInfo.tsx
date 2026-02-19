export function PledgeInfo() {
  return (
    <div className="relative bg-gradient-to-br from-parchment-50 to-parchment-200 border border-parchment-300 rounded-sm p-8 md:p-10 overflow-hidden">
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-gold-400/20 rounded-bl-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-gold-400/20 rounded-tr-[40px] pointer-events-none" />

      <span className="font-display text-[10px] tracking-[0.3em] uppercase text-gold-700 block mb-3">
        Stewardship
      </span>
      <h3 className="font-heading text-2xl md:text-3xl text-midnight-900 mb-5 italic">
        What is Stewardship?
      </h3>
      <div className="space-y-4 text-midnight-600 leading-relaxed">
        <p>
          Stewardship is the grateful response of a Christian who recognizes and honors God as the
          source of every blessing. It is our offering of time, talent, and treasure back to God
          through the life of the Church.
        </p>
        <p>
          Your generous support enables Saint Demetrios to maintain our beautiful church, support
          our clergy and staff, fund our ministries and outreach programs, and serve our community
          in the name of Christ.
        </p>
        <p className="font-heading text-lg italic text-midnight-800">
          We invite every family and individual to prayerfully consider making a stewardship pledge
          for this year.
        </p>
      </div>
    </div>
  );
}
