import { Fragment } from 'react';

/** Renders plain text where a line break becomes <br> and **text** becomes <strong>. */
export default function RichText({ text }) {
  const lines = text.split('\n');
  return lines.map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line.split(/\*\*(.+?)\*\*/g).map((part, j) => (j % 2 ? <strong key={j}>{part}</strong> : part))}
    </Fragment>
  ));
}
