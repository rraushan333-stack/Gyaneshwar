import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* =========================
            LOGO
        ========================= */}
        <a href="/#home" className="logo" onClick={closeMenu}>
          <div className="logo-mark">
            <span>D</span>
          </div>

          <span className="logo-text">Deoghar Public School</span>
        </a>

        {/* =========================
            DESKTOP MENU
        ========================= */}
        <nav className="nav-links">
          <a href="/#home" onClick={closeMenu}>
            Home
          </a>

          <a href="/#about" onClick={closeMenu}>
            About Us
          </a>

          <a href="/#programs" onClick={closeMenu}>
            Programs
          </a>

          <a href="/#testimonials" onClick={closeMenu}>
            Testimonials
          </a>

          {/* =========================
              MANDATORY DISCLOSURE
          ========================= */}
          <Link to="/mandatory-disclosure" onClick={closeMenu}>
            Mandatory Disclosure
          </Link>

          <a href="/#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* =========================
            LOGIN BUTTON
        ========================= */}
        <a
          href="https://studentsgraph.in/login"
          className="apply-btn"
          onClick={closeMenu}
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>

        {/* =========================
            MOBILE HAMBURGER
        ========================= */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="/#home" onClick={closeMenu}>
          Home
        </a>

        <a href="/#about" onClick={closeMenu}>
          About Us
        </a>

        <a href="/#programs" onClick={closeMenu}>
          Programs
        </a>

        <a href="/#testimonials" onClick={closeMenu}>
          Testimonials
        </a>

        {/* =========================
            MOBILE MANDATORY DISCLOSURE
        ========================= */}
        <Link to="/mandatory-disclosure" onClick={closeMenu}>
          Mandatory Disclosure
        </Link>

        <a href="/#contact" onClick={closeMenu}>
          Contact
        </a>

        {/* =========================
            MOBILE LOGIN
        ========================= */}
        <a
          href="https://studentsgraph.in/login"
          className="mobile-apply"
          onClick={closeMenu}
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </div>
    </header>
  );
}

export default Navbar;
