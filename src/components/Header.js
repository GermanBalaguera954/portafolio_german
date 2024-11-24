import React from 'react';
import { HomeOutlined, InfoCircleOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons';
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
          <HomeOutlined />
          <span>Inicio</span>
        </Link>
        <Link to="/about" className="header-link">
          <InfoCircleOutlined />
          <span>Sobre mí</span>
        </Link>
        <Link to="/projects" className="header-link">
          <ProjectOutlined />
          <span>Proyectos</span>
        </Link>
        <Link to="/contact" className="header-link">
          <MailOutlined />
          <span>Contacto</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;

