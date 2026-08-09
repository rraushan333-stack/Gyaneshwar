import "./Testimonials.css";

const testimonials = [
  {
    initials: "SK",
    name: "Sangeeta & Manoj Kumar",
    text: `Watching our daughter flourish here has been remarkable.
    She arrived shy and uncertain — she leaves as student council
    president and an IB diploma holder. The teachers genuinely know
    each child.`,
  },

  {
    initials: "AS",
    name: "Abhishek Sinha",
    text: `The STEM programme gave me a foundation I carry into my
    engineering degree every day. The robotics lab alone was worth
    it — I was coding autonomous vehicles at age 15!`,
  },

  {
    initials: "PJ",
    name: "Poonam Jha",
    text: `As a parent who transferred two children from overseas
    schools, I was anxious. Within one term, both were thriving.
    The pastoral care is exceptional — they treat families as
    partners.`,
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonial-heading">
        <p>OUR COMMUNITY</p>

        <h2>Stories That Speak.</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">★★★★★</div>

            <p className="testimonial-text">"{item.text}"</p>

            <div className="testimonial-user">
              <div className="user-avatar">{item.initials}</div>

              <strong>{item.name}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
