/* Timeline — career arc */
const Timeline = () => {
  const rows = [
    {
      yr: "2025 — Present",
      org: "Zeeba Consulting",
      role: "Co-Founder",
      body: "Designing program management systems that work for the people who use them. Engagements with BART and BAAQMD."
    },
    {
      yr: "2018 — 2024",
      org: "SFMTA",
      role: "Head of Technical Portfolio Management",
      body: "Led 25-person team and $500M tech modernization portfolio. Introduced V-Model lifecycle, cutting delivery times by 30%. Cited as a model for federal-audit compliance."
    },
    {
      yr: "2016 — 2017",
      org: "Sunverge Energy",
      role: "Director, Program Management",
      body: "Built the program function from scratch for a venture-backed clean-tech company. Synchronized hardware, firmware and cloud releases; launched residential storage appliance with ~1,500 units sold."
    },
    {
      yr: "2013 — 2014",
      org: "Salesforce",
      role: "Senior Program Manager, SRE",
      body: "Established SLOs/SLIs for critical cloud infrastructure. Drove CI/CD adoption and DevOps transformation across multi-tenant SaaS platform."
    },
    {
      yr: "1996 — 2012",
      org: "Oracle",
      role: "Director, Customer & Technical Program Management",
      body: "Established global executive escalation PMO for top 250 accounts. Led the Mega Grid initiative — first RAC certification at 100 nodes with Intel, EMC, Dell. Managed SDLC for support.oracle.com serving millions of users."
    }
  ];

  return (
    <section className="za-section" id="timeline">
      <div className="za-container">
        <div className="za-tl-head za-reveal">
          <div className="za-eyebrow">Career</div>
          <h2 className="za-section-title">Two decades, <em>five chapters.</em></h2>
        </div>
        <div className="za-tl-list za-reveal">
          {rows.map((r, i) => (
            <div className="za-tl-row" key={i}>
              <div className="za-tl-yr">{r.yr}</div>
              <div className="za-tl-org">{r.org}</div>
              <div className="za-tl-body">
                <span className="role">{r.role}</span>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Timeline = Timeline;
