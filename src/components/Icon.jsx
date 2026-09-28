import icons from './featherIcons.js';

/**
 * Feather icon rendered as inline SVG at build time (identical markup to the old
 * feather.replace() output, but no 74 KB script and no flash of missing icons).
 * `className` lets a few places keep the exact classes the original markup used.
 */
export default function Icon({ name, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? `feather feather-${name}`}
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
}
