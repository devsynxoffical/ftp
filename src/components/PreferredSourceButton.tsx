/**
 * "Preferred source on Google" button: a plain link to Google's source
 * preferences page for this domain. A signed-in visitor can tick the box there
 * so Google shows them more of our articles in Top Stories. No script, no API.
 */
export const PREFERRED_SOURCE_URL = "https://www.google.com/preferences/source?q=funnelsthatprint.com";

export default function PreferredSourceButton({ className = "" }: { className?: string }) {
  return (
    <a
      className={`gps-btn ${className}`.trim()}
      href={PREFERRED_SOURCE_URL}
      target="_blank"
      rel="noopener"
      aria-label="Make Funnels That Print a preferred source on Google (opens Google in a new tab)"
    >
      <span className="gps-g" aria-hidden="true">
        <svg viewBox="0 0 48 48" width="16" height="16">
          <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.6 13.3l7.9 6.1C12.4 13.7 17.7 9.5 24 9.5z" />
          <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.7c4.3-4 6.9-9.9 6.9-17.1z" />
          <path fill="#FBBC05" d="M10.5 28.6c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C.9 16.6 0 20.2 0 24s.9 7.4 2.6 10.7l7.9-6.1z" />
          <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.7c-2.1 1.4-4.8 2.3-8.5 2.3-6.3 0-11.6-4.2-13.5-9.9l-7.9 6.1C6.6 42.6 14.6 48 24 48z" />
        </svg>
      </span>
      Make Funnels That Print a preferred source on Google
    </a>
  );
}
