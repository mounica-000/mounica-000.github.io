import { personalInfo } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content fade-up" ref={ref}>
          <h2 className="section-heading">About Me</h2>
          <p className="about-text">{personalInfo.about}</p>
        </div>
      </div>
    </section>
  );
}
