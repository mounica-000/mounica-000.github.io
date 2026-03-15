import { projects } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

export default function Projects() {
  const ref = useScrollAnimation(0.05);

  return (
    <section id="projects" className="projects">
      {/* Stream decoration at top */}
      <svg className="stream-top" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C240,10 480,70 720,40 C960,10 1200,70 1440,40 L1440,0 L0,0Z" fill="var(--off-white)"/>
      </svg>

      <div className="container">
        <div className="fade-up" ref={ref}>
          <h2 className="section-heading">Projects</h2>
          <div className="projects-grid">
            {projects.map((proj, i) => (
              <div className="project-card" key={i}>
                <div className="project-header">
                  <h3 className="project-name">{proj.name}</h3>
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${proj.name} GitHub`}>
                      <FiGithub size={18}/>
                    </a>
                  )}
                </div>
                <p className="project-tech">{proj.tech}</p>
                <ul className="project-bullets">
                  {proj.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stream decoration at bottom */}
      <svg className="stream-bottom" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,80 L0,80Z" fill="var(--cream)"/>
      </svg>

      {/* Animated stream waves overlay */}
      <svg className="stream-waves" viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path className="wave wave-1" d="M0,20 C360,5 720,35 1080,20 C1260,12 1360,25 1440,20" stroke="#90CAF9" strokeWidth="2" fill="none" opacity="0.4"/>
        <path className="wave wave-2" d="M0,25 C360,38 720,12 1080,25 C1260,32 1360,18 1440,25" stroke="#64B5F6" strokeWidth="1.5" fill="none" opacity="0.3"/>
      </svg>
    </section>
  );
}
