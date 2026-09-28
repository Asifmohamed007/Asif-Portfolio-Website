import { Fragment } from 'react';
import Icon from './Icon.jsx';
import Img from './Img.jsx';
import RichText from './RichText.jsx';

function Gallery({ images }) {
  return (
    <div className="container">
      <div className="row">
        {images.map((img, i) => (
          <div className="col-lg-6 col-md-12 col-12" key={i}>
            <Img image={img} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Entry({ project }) {
  return (
    <div className="modal-body">
      <div className="news-details">
        <span className="date">{project.date}</span>
        <h2 className="title"><RichText text={project.title} /></h2>
        <Img image={project.hero} alt={project.hero.alt} className="img-fluid modal-feat-img" lazy={project.hero.lazy} />
        <p><RichText text={project.body} /></p>
        {project.link && (
          <>
            <center>
              <a href={project.link} target="_blank" rel="noopener">
                <h2 className="title"></h2> Click to View My Project <Icon name="arrow-right" />
              </a>
            </center>
            <p></p>
          </>
        )}
        {project.galleryInsideDetails && <Gallery images={project.gallery} />}
      </div>
      {!project.galleryInsideDetails && <Gallery images={project.gallery} />}
    </div>
  );
}

/** Bootstrap modal listing several projects (opened by a card in "My Projects"). */
export default function ProjectModal({ id, projects, label }) {
  return (
    <div className="modal fade" id={id} tabIndex={-1} role="dialog" aria-hidden="true" aria-label={label}>
      <div className="modal-dialog modal-dialog-centered modal-news" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><Icon name="x" /></span>
            </button>
          </div>
          {projects.map((p, i) => (
            <Fragment key={p.title}>
              {i > 0 && (<><br /> <br /><hr /><br /><br /></>)}
              <Entry project={p} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
