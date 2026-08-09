import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      {/* Left */}
      <div className="contact-info">
        <h2>
          Begin the
          <br />
          <span>Conversation.</span>
        </h2>

        <p className="contact-intro">
          We welcome families to visit campus, meet our faculty, and experience
          the SchoolLanding difference first-hand. Reach out to arrange a tour
          or enquire about admission.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">⌖</div>

            <div>
              <label>CAMPUS ADDRESS</label>

              <p>45 Mohanpur Road, Samastipur, Bihar 848101</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">♧</div>

            <div>
              <label>ADMISSIONS OFFICE</label>

              <p>+91 1234567890</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉</div>

            <div>
              <label>EMAIL</label>

              <p>admissions@school.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="contact-form-wrapper">
        <h3>Admissions Enquiry</h3>

        <p className="form-description">
          Fill in the form and our team will reach out within 24 hours.
        </p>

        <form>
          <div className="form-grid">
            <div className="form-group">
              <label>PARENT / GUARDIAN NAME</label>

              <input type="text" placeholder="Your full name" />
            </div>

            <div className="form-group">
              <label>EMAIL ADDRESS</label>

              <input type="email" placeholder="you@email.com" />
            </div>

            <div className="form-group">
              <label>PHONE NUMBER</label>

              <input type="tel" placeholder="+91 1234567890" />
            </div>

            <div className="form-group">
              <label>CHILD'S YEAR GROUP</label>

              <select defaultValue="">
                <option value="" disabled>
                  Select year group
                </option>

                <option>Foundation</option>
                <option>Primary</option>
                <option>Middle School</option>
                <option>Secondary</option>
                <option>Sixth Form</option>
              </select>
            </div>
          </div>

          <div className="form-group message-group">
            <label>MESSAGE (OPTIONAL)</label>

            <textarea placeholder="Tell us about your child, any specific questions, or preferred visit dates..."></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Enquiry
            <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
