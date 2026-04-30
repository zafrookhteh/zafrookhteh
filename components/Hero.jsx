/* Hero — name, throughline, CTA */
const Hero = () => {
  const [now, setNow] = React.useState("");
  React.useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = d.toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", hour12: false,
        timeZone: "America/Los_Angeles"
      });
      setNow(hh + " PT");
    };
    update();
    const t = setInterval(update, 30000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="za-hero" id="top">
      <div className="za-hero-grid">
        <div className="za-hero-left">
          <div className="za-hero-tag">
            <span className="za-hero-pulse" />
            <span>Available · Head of TPM / PMO · Advisor</span>
          </div>
          <h1 className="za-hero-title">
            I bring <em>clarity</em><br />
            to <em>complexity</em>.
          </h1>
          <p className="za-hero-lede">
            Two decades building program management functions from the ground up — turning ad&nbsp;hoc operations into disciplined systems that ship. Oracle. Salesforce. Sunverge. SFMTA. Now Zeeba.
          </p>
          <div className="za-hero-actions">
            <a className="za-btn za-btn-primary" href="#contact">
              Get in touch <span className="za-btn-arrow">→</span>
            </a>
            <a className="za-btn za-btn-ghost" href="#cases">
              See case studies
            </a>
          </div>
          <div className="za-hero-meta">
            <div>
              <div className="za-hero-meta-k">Based in</div>
              <div className="za-hero-meta-v">SF Bay Area · {now || "—"}</div>
            </div>
            <div>
              <div className="za-hero-meta-k">Currently</div>
              <div className="za-hero-meta-v">Co-Founder, Zeeba Consulting</div>
            </div>
            <div>
              <div className="za-hero-meta-k">Credentials</div>
              <div className="za-hero-meta-v">PMP · PMI-ACP · B.S. CS</div>
            </div>
          </div>
        </div>

        <div className="za-hero-right">
          <div className="za-portrait">
            <div className="za-portrait-frame">
              <div className="za-portrait-placeholder">
                <span className="ph-name">Zahra</span>
                Portrait · 4:5
              </div>
            </div>
            <div className="za-portrait-caption">
              <div className="za-portrait-name">Zahra Afrookhteh</div>
              <div className="za-portrait-role">TPM · Portfolio Leader</div>
            </div>
          </div>
          <div className="za-hero-quote">
            <span className="za-quote-mark">“</span>
            <p>
              Honesty, delivered with <em>care.</em>
            </p>
            <span className="za-quote-attr">— Kind candor · operating principle</span>
          </div>
        </div>
      </div>

      <div className="za-hero-marquee" aria-hidden="true">
        <div className="za-marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="za-marquee-row" key={i}>
              <span>Oracle</span><span>·</span>
              <span>Salesforce</span><span>·</span>
              <span>Sunverge Energy</span><span>·</span>
              <span>SFMTA</span><span>·</span>
              <span>Zeeba Consulting</span><span>·</span>
              <span>BART</span><span>·</span>
              <span>BAAQMD</span><span>·</span>
              <span>Vzzy.io</span><span>·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Hero = Hero;
