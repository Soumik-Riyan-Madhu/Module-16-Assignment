function Contact() {
  return (
    <div>

      {/* Section 1 */}
      <section className="page-title">
        <h1>Contact Us</h1>
        <p>We would love to hear from you.</p>
      </section>

      {/* Section 2 */}
      <section className="section">
        <h2>Get in Touch</h2>
        <p>Email: example@gmail.com</p>
        <p>Phone: +880 1234567890</p>
      </section>

      {/* Section 3 */}
      <section className="section light">
        <h2>Our Location</h2>
        <p>Dhaka, Bangladesh</p>
      </section>

      {/* Section 4 */}
      <section className="section">
        <h2>Send Us a Message</h2>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="button">Send Message</button>
        </form>

      </section>

    </div>
  );
}

export default Contact;
