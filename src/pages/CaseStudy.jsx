import { Link, useParams } from "react-router-dom";
import { projects } from "../data.js";
import { Flower } from "../components/Icons.jsx";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="page">
        <h1>Project not found</h1>
        <Link to="/projects">Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="case">
      <section className="case-hero">
        <Flower className="case-flower" />
        <div className="case-hero-copy">
          <p className="eyebrow">
            {project.role} · {project.client}
          </p>
          <h1>{project.title}</h1>
          <p>{project.problem}</p>
        </div>
        <div className="case-stage">
          <img src="/images/blog-desktop.png" alt={project.imageAlt} />
        </div>
      </section>

      <section className="case-block">
        <p className="kicker">01 / Samenvatting</p>
        <h2>Een compleet nieuwe blogomgeving</h2>
        <p>{project.solution}</p>
        <div className="info-grid">
          <article>
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </article>
          <article>
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </article>
          <article>
            <h3>Bedrijfsdoel</h3>
            <p>{project.goal}</p>
          </article>
        </div>
      </section>

      <section className="case-blue">
        <p className="kicker">02 / Context</p>
        <h2>From stories to the shop</h2>
        <p>
          The blog had to stand on its own as a place for running expertise, and still
          open a clear path into the webshop. Existing posts needed a home in the new
          structure, so the redesign had to work for what was already published.
        </p>
        <img
          className="shop-shot"
          src="/images/shop-laptop.jpg"
          alt="All4running shop navigation on a laptop, with a prompt to find the right shoe"
        />
      </section>

      <section className="case-block">
        <p className="kicker">03 / Mijn bijdrage</p>
        <h2>What I took on</h2>
        <p>{project.contribution}</p>
        <ul className="role-row">
          <li>
            <span>Role</span>
            {project.role}
          </li>
          <li>
            <span>Client</span>
            {project.client}
          </li>
          <li>
            <span>With</span>
            {project.team.join(", ")}
          </li>
        </ul>
        <ul className="skill-row">
          {project.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="phones">
        <figure>
          <img src="/images/phone-stories.png" alt="Trailrunning stories module on mobile" />
          <figcaption>Trailrunning stories</figcaption>
        </figure>
        <figure>
          <img
            src="/images/phone-tips.png"
            alt="Article tips with linked running shoes on mobile"
          />
          <figcaption>Tips that link to gear</figcaption>
        </figure>
      </section>

      <p className="case-next">
        <Link to="/projects">All projects</Link>
      </p>
    </main>
  );
}
