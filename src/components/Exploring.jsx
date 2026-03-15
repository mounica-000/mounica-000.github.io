import { exploring } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiTrendingUp } from 'react-icons/fi';
import './Exploring.css';

export default function Exploring() {
  const ref = useScrollAnimation();

  return (
    <section id="exploring" className="exploring">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <h2 className="section-heading">Currently Exploring</h2>
          <div className="exploring-list">
            {exploring.map((item, i) => (
              <div className="exploring-item" key={i}>
                <span className="exploring-icon"><FiTrendingUp /></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Small shrub decoration at bottom */}
      <svg className="exploring-shrub" viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="55" rx="40" ry="18" fill="#C5E1A5" opacity="0.5"/>
        <ellipse cx="300" cy="52" rx="55" ry="22" fill="#AED581" opacity="0.4"/>
        <ellipse cx="550" cy="56" rx="35" ry="15" fill="#C5E1A5" opacity="0.45"/>
        <ellipse cx="800" cy="53" rx="50" ry="20" fill="#AED581" opacity="0.35"/>
        <ellipse cx="1050" cy="55" rx="45" ry="18" fill="#C5E1A5" opacity="0.5"/>
      </svg>
    </section>
  );
}
