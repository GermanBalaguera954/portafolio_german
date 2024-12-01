import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <header className="about-header">
          {/* <h2 className="about-title">Sobre mí</h2> */}
        </header>
        <article className="about-content">
          <p>
            <strong>German Balaguera</strong>, es un <strong>ingeniero de sistemas y computación</strong> con pasión por la <strong>tecnología</strong> y el <strong>desarrollo web</strong>. Mi enfoque está en crear soluciones innovadoras y funcionales con tecnologías como <strong>React</strong> y <strong>JavaScript</strong>.
          </p>
          <p>
            Estoy dedicado a diseñar experiencias digitales excepcionales, combinando habilidades técnicas y creatividad. Mi objetivo es ayudar a empresas y personas a lograr sus metas a través de herramientas tecnológicas modernas.
          </p>
          <p>
            En mi tiempo libre, disfruto <strong>explorar nuevas tecnologías</strong>, <strong>leer</strong> y <strong>practicar deportes</strong>. 
          </p>
        </article>
        <footer className="about-footer">
          <p>¿Tienes un proyecto en mente? <span className="about-call-to-action">¡Hablemos!</span></p>
        </footer>
      </div>
    </section>
  );
}

export default About;
