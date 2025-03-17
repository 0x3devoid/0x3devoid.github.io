import React from "react";
import projects from "../utils/projects.json";

function Projects() {
  return (
    <div>
      <div className="project__container">
        {projects.map((project) => (
          <div className="project__items" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
