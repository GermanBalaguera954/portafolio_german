import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosFolder } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 German Balaguera | Todos los derechos reservados</p>

      <div className="footer-links">
        <a href="/about">Sobre mí</a>
        <a href="/projects">Proyectos</a>
        <a href="/contact">Contacto</a>
      </div>

      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">{" "}<IoIosFolder /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">{" "}<FaXTwitter />{" "}</a>{" "}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </footer>
  );
}

export default Footer;
