import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Puedes contactarme a través de:</p>
      <ul>
        <li>
          Email: <a href="mailto:tuemail@example.com">tuemail@example.com</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/tuperfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tu Perfil
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
