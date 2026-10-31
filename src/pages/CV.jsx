import { Link } from "react-router-dom";
import { profile, projects, traits } from "../data.js";

export default function CV() {
  const project = projects[0];

  return (
    <main className="cv">
      <div className="cv-actions">
        <Link to="/about">Back</Link>
        <button type="button" onClick={() => window.print()}>
          Save as PDF
        </button>
      </div>
      <header>
        <p className="eyebrow">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p>{profile.intro}</p>
      </header>
      <section>
        <h2>Selected work</h2>
        <h3>{project.title}</h3>
        <p>
          {project.client} · {project.role}
        </p>
        <p>{project.solution}</p>
      </section>
      <section>
        <h2>Strengths</h2>
        <p>{traits.join(" · ")}</p>
      </section>
    </main>
  );
}
