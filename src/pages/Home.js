import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <h1 className="hero-title">
        ¡Hola! Soy <br></br> <span className="highlight-text">GERMAN BALAGUERA</span>
      </h1>
      <p className="hero-paragraph">
        Desarrollador Frontend apasionado por crear interfaces modernas, intuitivas y funcionales.
      </p>

      <div className="skills-container">
        {['Desarrollo Web', 'Diseño Responsivo', 'Optimización'].map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
            <p>
              {index === 0 && 'HTML, CSS, JavaScript, React, y más.'}
              {index === 1 && 'Experiencia en crear sitios adaptables para todos los dispositivos.'}
              {index === 2 && 'Mejoras de rendimiento y SEO para tus aplicaciones.'}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
