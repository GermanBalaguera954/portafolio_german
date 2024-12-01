import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <div className='custom-header'>
      <div className="logo">
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo" className="logo-image" />
        </Link>
      </div>

      <div className="header-links">
        <Link to="/" className="header-link">
          <span>Inicio</span>
        </Link>
        <Link to="/about" className="header-link">
          <span>Sobre mí</span>
        </Link>
        <Link to="/projects" className="header-link">
          <span>Proyectos</span>
        </Link>
        <Link to="/contact" className="header-link">
          <span>Contacto</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;

