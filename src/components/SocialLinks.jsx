import Icon from './Icon.jsx';
import { social } from '../data/site.js';

// The three social <svg>s keep the exact (sometimes mismatched) classes the original
// markup had, so every CSS rule that styled them still applies identically.
const LABELS = { linkedin: 'LinkedIn', instagram: 'Instagram', github: 'GitHub' };

/** <li><a><svg/></a></li> items used in the side header and the mobile menu. */
export function SocialListItem({ network, svgClass }) {
  return (
    <li className={network}>
      <a href={social[network]} aria-label={`${LABELS[network]} profile`}>
        <Icon name={network} className={svgClass} />
      </a>
    </li>
  );
}
