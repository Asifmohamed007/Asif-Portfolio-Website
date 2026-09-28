import Img from './Img.jsx';
import RichText from './RichText.jsx';
import { projectCards } from '../data/projects.js';

const AOS = { 'data-aos': 'fade-up', 'data-aos-duration': '500', 'data-aos-once': 'true' };

// Links inside a card must not navigate: the whole card opens the project pop-up.
const stay = (e) => e.preventDefault();

export default function Projects() {
  return (
    <div className="rn-blog-area rn-section-gap section-separator" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div {...AOS} data-aos-delay="100" className="section-title text-center">
              <span className="subtitle">Visit my projects and keep your feedback</span>
              <h2 className="title">My Projects</h2>
            </div>
          </div>
        </div>
        <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
          {projectCards.map((card) => (
            <div
              key={card.modalId}
              {...AOS}
              data-aos-delay={card.aosDelay}
              className="col-lg-6 col-xl-6 mt--30 col-md-6 col-sm-12 col-12 mt--30"
            >
              <div className="rn-blog" data-bs-toggle="modal" data-bs-target={`#${card.modalId}`}>
                <div className="inner">
                  <div className="thumbnail">
                    <a href={`#${card.modalId}`} onClick={stay} aria-label={`Open ${card.category}`}>
                      <Img image={card.image} alt={card.alt} />
                    </a>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                        <a href={`#${card.modalId}`} onClick={stay}>{card.category}</a>
                      </div>
                      <div className="meta">
                        <span>{card.meta}</span>
                      </div>
                    </div>
                    <h4 className="title">
                      <a href={`#${card.modalId}`} onClick={stay}><RichText text={card.title} /></a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
