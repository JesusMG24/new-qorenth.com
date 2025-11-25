export default function CTA() {
  return (
    <section
      id="cta"
      className="py-28 px-6 md:px-20 bg-ink text-marble border-b border-pale text-center"
      aria-labelledby="cta-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="cta-title"
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight"
        >
          Ready to Replace Spreadsheets with Real Systems?
        </h2>

        <p className="text-graphite text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          We build full-stack platforms that automate operations, scale revenue,
          and look damn good doing it — powered by Next.js, Django, and
          PostgreSQL.
        </p>

        <a
          href="#contact"
          className="inline-block px-8 py-4 font-semibold text-xl rounded-lg bg-gold text-ink hover:bg-gold-hover transition-all duration-300 shadow-lg hover:-translate-y-0.5"
        >
          Start Your System Evaluation →
        </a>
      </div>
    </section>
  );
}
