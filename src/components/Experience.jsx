import { experiences } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import './Experience.css';

export default function Experience() {
  const ref = useScrollAnimation(0.05);

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <h2 className="section-heading">Experience</h2>
          <div className="timeline">
            {experiences.map((exp, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <div className="exp-meta">
                    <span><FiCalendar size={13}/> {exp.dates}</span>
                    <span><FiMapPin size={13}/> {exp.location}</span>
                  </div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  <div className="exp-tech">
                    {exp.tech.map((t) => (
                      <span className="tech-badge" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
