import { Link } from "react-router-dom";
import { process, profile, projects, traits } from "../data.js";
import { Flower } from "../components/Icons.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  const loop = [...traits, ...traits];

  return (
    <main>
      <section className="hero">
        <Flower className="hero-flower" />
        <div className="hero-copy">
          <h1>Hi, I’m {profile.name}</h1>
          <p>{profile.intro}</p>
          <Link className="btn btn-ghost" to="/about">
            More about me | &gt;
          </Link>
        </div>
        <img
          className="hero-photo"
          src="/images/portrait.jpg"
          alt="Elleke standing in a winter forest"
        />
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {loop.map((trait, index) => (
            <span key={`${trait}-${index}`}>{trait}</span>
          ))}
        </div>
      </div>

      <section className="process" aria-label="Way of working">
        {process.map((step, index) => (
          <div className="process-step" key={step.title}>
            {index === 1 ? <Flower className="process-flower" /> : null}
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
        ))}
      </section>

      <section className="work">
        <div className="work-pattern" aria-hidden="true" />
        <div className="work-inner">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
