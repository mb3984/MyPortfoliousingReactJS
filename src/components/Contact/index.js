import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uqcmez8", // Replace with your service ID
        "template_psec5wk", // Replace with your template ID
        form.current,
        "Oe0ELxIGxIoPha9b2" // Replace with your public key (user ID)
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Email Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h1>Contact Me</h1>
      <p>Please fill out the form below to discuss any work opportunities.</p>
      <label htmlFor="user_name">Name</label>
      <input
        type="text"
        id="user_name"
        name="user_name"
        placeholder="Your Name"
        required
      />
      <label htmlFor="user_email">Email</label>
      <input
        type="email"
        id="user_email"
        name="user_email"
        placeholder="Your Email"
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        required
      />
      <input type="submit" value="Send" className="submit-btn" />
    </form>
  );
};

export default Contact;
