import React from "react";
import projects from "../utils/projects.json";

function Projects() {
  return (
    <div>
      <div className="project__container">
        {projects.map((project) => (
          <div className="project__items" key={project.id}>

            <img src={project.image} alt={project.name} />
            <div className="project__description">
            <h3>
                {project.name}
            </h3>
            <p>{project.description}</p>
            <a href={project.link}>Explore Project</a>

            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
