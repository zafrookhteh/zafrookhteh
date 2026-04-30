/* Three Transformations — what I do best */
const Transformations = () => {
  const cols = [
    {
      n: "01",
      h: "Build the function from scratch.",
      p: "Introduce frameworks — V-Model, Agile, SAFe — bringing order to chaos and turning siloed operations into disciplined systems.",
      q: "“We don't have a program management function — projects are ad hoc and we need discipline.”"
    },
    {
      n: "02",
      h: "Restore trust in high-stakes moments.",
      p: "Design escalation frameworks that keep executives informed, resolve issues faster, and rebuild credibility with customers and boards.",
      q: "“Our customers and executives are losing trust because escalations are chaotic.”"
    },
    {
      n: "03",
      h: "Scale complex initiatives.",
      p: "Orchestrate cross-functional teams, align stakeholders, embed accountability — keeping capital and enterprise programs on track.",
      q: "“Risk is high, nothing feels under control, and we need clarity and results.”"
    }
  ];

  return (
    <section className="za-section" id="transformations">
      <div className="za-container">
        <div className="za-trans-head za-reveal">
          <div className="za-eyebrow">What I do best</div>
          <h2 className="za-section-title">Three transformations I've run, <em>over and over.</em></h2>
        </div>

        <div className="za-trans-grid">
          {cols.map((c, i) => (
            <div className="za-trans-col za-reveal" key={i}>
              <div className="za-trans-num">{c.n}</div>
              <h3 className="za-trans-h">{c.h}</h3>
              <p className="za-trans-p">{c.p}</p>
              <div className="za-trans-quote">{c.q}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Transformations = Transformations;
