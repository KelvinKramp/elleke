import { LinkedInIcon, MailIcon } from "./Icons.jsx";

export default function ConnectCard() {
  return (
    <a className="connect-card" href="#contact">
      <img src="/images/portrait.jpg" alt="" />
      <span className="connect-copy">
        <span className="dotted">Let’s connect</span>
        <span className="mini-icons">
          <LinkedInIcon />
          <MailIcon />
        </span>
      </span>
    </a>
  );
}
