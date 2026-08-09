import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <div className="logo-mark">
            <span>S</span>
          </div>

          <span className="logo-text">Deoghar Public School</span>
        </a>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <a href="#home">Home</a>

          <a href="#about">About Us</a>

          <a href="#programs">Programs</a>

          <a href="#testimonials">Testimonials</a>

          <a href="#contact">Contact</a>
        </nav>

        {/* Apply Button */}
        <a href="#contact" className="apply-btn">
          Apply Now
        </a>

        {/* Mobile Hamburger */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About Us
        </a>

        <a href="#programs" onClick={closeMenu}>
          Programs
        </a>

        <a href="#testimonials" onClick={closeMenu}>
          Testimonials
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a href="#contact" className="mobile-apply" onClick={closeMenu}>
          Apply Now
        </a>
      </div>
    </header>
  );
}

export default Navbar;
