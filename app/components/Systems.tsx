export default function Systems() {
  return (
    <section
      id="systems"
      className="bg-ink text-marble border-t border-pale py-28 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">What We Build</h2>
        <p className="text-graphite text-xl max-w-3xl mx-auto">
          Qorenth designs and engineers custom full-stack systems that kill
          spreadsheets, automate workflows, and scale operations. Every product
          is built with Next.js, Django, and PostgreSQL — fast, reliable, and
          bulletproof.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-20">
        {/* Internal Platforms */}
        <div className="bg-ink p-8 border border-pale rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gold">
              Internal Platforms
            </h3>
            <p className="text-graphite mb-6">
              Custom dashboards and CRMs that centralize operations, automate
              busywork, and give founders full visibility into performance —
              without third-party bloat.
            </p>
          </div>
          <a
            href="https://demo.qorenth.com"
            target="_blank"
            className="text-gold hover:text-gold-hover font-semibold mt-auto"
          >
            Live Demo →
          </a>
        </div>

        {/* Client Portals */}
        <div className="bg-ink p-8 border border-pale rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gold">
              Client Portals
            </h3>
            <p className="text-graphite mb-6">
              Secure login experiences that let clients track progress, upload
              files, make payments, and access reports — fully white-labeled and
              API-driven.
            </p>
          </div>
          <a
            href="https://demo.qorenth.com"
            target="_blank"
            className="text-gold hover:text-gold-hover font-semibold mt-auto"
          >
            Live Demo →
          </a>
        </div>

        {/* Automation Systems */}
        <div className="bg-ink p-8 border border-pale rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gold">
              Automation Systems
            </h3>
            <p className="text-graphite mb-6">
              Replace your Zapier stack with robust, custom automations. Sync
              data between Notion, HubSpot, Stripe, and anything else your
              business runs on.
            </p>
          </div>
          <a
            href="https://demo.qorenth.com"
            target="_blank"
            className="text-gold hover:text-gold-hover font-semibold mt-auto"
          >
            Live Demo →
          </a>
        </div>
      </div>

      <div className="text-center mt-16">
        <a
          href="#contact"
          className="inline-block bg-gold hover:bg-gold-hover text-ink font-bold py-4 px-10 rounded text-lg uppercase tracking-wider"
        >
          Request a System Evaluation →
        </a>
      </div>
    </section>
  );
}
