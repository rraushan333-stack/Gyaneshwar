import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-label">ABOUT US</div>

      <div className="about-container">
        {/* Image */}
        <div className="about-image-wrapper">
          <img
            src="/library.jpg"
            alt="School library"
            className="about-image"
          />

          <div className="about-quote">
            <span>
              "THE MIND IS NOT
              <br />
              A VESSEL TO FILL,
              <br />
              BUT A FIRE TO KINDLE."
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          <h2>
            A Legacy of
            <br />
            <span>Purposeful Learning.</span>
          </h2>

          <p>
            Founded in 2023 by a group of educators who believed school should
            be a place of genuine discovery, SchoolLanding has grown into one of
            the region's most respected institutions — known not just for exam
            results, but for the quality of people it graduates.
          </p>

          <p>
            Our big campus, 120 dedicated faculty members, and decades of
            refined pedagogy create an environment where every student finds
            their voice, their discipline, and their direction.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
