export function Leaf({ className = "icon" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="16" cy="7" rx="3.6" ry="6.2" />
        <ellipse cx="16" cy="25" rx="3.6" ry="6.2" />
        <ellipse cx="7" cy="16" rx="6.2" ry="3.6" />
        <ellipse cx="25" cy="16" rx="6.2" ry="3.6" />
      </g>
    </svg>
  );
}

export function Flower({ className = "icon" }) {
  return (
    <svg className={className} viewBox="0 0 80 80" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="40" cy="18" rx="10" ry="16" />
        <ellipse cx="40" cy="62" rx="10" ry="16" />
        <ellipse cx="18" cy="40" rx="16" ry="10" />
        <ellipse cx="62" cy="40" rx="16" ry="10" />
        <ellipse cx="24" cy="24" rx="9" ry="14" transform="rotate(-45 24 24)" />
        <ellipse cx="56" cy="24" rx="9" ry="14" transform="rotate(45 56 24)" />
        <ellipse cx="24" cy="56" rx="9" ry="14" transform="rotate(45 24 56)" />
        <ellipse cx="56" cy="56" rx="9" ry="14" transform="rotate(-45 56 56)" />
      </g>
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.5 9H4V20h2.5V9ZM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4ZM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11V9h2.4v1.5c.4-.7 1.3-1.8 3.2-1.8 2.3 0 4 1.5 4 4.8V20Z"
      />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        d="M4 7.5h16v10H4z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        d="m4.5 8 7.5 6 7.5-6"
      />
    </svg>
  );
}
