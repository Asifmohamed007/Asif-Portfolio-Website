import AnimatedHeadline from './AnimatedHeadline.jsx';
import Particles from './Particles.jsx';
import { headlineWords, person } from '../data/site.js';

export default function Hero() {
  return (
    <section
      id="home"
      className="slider-style-6 web-developer height--100 rn-section-gap align-items-center with-particles bg_image bg_image--14"
      data-black-overlay="5"
    >
      <Particles />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="banner-inner text-center">
              {/* The page's single <h1> (was an <h3>); the "h3" class keeps its old look. */}
              <h1 className="h3 fs--100">{person.heroName}</h1>
              <AnimatedHeadline words={headlineWords} />
              <div className="button-area">
                <a className="rn-btn shadow-none" href="#contacts"><span>CONTACT ME</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
