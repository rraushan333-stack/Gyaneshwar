import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-mark">S</div>

            <span>Deoghar public school</span>
          </Link>

          <p>
            A community of learners, thinkers, and creators. We offer a
            rigorous, character-driven education that prepares students not just
            for exams — but for a meaningful life.
          </p>
        </div>

        {/* Links */}
        <div className="footer-column">
          <h4>EXPLORE</h4>

          <Link to="#about">About Us</Link>
          <Link to="#programs">Programs</Link>
          <Link to="#testimonials">Testimonials</Link>
          <Link to="#contact">Contact</Link>
        </div>

        {/* Admissions */}
        <div className="footer-column">
          <h4>ADMISSIONS</h4>

          <Link to="#contact">Admissions Enquiry</Link>

          <Link to="#contact">Campus Visit</Link>

          <Link to="#contact">Request Information</Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>CONTACT</h4>

          <span>+91 9199733237</span>

          <span>deogharpublicschool@gmail.com</span>

          <span>Kalyanpur Ps- Bibhutipur Samastipur, Bihar- 848160</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 Deoghar Public School | All Rights Reserved | Developed By
          Students Graph Pvt.Ltd
        </span>

        <div>
          <a href="#">Privacy Policy</a>

          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
