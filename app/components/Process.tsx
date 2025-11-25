export default function Process() {
  return (
    <section
      id="process"
      className="bg-ink text-marble border-t border-pale py-28 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
        <p className="text-graphite text-xl max-w-3xl mx-auto">
          From concept to launch — structured, precise, and fast. Every project
          runs through a clear, three-phase process designed for accuracy,
          transparency, and long-term performance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 mt-20">
        {/* Discovery */}
        <div className="border border-pale p-8 rounded-2xl shadow-lg text-left">
          <h3 className="text-2xl font-semibold text-gold mb-4">
            1. Discovery
          </h3>
          <p className="text-graphite text-lg">
            We dig into your goals, workflows, and constraints before writing a
            single line of code. You’ll get a clear technical plan and
            architecture that aligns every feature with business ROI.
          </p>
        </div>

        {/* Design and Build */}
        <div className="border border-pale p-8 rounded-2xl shadow-lg text-left">
          <h3 className="text-2xl font-semibold text-gold mb-4">
            2. Design and Build
          </h3>
          <p className="text-graphite text-lg">
            We engineer your system end-to-end using <strong>Next.js</strong>,{" "}
            <strong>Django</strong>, and <strong>PostgreSQL</strong> — combining
            precision interfaces with bulletproof backend logic. Every component
            is tested, versioned, and deployment-ready.
          </p>
        </div>

        {/* Launch and Scale */}
        <div className="border border-pale p-8 rounded-2xl shadow-lg text-left">
          <h3 className="text-2xl font-semibold text-gold mb-4">
            3. Launch and Scale
          </h3>
          <p className="text-graphite text-lg">
            We deploy your platform to production, integrate monitoring, and
            handle post-launch tuning. You get long-term stability, analytics
            visibility, and a roadmap for scale.
          </p>
        </div>
      </div>

      <div className="text-center mt-20">
        <p className="text-graphite text-lg italic">
          Powered by <span className="text-marble font-semibold">Next.js</span>,{" "}
          <span className="text-marble font-semibold">Django</span>, and{" "}
          <span className="text-marble font-semibold">PostgreSQL</span>.
        </p>
      </div>
    </section>
  );
}
