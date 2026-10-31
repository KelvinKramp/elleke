import { useState } from "react";
import { profile } from "../data.js";
import { LinkedInIcon, MailIcon } from "./Icons.jsx";

export default function Footer() {
  const [note, setNote] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const from = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const body = `${message}\n\n— ${name} (${from})`;

    if (profile.email) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        "Hello Elleke",
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setNote(body);
  }

  return (
    <>
      <section className="contact-band" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s connect</h2>
          <p>{profile.connectLine}</p>
        </div>
        <form id="contact-form" className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label className="full">
            Message
            <textarea name="message" rows="4" required />
          </label>
          <button className="btn btn-fill" type="submit">
            Send | &gt;
          </button>
          {note ? (
            <p className="form-note">
              Thanks. An inbox isn’t connected yet, so your note stays on this page.
              <span>{note}</span>
            </p>
          ) : null}
        </form>
      </section>
      <footer className="footer">
        <img src="/images/portrait.jpg" alt="" className="avatar" />
        <p>{profile.connectLine}</p>
        <div className="footer-action">
          <a className="dotted" href="#contact-form">
            Let’s connect
          </a>
          <div className="nav-social">
            {profile.linkedin ? (
              <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
            ) : (
              <a href="#contact-form" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            )}
            <a href="#contact-form" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
