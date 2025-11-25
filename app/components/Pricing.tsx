export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-ink border-y border-pale text-marble py-28 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pricing and Timeline
        </h2>
        <p className="text-graphite text-xl max-w-3xl mx-auto">
          Simple, transparent, and outcome-driven. Every Qorenth build runs on a
          fixed price with a guaranteed delivery window — no hourly padding, no
          endless scope creep.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-20">
        {/* Foundation */}
        <div className="bg-ink border border-pale p-10 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-gold mb-4">
              Foundation
            </h3>
            <p className="text-graphite mb-6 text-lg">
              For lean teams launching fast, scalable systems.
            </p>
            <ul className="text-graphite space-y-3 text-left">
              <li>• Discovery and architecture</li>
              <li>• Core CRUD functionality</li>
              <li>• Authentication and dashboard</li>
              <li>• Deployed to Vercel + Railway</li>
            </ul>
          </div>
          <div className="mt-6 text-center md:mt-10">
            <p className="text-3xl font-bold mb-2">$25,000 USD</p>
            <p className="text-graphite mb-6">Delivered in 4–6 weeks</p>
            <a
              href="#contact"
              className="inline-block w-full md:w-auto bg-gold hover:bg-gold-hover text-ink font-bold py-4 px-8 rounded uppercase tracking-wider transition-all"
            >
              Request Evaluation →
            </a>
          </div>
        </div>

        {/* Growth */}
        <div className="bg-ink p-10 rounded-2xl shadow-lg flex flex-col justify-between border-2 border-gold">
          <div>
            <h3 className="text-2xl font-semibold text-gold mb-4">Growth</h3>
            <p className="text-graphite mb-6 text-lg">
              For companies past MVP, ready to integrate real ops.
            </p>
            <ul className="text-graphite space-y-3 text-left">
              <li>• All Foundation features</li>
              <li>• API integrations (Stripe, HubSpot, Notion, etc.)</li>
              <li>• Role-based access control</li>
              <li>• Custom analytics dashboard</li>
            </ul>
          </div>
          <div className="mt-6 text-center md:mt-10">
            <p className="text-3xl font-bold mb-2">$45,000 USD</p>
            <p className="text-graphite mb-6">Delivered in 6–8 weeks</p>
            <a
              href="#contact"
              className="inline-block w-full md:w-auto bg-gold hover:bg-gold-hover text-ink font-bold py-4 px-8 rounded uppercase tracking-wider transition-all"
            >
              Request Evaluation →
            </a>
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-ink border border-pale p-10 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-gold mb-4">
              Enterprise
            </h3>
            <p className="text-graphite mb-6 text-lg">
              For high-revenue operations needing advanced automation.
            </p>
            <ul className="text-graphite space-y-3 text-left">
              <li>• All Growth features</li>
              <li>• Advanced automations and integrations</li>
              <li>• Multi-tenant architecture</li>
              <li>• Dedicated support and SLA</li>
            </ul>
          </div>
          <div className="mt-6 text-center md:mt-10">
            <p className="text-3xl font-bold mb-2">$65,000–$80,000 USD</p>
            <p className="text-graphite mb-6">Delivered in 8–10 weeks</p>
            <a
              href="#contact"
              className="inline-block w-full md:w-auto bg-gold hover:bg-gold-hover text-ink font-bold py-4 px-8 rounded uppercase tracking-wider transition-all"
            >
              Request Evaluation →
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <p className="text-graphite text-lg">
          Every project includes code ownership, deployment automation, and
          post-launch optimization.
          <br />
          Need something outside these scopes?{" "}
          <a
            href="#start"
            className="text-gold hover:text-gold-hover underline"
          >
            Book a discovery call
          </a>
          .
        </p>
      </div>
    </section>
  );
}
