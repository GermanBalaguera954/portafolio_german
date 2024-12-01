import React from "react";
import "../styles/Projects.css";

// Datos de los proyectos, ahora con imágenes y más propiedades
const projects = [
  {
    name: "CHATBOT",
    description: "Un chatbot inteligente que utiliza procesamiento de lenguaje natural, desarrollado con Python, React y PostgreSQL. Este sistema está diseñado para gestionar la inscripción y cancelación de materias en el programa de Ingeniería de Sistemas, brindando una experiencia fluida y automatizada para los estudiantes.",
    link: "https://www.youtube.com/watch?v=DQU2OUdTpnk",
    image: "/assets/chat.png",
  },
  {
    name: "BINGO",
    description: "Un juego de bingo en línea multi-jugador, desarrollado con C#, ASP.NET, React y SQL Server. Este sistema permite a varios jugadores participar simultáneamente, con funcionalidades avanzadas como generación automática de cartones, verificación de líneas y premios, chat en tiempo real, y una interfaz interactiva para una experiencia de juego dinámica y divertida.",
    link: "https://www.youtube.com/watch?v=vNTbwlzHWjE",
    image: "/assets/bingo.png",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img
              src={project.image}
              alt={`Imagen del proyecto ${project.name}`}
              className="project-image"
            />
            <div className="project-details">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Ver proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
