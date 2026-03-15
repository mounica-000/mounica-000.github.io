import { personalInfo } from '../data/content';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <h2 className="section-heading contact-heading">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm always open to new opportunities and conversations. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`} className="contact-item">
              <FiMail size={22}/>
              <span>Email</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
              <FiLinkedin size={22}/>
              <span>LinkedIn</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-item">
              <FiGithub size={22}/>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2026 Mounica Paladugu. All rights reserved.</p>
      </footer>
    </section>
  );
}
