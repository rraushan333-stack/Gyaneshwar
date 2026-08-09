import "./Programs.css";

function Programs() {
  return (
    <section className="programs-section" id="programs">
      <div className="programs-header">
        <div>
          <p className="program-label">WHAT WE OFFER</p>

          <h2>
            Programs Built for
            <br />
            <span>Every Learner.</span>
          </h2>
        </div>

        <p className="program-description">
          From Foundation Stage through Sixth Form, every programme is designed
          to challenge, inspire, and equip.
        </p>
      </div>

      <div className="program-grid">
        {/* Large card */}
        <div className="program-card large-card">
          <img src="/classroom.jpg" alt="Students classroom" />

          <div className="program-overlay">
            <span>01</span>

            <h3>
              Academic
              <br />
              Excellence
            </h3>

            <p>Building strong foundations for lifelong learning.</p>
          </div>
        </div>

        {/* Small card */}
        <div className="program-card">
          <img src="/enrichment.jpg" alt="Student enrichment" />

          <div className="program-overlay">
            <span>02</span>

            <h3>Enrichment</h3>

            <p>Discover talents beyond the classroom.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
