export default function ThankYou() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-ink text-marble text-center"
      aria-labelledby="thankyou-title"
    >
      <div className="max-w-2xl">
        <h1
          id="thankyou-title"
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
        >
          We got it.
        </h1>

        <p className="text-2xl md:text-3xl text-marble/80 leading-relaxed">
          You’ll have a custom roadmap + exact fixed quote in your inbox within
          24 hours.
          <br />
          No sales calls, no bullshit, no surprises.
        </p>

        <div className="mt-16">
          <a
            href="https://demo.qorenth.com"
            className="inline-flex items-center gap-3 bg-gold hover:bg-emerald-600 text-black font-bold uppercase tracking-wider px-12 py-6 rounded-xl text-xl transition-all hover:scale-105"
          >
            See the kind of system you’re about to get →
          </a>
        </div>

        <p className="mt-20 text-sm text-graphite">
          Questions while you wait? Reply to the email or hit us at{" "}
          <a
            href="mailto:ink@qorenth.com"
            className="underline text-gold hover:text-gold-hover"
          >
            ink@qorenth.com
          </a>
        </p>
      </div>
    </section>
  );
}
