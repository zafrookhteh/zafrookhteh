/* Operating Philosophy — Kind candor + 6 principles */
const Philosophy = () => {
  const principles = [
    { n: "I",   t: "Kind candor",                          sub: "Honesty, delivered with care." },
    { n: "II",  t: "Calm accountability under pressure",   sub: "Steady when the room isn't." },
    { n: "III", t: "Inclusion & engagement",               sub: "Everyone's voice, on the record." },
    { n: "IV",  t: "Systems thinking",                     sub: "See the whole before changing the parts." },
    { n: "V",   t: "Execution & discipline",               sub: "The plan works when people work it." },
    { n: "VI",  t: "Develop leaders while delivering",     sub: "Coach on the way to the outcome." }
  ];

  return (
    <section className="za-section" id="philosophy">
      <div className="za-container">
        <div className="za-phil-grid">
          <div className="za-phil-left za-reveal">
            <div className="za-eyebrow">Operating philosophy</div>
            <h2 className="za-phil-headword">Kind<br /><em>candor.</em></h2>
            <div className="za-phil-def">
              <span className="za-phil-term">noun · zhâ-râ</span>
              Warm, genuine relationships paired with clear, uncompromising standards. Accountability delivered with care — so people do their best work without losing their humanity in the process.
            </div>
          </div>

          <div className="za-phil-right za-reveal">
            <div className="za-eyebrow" style={{marginBottom: "20px"}}>Six principles</div>
            <div className="za-principles">
              {principles.map((p, i) => (
                <div className="za-principle" key={i}>
                  <div className="za-principle-n">{p.n}</div>
                  <div className="za-principle-t">
                    {p.t}
                    <span className="za-principle-sub">{p.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Philosophy = Philosophy;
