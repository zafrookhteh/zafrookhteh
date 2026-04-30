/* Case Studies — SFMTA, Sunverge, Oracle */
const CaseStudies = () => {
  const cases = [
    {
      org: "SFMTA",
      role: "Head of Technical Portfolio Management",
      yrs: "2018 — 2024",
      title: <>From silos to system — <em>unifying a $500M portfolio</em> with the V-Model.</>,
      ctx: [
        "Five Intelligent Transportation Systems programs — Train Control, Radio/CAD-AVL, Customer Information, Asset Management, PMO — were running independently under a construction-era framework that didn't fit technology work.",
        "In eight months I introduced the Systems Engineering V-Model, tailored it to SFMTA's environment, and unified 25 people around one disciplined, flexible delivery system."
      ],
      pull: "“Cited as a model for compliance after passing federal audits.”",
      outcomes: [
        { val: "30%", t: "Faster delivery", body: "on the Customer Information Systems upgrade — zero downtime, 100% satisfaction in public surveys." },
        { val: "$100M", t: "Tech budget embedded", body: "inside the $600M Train Control Modernization capital program — a first for SFMTA." },
        { val: "11", t: "Signal intersections", body: "optimized with LIDAR & dynamic timing, cutting travel times 30% — now the playbook for city-wide rollout." },
        { val: "99.9%", t: "Pipeline uptime", body: "ingesting GPS, sensor & operational data from 1,000+ transit vehicles in real time." }
      ]
    },
    {
      org: "Sunverge Energy",
      role: "Director, Program Management",
      yrs: "2016 — 2017",
      title: <>Venture-backed clean-tech, <em>zero program function</em>, one market launch to prove.</>,
      ctx: [
        "Sunverge needed to ship a residential storage appliance that required synchronized hardware, firmware and cloud-software delivery. A miss would stall investor confidence; a hit would validate the company's entry into U.S. residential energy storage.",
        "I built the program management function from the ground up — Agile/Scrum, Jira, Confluence, release discipline — and aligned 20–25 engineers around one coordinated roadmap."
      ],
      pull: "“From reactive execution to coordinated delivery, in months.”",
      outcomes: [
        { val: "~1,500", t: "SIS units sold", body: "at launch, validating Sunverge's entry into the U.S. residential energy storage market." },
        { val: "1", t: "Unified roadmap", body: "across hardware, firmware, cloud & customer ops — replacing three separate release cadences." },
        { val: "AWS", t: "Cloud & data pipelines", plain: true, body: "on EC2/RDS/Redshift ingesting real-time telemetry from thousands of distributed IoT devices." },
        { val: "0→1", t: "Program function", plain: true, body: "established from scratch — the repeatable framework scaled to new product lines." }
      ]
    },
    {
      org: "Oracle",
      role: "Director, Customer & Technical Program Management",
      yrs: "1996 — 2012",
      title: <>Where I learned to <em>make big systems land</em> — inside Fortune 500s.</>,
      ctx: [
        "I joined Oracle during the company's hyper-growth era and grew into a Director leading a 10-person global team responsible for strategic delivery, high-severity escalations, and process transformation.",
        "Three things I'm proudest of: standing up Oracle's first executive escalation PMO, certifying RAC at 100 nodes, and bringing Agile into Oracle development for the first time."
      ],
      pull: "“Restored trust with Fidelity, Yahoo & CME. Proved RAC viable for mission-critical workloads.”",
      outcomes: [
        { val: "250", t: "Top accounts", body: "under the structured executive escalation program I designed and implemented for Oracle." },
        { val: "100", t: "Node RAC certification", body: "the Mega Grid initiative with Intel, EMC and Dell. Delivered in 10 months." },
        { val: "70–80%", t: "FAQ ticket deflection", body: "after reimagining My Oracle Support; 20–30% reduction in total support tickets." },
        { val: "10", t: "Global team", body: "of technical escalation managers covering every time zone, 24/7." }
      ]
    }
  ];

  return (
    <section className="za-section" id="cases">
      <div className="za-container">
        <div className="za-cases-head za-reveal">
          <div className="za-eyebrow">Case studies</div>
          <h2 className="za-section-title">Three programs, <em>one operating system.</em></h2>
          <p className="za-section-lede">
            Different industries, different stakes — same throughline: bring discipline, restore trust, ship the work.
          </p>
        </div>

        <div className="za-cases-stack">
          {cases.map((c, i) => (
            <article className="za-case za-reveal" key={i}>
              <div className="za-case-left">
                <div className="za-case-crumb">
                  <span className="za-case-org">{c.org} · {c.role}</span>
                  <span>{c.yrs}</span>
                </div>
                <h3 className="za-case-title">{c.title}</h3>
                {c.ctx.map((p, j) => <p className="za-case-context" key={j}>{p}</p>)}
                <div className="za-case-pull">{c.pull}</div>
              </div>
              <div className="za-case-right">
                <div className="za-case-kicker">Outcomes</div>
                <div className="za-outcomes">
                  {c.outcomes.map((o, j) => (
                    <div className="za-outcome" key={j}>
                      <div className={"za-outcome-val" + (o.plain ? " is-plain" : "")}>{o.val}</div>
                      <div className="za-outcome-txt">
                        <span className="za-outcome-t">{o.t}</span>
                        {o.body}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

window.CaseStudies = CaseStudies;
