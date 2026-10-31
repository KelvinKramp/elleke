import { projects } from "../data.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  return (
    <main className="page projects-page">
      <header className="page-intro">
        <p className="eyebrow">Projects</p>
        <h1>Selected work</h1>
        <p>
          Case studies from the portfolio, starting with a blog redesign for All4running.
        </p>
      </header>
      <div className="work-inner plain">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
