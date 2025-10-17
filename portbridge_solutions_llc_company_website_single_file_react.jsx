export default function Site() {
  const nav = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "capabilities", label: "Capabilities" },
    { id: "contracting", label: "Contracting" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const services = [
    {
      title: "Custom Software Development",
      desc:
        "Full‑stack web, APIs, data pipelines, and integrations. Secure, test‑driven, and built for scale.",
    },
    {
      title: "Cloud & DevOps",
      desc:
        "Architect, migrate, and operate workloads on AWS/Azure/GCP. IaC, CI/CD, observability, and cost optimization.",
    },
    {
      title: "Data & AI",
      desc:
        "Data engineering, analytics, dashboards, and responsible AI/ML solutions tailored to mission needs.",
    },
    {
      title: "Cybersecurity",
      desc:
        "Secure SDLC, vulnerability management, FedRAMP‑aware architectures, and zero‑trust patterns.",
    },
  ];

  const differentiators = [
    "U.S. small business with global engineering reach",
    "Agile delivery with measurable outcomes (OKRs/KPIs)",
    "Security‑first development and architecture",
    "Hands‑on leadership from principal engineers",
  ];

  const naics = [
    { code: "541511", name: "Custom Computer Programming Services" },
    { code: "541512", name: "Computer Systems Design Services" },
    { code: "541519", name: "Other Computer Related Services" },
  ];

  const past = [
    {
      agency: "Sample State Health Dept.",
      work: "Built secure patient referral platform; 99.95% uptime; HIPAA‑aligned.",
    },
    {
      agency: "Sample Federal Lab",
      work: "Data ingestion + analytics lakehouse; 6x faster reporting.",
    },
    {
      agency: "Sample County IT",
      work: "Legacy .NET modernization to cloud‑native microservices.",
    },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <div className="leading-tight">
              <div className="font-bold tracking-tight text-slate-900">Portbridge Solutions LLC</div>
              <div className="text-xs text-slate-500">Wyoming • U.S. Small Business</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="hover:text-slate-900 text-slate-600">
                {n.label}
              </button>
            ))}
            <a href="#contact" className="px-3 py-1.5 rounded-xl bg-slate-900 text-white text-sm font-medium shadow hover:shadow-md">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Modern Software & Data for Mission Outcomes
              </h1>
              <p className="mt-4 text-slate-600 text-lg">
                We design, build, and operate secure cloud and data systems for public‑sector programs and regulated industries.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#services" className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold shadow hover:shadow-md">Explore Services</a>
                <a href="#contracting" className="px-4 py-2 rounded-xl border border-slate-300 text-slate-800 text-sm font-semibold hover:bg-slate-100">Contracting Info</a>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <Stat label="On‑time Delivery" value="100%" />
                <Stat label="Uptime (past 12 mo)" value="99.95%" />
                <Stat label="Cloud Migrations" value="25+" />
                <Stat label="Data Pipelines Deployed" value="60+" />
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-slate-200 p-4 shadow-sm bg-white">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Demo Placeholder — add screenshots later</span>
                </div>
                <ul className="mt-4 text-sm text-slate-600 space-y-2">
                  <li>• Secure SDLC with automated testing and code review</li>
                  <li>• Infrastructure as Code (Terraform, Bicep, CloudFormation)</li>
                  <li>• Observability: logging, metrics, tracing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-slate-200 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Services</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">
            End‑to‑end delivery from discovery and architecture through build‑out, migration, and ongoing operations.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className="font-semibold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Capabilities & Differentiators</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Core Capabilities</h3>
              <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc list-inside">
                <li>Agile product delivery and user‑centered design</li>
                <li>Cloud architecture (AWS/Azure/GCP), Kubernetes, serverless</li>
                <li>Data engineering (ETL/ELT), warehousing, and BI dashboards</li>
                <li>API design, microservices, and event‑driven systems</li>
                <li>Security and compliance by design (SOC2/FedRAMP‑aware)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Differentiators</h3>
              <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc list-inside">
                {differentiators.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contracting Info */}
      <section id="contracting" className="border-t border-slate-200 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Contracting Information</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <dl className="grid grid-cols-3 gap-3 text-sm">
                <dt className="text-slate-500">UEI</dt>
                <dd className="col-span-2 font-semibold text-slate-900">YOUR‑UEI‑HERE</dd>
                <dt className="text-slate-500">CAGE</dt>
                <dd className="col-span-2 font-semibold text-slate-900">Pending / TBD</dd>
                <dt className="text-slate-500">Business Size</dt>
                <dd className="col-span-2">U.S. Small Business</dd>
                <dt className="text-slate-500">State of Incorporation</dt>
                <dd className="col-span-2">Wyoming, USA</dd>
                <dt className="text-slate-500">Accepted Vehicles</dt>
                <dd className="col-span-2">Direct contracts, subcontracts, BPA, IDIQ</dd>
                <dt className="text-slate-500">Payment</dt>
                <dd className="col-span-2">SAM EFT (ACH)</dd>
              </dl>
              <div className="mt-4 text-xs text-slate-500">Update UEI/CAGE once SAM shows Active.</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">NAICS Codes</h3>
              <ul className="mt-3 text-sm text-slate-700 space-y-2">
                {naics.map((n) => (
                  <li key={n.code} className="flex items-center justify-between">
                    <span>{n.code} — {n.name}</span>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-slate-100 border border-slate-200">Primary</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 font-semibold text-slate-900">PSC (suggested)</h3>
              <p className="mt-2 text-sm text-slate-700">DA10, D399, R799 (finalize per opportunities).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="border-t border-slate-200" id="about">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Past Performance (Selected)</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {past.map((p, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-500">{p.agency}</div>
                <div className="mt-2 font-medium text-slate-900">{p.work}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-600">
            *If you’re a new federal vendor, highlight commercial or state/local projects and team credentials.
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-200 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contact</h2>
              <p className="mt-3 text-slate-200 text-sm">
                Ready to talk about your mission? Send us a note—responses within 1 business day.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <div><span className="text-slate-300">Email:</span> hello@portbridge.us</div>
                <div><span className="text-slate-300">Address:</span> Sheridan, Wyoming, USA</div>
              </div>
            </div>
            <form className="bg-white text-slate-900 rounded-2xl p-6 border border-slate-700/40 shadow">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 md:col-span-1">
                  <label className="text-xs text-slate-600">Name</label>
                  <input className="w-full mt-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300" placeholder="Your name"/>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="text-xs text-slate-600">Email</label>
                  <input type="email" className="w-full mt-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300" placeholder="you@agency.gov"/>
                </div>
                <div className="col-span-2">
                  <label className="text-xs text-slate-600">Message</label>
                  <textarea rows={4} className="w-full mt-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300" placeholder="How can we help?"/>
                </div>
              </div>
              <button type="button" className="mt-4 w-full rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2 hover:opacity-95">Send</button>
              <div className="mt-2 text-xs text-slate-500">This is a demo form. Wire to your email service before going live.</div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Logo small />
            <span>© {new Date().getFullYear()} Portbridge Solutions LLC. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-900" href="#contracting">UEI/CAGE</a>
            <a className="hover:text-slate-900" href="#services">Services</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

function Logo({ small = false }) {
  return (
    <div className={`relative ${small ? "h-6 w-6" : "h-8 w-8"}`} aria-hidden>
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#0f172a"/>
            <stop offset="100%" stopColor="#334155"/>
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="84" height="84" rx="18" fill="url(#g)"/>
        <path d="M26 60 L50 28 L74 60" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
        <path d="M26 60 H74" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
        <circle cx="50" cy="60" r="6" fill="#fff"/>
      </svg>
    </div>
  );
}
