import React, { useState } from "react";
import "./styles.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your form submission logic here
    // For example, send the form data to a server or display a confirmation message
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Wanna get in touch with me? Fill out the form below to send me a
            message, and I will try to get back to you.
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>
                  Street No 01, Lane No.10, Royal Avenue، Park Rd, near COMSATS
                  University، Chatta Bakhtawar, Islamabad, Islamabad Capital
                  Territory 44000
                </p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>noumanhayathayat@gmail.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p><a href="tel:+923056719020">+923056719020</a></p>
              </div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.009841564046!2d73.15609081516087!3d33.65690688071531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfea49e0a193a7%3A0xf4e221bbd57c25a2!2sPearl%20Boys%20Hostel!5e0!3m2!1sen!2s!4v1658238861876!5m2!1sen!2s"
                frameBorder="0"
                style={{ border: 0, width: "100%", height: "290px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-control"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
