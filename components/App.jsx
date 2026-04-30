/* App root + nav scroll handler + reveal observer */
const App = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const els = document.querySelectorAll(".za-reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="za-page">
      <nav className={"za-nav " + (scrolled ? "is-scrolled" : "")}>
        <a className="za-mark" href="#top">
          <span className="za-mark-glyph">ZA</span>
          <span>Zahra Afrookhteh</span>
        </a>
        <div className="za-nav-links">
          <a href="#impact">Impact</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#cases">Cases</a>
          <a href="#now">Now</a>
          <a href="#timeline">Career</a>
        </div>
        <a className="za-nav-cta" href="#contact">Get in touch</a>
      </nav>

      <window.Hero />
      <window.Metrics />
      <window.Transformations />
      <window.Philosophy />
      <window.CaseStudies />
      <window.Now />
      <window.Timeline />
      <window.SkillsCerts />
      <window.Contact />

      <footer className="za-footer">
        <div className="za-footer-inner">
          <div>
            © {new Date().getFullYear()} Zahra Afrookhteh · San Francisco Bay Area
          </div>
          <div>
            <a href="mailto:zahra.afrookhteh@gmail.com">Email</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
