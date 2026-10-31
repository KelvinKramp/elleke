import { Link } from "react-router-dom";
import { Leaf } from "./Icons.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        <img src={project.image} alt={project.imageAlt} />
      </div>
      <div className="project-copy">
        <h2>
          <Leaf />
          {project.title}
        </h2>
        <p>{project.summary}</p>
        <p className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </p>
        <Link className="btn btn-fill" to={`/projects/${project.slug}`}>
          View project | &gt;
        </Link>
      </div>
    </article>
  );
}
