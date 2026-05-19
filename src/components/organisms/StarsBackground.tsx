import React, { useEffect, useMemo, useRef } from 'react';
import { useReducedMotion } from 'motion/react';

const DARK_BG = 'linear-gradient(to bottom, #06060c 0%, #020204 55%, #000000 100%)';
const LIGHT_BG = 'linear-gradient(to bottom, #ffffff 0%, #fcfcfd 55%, #f4f7fb 100%)';
const STAR_FIELD_HEIGHT = 4000;
const STAR_FIELD_SPREAD = 8000;

function generateStars(count: number): string {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * STAR_FIELD_SPREAD) - STAR_FIELD_SPREAD / 2;
    const y = Math.floor(Math.random() * STAR_FIELD_SPREAD) - STAR_FIELD_SPREAD / 2;
    shadows.push(`${x}px ${y}px currentColor`);
  }
  return shadows.join(', ');
}

interface StarLayerProps {
  count: number;
  size: number;
  duration: number;
  starColor: string;
  animate: boolean;
}

const StarLayer: React.FC<StarLayerProps> = ({ count, size, duration, starColor, animate }) => {
  const boxShadow = useMemo(() => generateStars(count), [count]);
  const starStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    color: starColor,
    boxShadow,
  };

  const layerStyle: React.CSSProperties = {
    height: `${STAR_FIELD_HEIGHT}px`,
    animationDuration: `${duration}s`,
    ['--star-field-height' as unknown as keyof React.CSSProperties]: `${STAR_FIELD_HEIGHT}px`,
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full ${animate ? 'stars-scroll' : ''}`}
      style={layerStyle}
    >
      <div className="absolute bg-transparent rounded-full" style={starStyle} />
      <div
        className="absolute bg-transparent rounded-full"
        style={{ ...starStyle, top: `${STAR_FIELD_HEIGHT}px` }}
      />
    </div>
  );
};

interface StarsBackgroundProps {
  theme: string;
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const starColor = isDark ? 'rgba(255,255,255,0.75)' : 'rgba(99,102,241,0.4)';
  const starSizeMultiplier = isDark ? 1 : 1.5;
  const shouldReduceMotion = useReducedMotion();
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (typeof window === 'undefined') return;
    if (!window.matchMedia?.('(pointer: fine)').matches) return;

    const el = parallaxRef.current;
    if (!el) return;

    let rafId = 0;
    let pendingX = 0;
    let pendingY = 0;

    const apply = () => {
      el.style.transform = `translate3d(${pendingX}px, ${pendingY}px, 0)`;
      rafId = 0;
    };

    const onMouseMove = (e: MouseEvent) => {
      pendingX = -(e.clientX - window.innerWidth / 2) * 0.025;
      pendingY = -(e.clientY - window.innerHeight / 2) * 0.025;
      if (rafId) return;
      rafId = requestAnimationFrame(apply);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [shouldReduceMotion]);

  const animate = !shouldReduceMotion;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: isDark ? DARK_BG : LIGHT_BG }} />
      <div
        ref={parallaxRef}
        style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}
      >
        <StarLayer animate={animate} count={1100} size={1 * starSizeMultiplier} duration={60} starColor={starColor} />
        <StarLayer animate={animate} count={500} size={2 * starSizeMultiplier} duration={120} starColor={starColor} />
        <StarLayer animate={animate} count={220} size={3 * starSizeMultiplier} duration={180} starColor={starColor} />
        <StarLayer animate={animate} count={80} size={4 * starSizeMultiplier} duration={240} starColor={starColor} />
      </div>
    </div>
  );
};

export default StarsBackground;
