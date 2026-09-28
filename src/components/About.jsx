import Icon from './Icon.jsx';
import { services } from '../data/about.js';

const AOS = { 'data-aos': 'fade-up', 'data-aos-duration': '500', 'data-aos-once': 'true' };

export default function About() {
  return (
    <div className="rn-service-area rn-section-gap " id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center" {...AOS} data-aos-delay="100">
              <span className="subtitle">Features</span>
              <h2 className="title">About Me</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt_md--10 mt_sm--10">
          {services.map((s, i) => (
            <div
              key={s.title}
              {...AOS}
              data-aos-delay={String(100 + i * 200)}
              className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
            >
              <div className="rn-service">
                <div className="inner">
                  <div className="icon">
                    <Icon name={s.icon} />
                  </div>
                  <div className="content">
                    <h4 className="title"><a href="#">{s.title}</a></h4>
                    <p className="description">{s.description}</p>
                    <a className="read-more-button" href="#" aria-label={s.title} tabIndex={-1}></a>
                  </div>
                </div>
                <a className="over-link" href="#" aria-label={s.title} tabIndex={-1}></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
