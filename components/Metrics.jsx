/* Metrics — six numbers from the deck */
const Metrics = () => {
  const items = [
    { big: "20", unit: "yrs", tag: "Experience", label: "Building program functions at Oracle, Salesforce, Sunverge & SFMTA.", accent: true },
    { big: "$500", unit: "M", tag: "SFMTA", label: "Tech modernization portfolio led across five ITS programs." },
    { big: "30", unit: "%", tag: "Delivery", label: "Faster time-to-deliver after introducing the V-Model lifecycle." },
    { big: "25", unit: "", tag: "Team", label: "Program managers, analysts & engineers unified under one framework." },
    { big: "100", unit: "", tag: "Oracle Mega Grid", label: "First-ever RAC certification at 100 nodes with Intel, EMC, Dell.", accent: true },
    { big: "250", unit: "", tag: "Fortune 500", label: "Accounts under Oracle's global escalation PMO I established." }
  ];

  return (
    <section className="za-section" id="impact">
      <div className="za-container">
        <div className="za-metrics-head za-reveal">
          <div>
            <div className="za-eyebrow">By the numbers</div>
            <h2 className="za-section-title">Six moments<br />that tell the <em>story.</em></h2>
          </div>
          <div className="za-metrics-aside">
            Selected outcomes across two decades of TPM and portfolio leadership.
          </div>
        </div>

        <div className="za-metrics-grid za-reveal">
          {items.map((m, i) => (
            <div className={"za-metric" + (m.accent ? " is-accent" : "")} key={i}>
              <div className="za-metric-big">
                {m.big}{m.unit && <span className="unit">{m.unit}</span>}
              </div>
              <div>
                <div className="za-metric-tag">{m.tag}</div>
                <div className="za-metric-label">{m.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Metrics = Metrics;
