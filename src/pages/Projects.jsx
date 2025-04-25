import "./Projects.css";
import { projects } from "../utils/data";
import { Link } from "react-router-dom";
import { FaLink, FaPlayCircle } from "react-icons/fa"; // Icons voor de knoppen

export const Projects = () => {
  return (
    <section className="projects-section fade-in-up">
      <h1 className="section-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p className={`project-type ${project.type.toLowerCase()}`}>
                {project.type}
              </p>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="button-container">
                <Link
                  to={project.link}
                  target="_blank"
                  className="project-button project-link"
                >
                  <FaLink size={18} style={{ marginRight: "8px" }} />
                  View Project
                </Link>
                <Link
                  to={project.demo}
                  target="_blank"
                  className="project-button project-demo"
                >
                  <FaPlayCircle size={18} style={{ marginRight: "8px" }} />
                  Live Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
