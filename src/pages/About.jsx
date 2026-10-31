import { Link } from "react-router-dom";
import { profile, traits } from "../data.js";

export default function About() {
  return (
    <main className="page about-page">
      <section className="about-hero">
        <div>
          <p className="eyebrow">About me</p>
          <h1>Hi, I’m {profile.name}</h1>
          <p>{profile.intro}</p>
          <p>
            I like work where the problem is tangled: unclear structure, competing goals,
            a team that needs one shared picture. The interesting part is making that
            picture simple enough to design from, and solid enough to build.
          </p>
          <Link className="btn btn-fill" to="/cv">
            Download CV | &gt;
          </Link>
        </div>
        <img src="/images/portrait.jpg" alt="Elleke standing in a winter forest" />
      </section>

      <section className="skills" aria-label="Strengths">
        <h2>How I work</h2>
        <ul>
          {traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
