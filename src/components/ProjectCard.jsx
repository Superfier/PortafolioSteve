import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({
  image,
  title,
  description,
  technologies = [],
  demo,
  github,
  inProgress,  
}) {
  return (
    <div className="project-card">

      {/* Imagen */}
      <div className="project-image">
        <img src={image} alt={title} />
        {inProgress && (
          <div className="overlay-note">En proceso</div>
        )}
      </div>

      {/* Contenido */}
      <div className="project-body">

        <h3 className="project-title">
          {title}
          {inProgress && (
            <span className="badge bg-warning text-dark ms-2">En proceso</span>
          )}
        </h3>

        <p className="project-description">
          {description}
        </p>

        {/* Tecnologías */}
        <div className="tech-stack">
          {technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Botones */}
        <div className="project-buttons">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo"
          >
            <ExternalLink size={18} />
            <span>Demo</span>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-code"
          >
            <FaGithub size={18} />
            <span>Código</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
