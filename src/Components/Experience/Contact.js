import React from "react";
import { withRouter } from "react-router-dom";

function Contact() {
  return (
    <section id="contact">
      <div className="text-container">
        <h1>Contact information</h1>
        <h2>Phone Number:</h2>
        <p>+46708952141</p>
        <h2>Email:</h2>

        <a href="mailto=Tobiasp89tp@gmail.com">Tobiasp89tp@gmail.com</a>

        <h2>Country:</h2>
        <p>Sweden</p>
      </div>
      <div className="picture-container"></div>
    </section>
  );
}

export default Contact;
