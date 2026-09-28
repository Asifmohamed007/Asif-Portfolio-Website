import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import Img from './Img.jsx';
import { SocialListItem } from './SocialLinks.jsx';
import useScrollSpy from '../hooks/useScrollSpy.js';
import { logos, navItems } from '../data/site.js';

const IDS = navItems.map((n) => n.id);

/** Top bar with the hamburger (< 1200px) and the slide-in menu it opens. */
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [current, goTo] = useScrollSpy(IDS);

  // Lock page scrolling while the menu is open (same as before).
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const openMenu = (e) => { e.preventDefault(); setOpen(true); };

  return (
    <>
      <div className="header-style-2 d-block d-xl-none">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="logo"></div>
          </div>
          <div className="col-6">
            <div className="header-right text-end">
              <div className="hamberger-menu">
                <i
                  id="menuBtn"
                  className="feather-menu bi bi-list menuiconbt humberger-menu"
                  role="button"
                  tabIndex={0}
                  aria-label="Open menu"
                  aria-expanded={open}
                  aria-controls="mobile-menu"
                  onClick={openMenu}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openMenu(e); }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`popup-mobile-menu${open ? ' menu-open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
      >
        <div className="inner">
          <div className="menu-top">
            <div className="menu-header">
              <a className="logo" href="/" aria-label="Asif Mohamed - home">
                <Img image={logos.small} alt="Asif Mohamed Mohideen" />
              </a>
              <div className="close-button">
                <button type="button" className="close-menu-activation close" aria-label="Close menu" onClick={() => setOpen(false)}>
                  <Icon name="x" />
                </button>
              </div>
            </div>
            <p className="discription">Hi ASIF here...</p>
          </div>
          <div className="content">
            <ul className="primary-menu nav nav-pills onepagenav">
              {navItems.map((item) => (
                <li key={item.id} className={`nav-item${current === item.id ? ' current' : ''}`}>
                  <a
                    className="nav-link smoth-animation-two"
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); setOpen(false); goTo(item.id); }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="social-share d-flex liststyle">
              <SocialListItem network="instagram" svgClass="feather feather-linkedin" />
              <SocialListItem network="linkedin" svgClass="feather feather-github" />
              <SocialListItem network="github" svgClass="feather feather-github" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
