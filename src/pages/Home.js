import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <section className="hero">
        <h1>¡Hola! Soy <span className="highlight">German Balaguera</span></h1>
        <p>
          Desarrollador Frontend apasionado por crear interfaces modernas, intuitivas y funcionales.
        </p>
      </section>

      <section className="skills">
        <h2>Mis Habilidades</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Desarrollo Web</h3>
            <p>HTML, CSS, JavaScript, React, y más.</p>
          </div>
          <div className="skill-card">
            <h3>Diseño Responsivo</h3>
            <p>Experiencia en crear sitios adaptables para todos los dispositivos.</p>
          </div>
          <div className="skill-card">
            <h3>Optimización</h3>
            <p>Mejoras de rendimiento y SEO para tus aplicaciones.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;