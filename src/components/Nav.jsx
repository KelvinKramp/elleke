import { Link, NavLink } from "react-router-dom";
import { profile } from "../data.js";
import { LinkedInIcon, MailIcon } from "./Icons.jsx";

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="monogram" aria-label="Elleke, home">
        {profile.monogram}
      </Link>
      <nav className="nav-links" aria-label="Primary">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <div className="nav-social">
        {profile.linkedin ? (
          <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        ) : (
          <a href="#contact" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        )}
        <a href="#contact" aria-label="Email">
          <MailIcon />
        </a>
      </div>
    </header>
  );
}
