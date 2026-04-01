import { useEffect, useRef } from 'react';
import './Birds.css';

/**
 * Dynamically spawns birds from the left or right edge of the hero.
 * Each bird flies toward the centre, shrinks into the distance, and fades out.
 * Wings flutter via a CSS animation on the <polyline> inside each SVG.
 */
export default function Birds() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spawnBird = () => {
      const fromLeft = Math.random() < 0.5;

      // Random vertical position in the top 35% of the hero
      const topPct = 5 + Math.random() * 30;

      // Size between 12-22px — smaller = farther away feeling
      const size = 12 + Math.random() * 10;

      // Flight duration 16-24s (slow, distant feel)
      const duration = 16 + Math.random() * 8;

      // Wing-flap speed 0.6-1.0s (gentle flutter)
      const flapSpeed = 0.6 + Math.random() * 0.4;

      const bird = document.createElement('div');
      bird.className = `bird-anim ${fromLeft ? 'from-left' : 'from-right'}`;
      bird.style.top = `${topPct}%`;
      bird.style.animationDuration = `${duration}s`;

      // Slight vertical wobble offset
      const wobbleOffset = -10 + Math.random() * 20;
      bird.style.setProperty('--bird-wobble', `${wobbleOffset}px`);

      bird.innerHTML = `
        <svg viewBox="0 0 24 12" width="${size}" height="${size / 2}" class="bird-svg">
          <polyline
            points="0,6 6,0 12,6 18,0 24,6"
            fill="none"
            stroke="#222"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="animation: wing-flap ${flapSpeed}s ease-in-out infinite"
          />
        </svg>
      `;

      container.appendChild(bird);

      // Remove after animation completes
      setTimeout(() => {
        bird.remove();
      }, duration * 1000 + 100);
    };

    // Spawn first batch with staggered delays
    const initialTimers = [];
    for (let i = 0; i < 3; i++) {
      initialTimers.push(setTimeout(spawnBird, i * 2000));
    }

    // Then keep spawning at random intervals (4-8s apart)
    let running = true;
    const scheduleNext = () => {
      if (!running) return;
      const delay = 4000 + Math.random() * 4000;
      const timer = setTimeout(() => {
        spawnBird();
        scheduleNext();
      }, delay);
      initialTimers.push(timer);
    };
    scheduleNext();

    return () => {
      running = false;
      initialTimers.forEach(clearTimeout);
      // clean up any remaining birds
      if (container) container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="birds-container" />;
}
