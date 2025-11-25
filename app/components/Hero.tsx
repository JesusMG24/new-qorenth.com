export default function Hero() {
  return (
    <section
      id="hero"
      className="mt-25 sm:mt-0 relative min-h-screen flex flex-col justify-center items-center px-6 text-center text-marble overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-dashboard.png"
          alt="Dashboard interface built by Qorenth"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-ink/70"></div>
      </div>

      <h1
        id="hero-heading"
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-6xl leading-tight"
      >
        Full-stack systems that kill spreadsheets and print money
      </h1>

      <p className="mt-8 text-xl md:text-2xl text-marble/80 max-w-3xl">
        Full-stack Next.js + Django + PostgreSQL • Fixed-price $25k–$80k • 4–10
        weeks
      </p>

      {/* SEO line */}
      <p className="mt-4 text-graphite max-w-2xl text-lg">
        Qorenth builds custom full-stack systems for online businesses that
        outgrew spreadsheets — automating workflows, scaling operations, and
        driving real revenue.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
        <a
          href="#pricing"
          aria-label="View pricing and project timelines"
          className="bg-gold hover:bg-gold-hover text-ink font-bold py-5 px-12 rounded text-xl uppercase tracking-wider"
        >
          See Pricing and Timeline
        </a>

        <a
          href="https://demo.qorenth.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the live demo application in a new tab"
          className="border-2 border-gold text-gold hover:bg-gold hover:text-ink font-bold py-5 px-12 rounded text-xl uppercase tracking-wider transition-all"
        >
          View Live Demo →
        </a>
      </div>
    </section>
  );
}
