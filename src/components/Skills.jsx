import { skills } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <h2 className="section-heading">Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.category}>
                <h3 className="skill-category">{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
