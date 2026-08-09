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

            <span>SchoolLanding</span>
          </Link>

          <p>
            Shaping curious minds, building confident futures, and creating a
            community where every learner can come alive.
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

          <span>+91 1234567890</span>

          <span>admissions@school.com</span>

          <span>Samastipur, Bihar</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 SchoolLanding. All rights reserved.</span>

        <div>
          <a href="#">Privacy Policy</a>

          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
