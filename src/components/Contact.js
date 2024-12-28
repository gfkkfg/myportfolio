import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          I’d love to hear from you! Whether it’s a project, collaboration, or just a chat, feel free to drop me a message.
        </p>
        <div className="contact-info">
          {/* Email */}
          <div className="contact-item email">
            <i className="fas fa-envelope"></i>
            <a href="mailto:thangarajthegfk@gmail.com">thangarajthegfk@gmail.com</a>
          </div>

          {/* LinkedIn */}
          <div className="contact-item linkedin">
            <i className="fab fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/thangaraj-m-aa5413304"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>

          {/* GitHub */}
          <div className="contact-item github">
            <i className="fab fa-github"></i>
            <a
              href="https://github.com/gfkkfg/Thangaraj"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>

          {/* WhatsApp */}
          <div className="contact-item whatsapp">
            <i className="fab fa-whatsapp"></i>
            <a href="https://wa.me/6379099469" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
