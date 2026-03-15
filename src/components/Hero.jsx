import { FiDownload } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { personalInfo } from '../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Animated clouds */}
      <svg className="cloud cloud-1" viewBox="0 0 200 80" fill="white" opacity="0.55">
        <ellipse cx="60" cy="50" rx="50" ry="25"/><ellipse cx="100" cy="38" rx="60" ry="32"/><ellipse cx="150" cy="50" rx="45" ry="22"/>
      </svg>
      <svg className="cloud cloud-2" viewBox="0 0 160 60" fill="white" opacity="0.35">
        <ellipse cx="50" cy="35" rx="40" ry="20"/><ellipse cx="90" cy="26" rx="48" ry="26"/><ellipse cx="130" cy="35" rx="35" ry="18"/>
      </svg>
      <svg className="cloud cloud-3" viewBox="0 0 180 70" fill="white" opacity="0.45">
        <ellipse cx="55" cy="42" rx="42" ry="22"/><ellipse cx="100" cy="32" rx="52" ry="28"/><ellipse cx="145" cy="42" rx="38" ry="20"/>
      </svg>

      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-role">{personalInfo.role}</p>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          <div className="hero-buttons">
            <a href={personalInfo.resumePath} download className="btn btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaLinkedinIn /> Let's Connect
            </a>
          </div>
        </div>

        {/* Stylized tree illustration */}
        <div className="hero-tree-wrapper">
          <svg className="hero-tree" viewBox="0 0 260 480" xmlns="http://www.w3.org/2000/svg">
            {/* Ground shadow */}
            <ellipse cx="130" cy="472" rx="65" ry="8" fill="rgba(0,0,0,0.06)"/>
            {/* Trunk */}
            <rect x="118" y="300" width="24" height="175" rx="6" fill="#6D4C41"/>
            <rect x="122" y="310" width="6" height="155" rx="3" fill="#5D4037" opacity="0.3"/>
            {/* Branches */}
            <line x1="118" y1="340" x2="80" y2="310" stroke="#6D4C41" strokeWidth="5" strokeLinecap="round"/>
            <line x1="142" y1="360" x2="185" y2="335" stroke="#6D4C41" strokeWidth="4" strokeLinecap="round"/>
            {/* Canopy layers */}
            <ellipse cx="80" cy="270" rx="48" ry="44" fill="#2E7D32" opacity="0.7"/>
            <ellipse cx="185" cy="280" rx="42" ry="40" fill="#388E3C" opacity="0.65"/>
            <ellipse cx="130" cy="220" rx="68" ry="58" fill="#43A047" opacity="0.8"/>
            <ellipse cx="90" cy="240" rx="52" ry="46" fill="#4CAF50" opacity="0.7"/>
            <ellipse cx="170" cy="235" rx="50" ry="45" fill="#66BB6A" opacity="0.7"/>
            <ellipse cx="130" cy="175" rx="55" ry="48" fill="#388E3C" opacity="0.85"/>
            <ellipse cx="105" cy="200" rx="42" ry="38" fill="#4CAF50" opacity="0.75"/>
            <ellipse cx="160" cy="195" rx="40" ry="36" fill="#2E7D32" opacity="0.8"/>
            <ellipse cx="130" cy="140" rx="42" ry="36" fill="#43A047" opacity="0.9"/>
            {/* Highlight dots */}
            <circle cx="100" cy="210" r="3" fill="#A5D6A7" opacity="0.8"/>
            <circle cx="155" cy="185" r="2.5" fill="#C8E6C9" opacity="0.7"/>
            <circle cx="125" cy="155" r="2" fill="#A5D6A7" opacity="0.8"/>
          </svg>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
