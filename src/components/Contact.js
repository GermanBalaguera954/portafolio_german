import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Puedes contactarme a través de:</p>
      <ul>
        <li>
          Email: <a href="germanbalaguera954@gmail.com">germanbalaguera954@gmail.com</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/germanbalaguera954/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/germanbalaguera954/
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
