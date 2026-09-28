import Icon from './Icon.jsx';
import Img from './Img.jsx';
import { SocialListItem } from './SocialLinks.jsx';
import useScrollSpy from '../hooks/useScrollSpy.js';
import { logos, navItems } from '../data/site.js';

const IDS = navItems.map((n) => n.id);

/** Fixed left sidebar shown on screens >= 1200px. */
export default function SideHeader() {
  const [current, goTo] = useScrollSpy(IDS);
  return (
    <div className="d-none d-xl-block">
      <header className="rn-header-area d-flex align-items-start flex-column left-header-style">
        <div className="logo-area">
          <a href="/" aria-label="Asif Mohamed - home">
            <Img image={logos.large} alt="Asif Mohamed Mohideen" priority />
          </a>
        </div>
        <nav id="sideNavs" className="mainmenu-nav navbar-example2 onepagenav" aria-label="Main">
          <ul className="primary-menu nav nav-pills">
            {navItems.map((item) => (
              <li key={item.id} className={`nav-item${current === item.id ? ' current' : ''}`}>
                <a
                  className="nav-link smoth-animation-two"
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); goTo(item.id); }}
                >
                  <Icon name={item.icon} />{item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer">
          <div className="social-share-style-1">
            <span className="title">You Can Find Me In</span>
            <ul className="social-share d-flex liststyle">
              <SocialListItem network="linkedin" svgClass="feather feather-linkedin" />
              <SocialListItem network="instagram" svgClass="feather feather-linkedin" />
              <SocialListItem network="github" svgClass="feather feather-github" />
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
