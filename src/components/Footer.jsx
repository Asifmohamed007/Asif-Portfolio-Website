import Img from './Img.jsx';
import { logos, person } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="rn-footer-area rn-section-gap section-separator">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area text-center">
              <div className="logo">
                <a href="/" aria-label="Back to the top of the portfolio">
                  <Img image={logos.small} alt="Asif Mohamed Mohideen logo" />
                </a>
              </div>
              <p className="description mt--30">
                © 2024. All rights reserved by <a target="_blank" rel="noopener" href={`mailto:${person.email}`}>{person.name}.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
