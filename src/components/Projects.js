import React from "react";
import "../styles//Projects.css";

const projects = [
  { name: "Proyecto 1", description: "Descripción del proyecto 1", link: "#" },
  { name: "Proyecto 2", description: "Descripción del proyecto 2", link: "#" },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
