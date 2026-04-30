/* Skills + Certifications */
const SkillsCerts = () => {
  const groups = [
    {
      h: "Program & Portfolio Leadership",
      items: ["Portfolio Governance", "Roadmap Development", "Executive Alignment", "Stakeholder Management", "Capital Planning", "Delivery Optimization", "Capital & Government Proposals"]
    },
    {
      h: "Methodologies & Emerging Tech",
      items: ["Agile", "Scrum", "SAFe", "V-Model", "CI/CD", "MLOps", "AI Governance"]
    },
    {
      h: "Technology Domains",
      items: ["Systems Engineering", "Cloud (AWS, Azure)", "Distributed Systems", "Data Pipelines", "SRE/DevOps", "SLO/SLI Frameworks", "Legacy Modernization", "Database Optimization"]
    },
    {
      h: "Agentic AI & ML",
      items: ["AI program methodologies", "MLOps frameworks", "Responsible AI governance", "Hands-on agent development", "TPM automation", "OKR tracking", "Vzzy.io Agent — strategy alignment"]
    }
  ];

  const creds = [
    { k: "Education", v: "B.S. Computer Science · Cal State University, Dominguez Hills" },
    { k: "Certification", v: "Project Management Professional (PMP)" },
    { k: "Certification", v: "Agile Certified Practitioner (PMI-ACP)" }
  ];

  return (
    <section className="za-section" id="skills">
      <div className="za-container">
        <div className="za-skills-head za-reveal">
          <div className="za-eyebrow">Skills & credentials</div>
          <h2 className="za-section-title">The toolkit, <em>earned and current.</em></h2>
        </div>
        <div className="za-skills-grid za-reveal">
          {groups.map((g, i) => (
            <div className="za-skill-group" key={i}>
              <h3>{g.h}</h3>
              <ul className="za-skill-list">
                {g.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="za-creds za-reveal">
          {creds.map((c, i) => (
            <div key={i}>
              <div className="za-cred-k">{c.k}</div>
              <div className="za-cred-v">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.SkillsCerts = SkillsCerts;
