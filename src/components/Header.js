import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <p>Portafolio</p>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Sobre mí</a></li>
          <li><a href="/projects">Proyectos</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;