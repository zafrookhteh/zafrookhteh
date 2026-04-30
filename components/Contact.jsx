/* Contact — what's next + reach out */
const Contact = () => {
  const roles = [
    "Head of Program Management or PMO",
    "Director / VP, Escalation or Customer Programs",
    "VP, Technology Delivery / Portfolio Management"
  ];

  return (
    <section className="za-contact" id="contact">
      <div className="za-container">
        <div className="za-reveal">
          <div className="za-eyebrow">What's next</div>
          <h2 className="za-contact-title">
            A leadership seat where I can <em>translate complexity</em> into clear plans — and deliver.
          </h2>

          <div className="za-roles">
            {roles.map((r, i) => (
              <div className="za-role" key={i}>
                <span className="za-role-tag">Target</span>
                {r}
              </div>
            ))}
          </div>

          <div className="za-contact-row">
            <div>
              <div className="za-contact-k">Email</div>
              <div className="za-contact-v">
                <a href="mailto:zahra.afrookhteh@gmail.com">zahra.afrookhteh@gmail.com</a>
              </div>
            </div>
            <div>
              <div className="za-contact-k">Phone</div>
              <div className="za-contact-v">415.307.1906</div>
            </div>
            <div>
              <div className="za-contact-k">Location</div>
              <div className="za-contact-v">San Francisco Bay Area</div>
            </div>
            <div>
              <div className="za-contact-k">LinkedIn</div>
              <div className="za-contact-v">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener">/in/zahra-afrookhteh</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

window.Contact = Contact;
