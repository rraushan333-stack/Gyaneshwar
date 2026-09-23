import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <main className="hero" id="home">
      {/* Decorative circles */}
      <div className="hero-circle circle-one"></div>
      <div className="hero-circle circle-two"></div>

      <div className="hero-container">
        {/* ================= LEFT ================= */}

        <div className="hero-content">
          <p className="hero-eyebrow">
            EST. 1998&nbsp; · &nbsp;SHAPING TOMORROW
          </p>

          <h1>
            Where Minds
            <br />
            <span>Come Alive.</span>
          </h1>

          <p className="hero-description">
            A community of learners, thinkers, and creators. We offer a
            rigorous, character-driven education that prepares students not just
            for exams — but for a meaningful life.
          </p>

          <div className="hero-actions">
            <Link to="/apply" className="admission-btn">
              Apply for Admission
              <span className="arrow">→</span>
            </Link>

            <Link to="/about" className="story-link">
              Our Story
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="hero-visual">
          <img
            src="/school.jpg"
            alt="Students learning in classroom"
            className="hero-image"
          />

          {/* Accreditation */}
          <div className="accreditation-card">
            <strong>A+</strong>

            <span>ACCREDITATION</span>
          </div>

          {/* Award */}
          <div className="award-card">
            <div className="award-icon">✧</div>

            <div className="award-content">
              <strong>Award Winning</strong>

              <span>National School of the Year</span>

              <small>2024</small>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}

      <div className="hero-bottom">
        <div className="stats">
          <div className="stat-item">
            <strong>1000+</strong>
            <span>STUDENTS ENROLLED</span>
          </div>

          <div className="stat-item">
            <strong>98%</strong>
            <span>UNIVERSITY PLACEMENT</span>
          </div>

          <div className="stat-item">
            <strong>26 yrs</strong>
            <span>OF EXCELLENCE</span>
          </div>
        </div>

        <div className="scroll-text">
          <span>SCROLL</span>
          <i></i>
        </div>
      </div>
    </main>
  );
}

export default Hero;
