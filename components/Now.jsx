/* Now — current chapter (Zeeba Consulting) */
const Now = () => {
  const engagements = [
    {
      org: "BART",
      h: "Rebuilt trust in PM",
      body: "after a rigid checklist-driven methodology had failed. Designed a flexible, value-driven process that restored credibility.",
      stat: null
    },
    {
      org: "BAAQMD",
      h: "Governance system, executive buy-in",
      body: "on a new governance system within 30 days — enabling transparent Board & public reporting.",
      stat: "100% buy-in · 30 days"
    },
    {
      org: "Strategy",
      h: "5-yr plan translated into operating rhythm",
      body: "measurable results and a sustainable cadence that continued past the engagement.",
      stat: null
    }
  ];

  return (
    <section className="za-section za-now" id="now">
      <div className="za-container">
        <div className="za-now-grid">
          <div className="za-now-left za-reveal">
            <div className="za-eyebrow">Now · 2025 — Present</div>
            <h2 className="za-now-title">Helping agencies turn strategy <em>into action.</em></h2>
            <p className="za-now-lede">
              I started Zeeba Consulting in 2025 to design program management systems that work for the people who actually use them — not the frameworks they're copied from.
            </p>
            <p className="za-now-lede" style={{marginTop: "16px"}}>
              <em style={{color: "var(--accent)", fontStyle: "italic"}}>Strategy into measurable results, with a cadence that sustains beyond the engagement.</em>
            </p>
          </div>

          <div className="za-now-right za-reveal">
            <div className="za-engagements">
              <div className="za-now-engagements">
                {engagements.map((e, i) => (
                  <div className="za-engagement" key={i}>
                    <div className="za-engagement-org">{e.org}</div>
                    <div className="za-engagement-body">
                      <span className="h">{e.h}</span>
                      <p>{e.body}</p>
                      {e.stat && <span className="stat">{e.stat}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Now = Now;
