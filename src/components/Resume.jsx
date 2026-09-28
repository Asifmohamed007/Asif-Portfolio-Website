import RichText from './RichText.jsx';
import { certifications, education, interests, skills, tabs } from '../data/resume.js';
import { person } from '../data/site.js';

const NBSP = '\u00A0';

function ResumeColumn({ column }) {
  return (
    <div className={column.className}>
      <div className="content">
        {column.subtitle && <span className="subtitle">{column.subtitle}</span>}
        {column.title && <h4 className="maintitle">{column.title}</h4>}
        <div className="experience-list">
          {column.items.map((item) => (
            <div className="resume-single-list" key={item.title}>
              <div className="inner">
                <div className="heading">
                  <div className="title">
                    <h4><i className={item.icon} aria-hidden="true"></i>{`${NBSP} ${item.title}`}</h4>
                    <span>{item.meta}</span>
                  </div>
                </div>
                <p className="description"><RichText text={item.description} /></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillColumn({ group }) {
  return (
    <div className={group.className}>
      <div className="progress-wrapper">
        <div className="content">
          <span className="subtitle">{group.subtitle}</span>
          <h4 className="maintitle">{group.title}</h4>
          {group.bars.map((bar) => (
            <div className="progress-charts" key={bar.name}>
              <h6 className="heading heading-h6">{bar.name}</h6>
              <div className="progress">
                <div
                  className="progress-bar wow fadeInLeft"
                  data-wow-duration={bar.duration}
                  data-wow-delay={bar.delay}
                  role="progressbar"
                  style={{ width: bar.width }}
                  aria-valuenow={parseInt(bar.percent, 10)}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={bar.name}
                >
                  <span className="percent-label">{bar.percent}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Pane({ id, className, rowClass = 'row row--40', children }) {
  return (
    <div className={className} id={id} role="tabpanel" aria-labelledby={`${id}-tab`}>
      <div className="personal-experience-inner mt--40">
        <div className={rowClass}>{children}</div>
      </div>
    </div>
  );
}

/**
 * Resume with its four tabs (Bootstrap's tab plugin switches them).
 * `children` (the Projects and Contact sections) are rendered inside the tab
 * container on purpose: that is where the original markup placed them, and their
 * widths/spacing depend on it. Moving them out would change the design.
 */
export default function Resume({ children }) {
  return (
    <div className="rn-resume-area rn-section-gap section-separator" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">I&apos;m a Fresher</span>
              <a href={person.resume}>
                <h2 className="title">My Resume</h2> <br />
                <i className="fas fa-search" aria-hidden="true"></i>{`${NBSP} Click to View / Download ${NBSP}`}<i className="fas fa-download" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt--45">
          <div className="col-lg-12">
            <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
              {tabs.map((t, i) => (
                <li className="nav-item" key={t.id} role="presentation">
                  <a
                    className={`nav-link${i === 0 ? ' active' : ''}`}
                    id={`${t.id}-tab`}
                    data-bs-toggle="tab"
                    href={`#${t.id}`}
                    role="tab"
                    aria-controls={t.id}
                    aria-selected={i === 0 ? 'true' : 'false'}
                  >
                    <i className={t.icon} aria-hidden="true"></i>{` ${NBSP} ${t.label}`}
                  </a>
                </li>
              ))}
            </ul>

            <div className="rn-nav-content tab-content" id="myTabContents">
              <Pane id="education" className="tab-pane show active fade single-tab-area" rowClass="row">
                {education.map((c) => <ResumeColumn key={c.title} column={c} />)}
              </Pane>
              <Pane id="professional" className="tab-pane fade ">
                {skills.map((g) => <SkillColumn key={g.title} group={g} />)}
              </Pane>
              <Pane id="certifications" className="tab-pane fade">
                {certifications.map((c) => <ResumeColumn key={c.title} column={c} />)}
              </Pane>
              <Pane id="interests" className="tab-pane fade">
                {interests.map((c, i) => <ResumeColumn key={i} column={c} />)}
              </Pane>

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
