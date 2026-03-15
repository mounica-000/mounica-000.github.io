import { education } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import './Education.css';

export default function Education() {
  const ref = useScrollAnimation();

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <h2 className="section-heading">Education</h2>
          <div className="edu-card">
            <h3 className="edu-university">{education.university}</h3>
            <p className="edu-degree">{education.degree}</p>
            <p className="edu-minor">{education.minor}</p>
            <div className="edu-meta">
              <span><FiCalendar size={13}/> {education.dates}</span>
              <span><FiMapPin size={13}/> {education.location}</span>
            </div>
            <div className="edu-courses">
              <p className="edu-courses-label">Relevant Coursework</p>
              <div className="edu-tags">
                {education.courses.map((c) => (
                  <span className="edu-tag" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
