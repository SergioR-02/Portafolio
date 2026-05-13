import React, { useMemo, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const DARK_BG = 'linear-gradient(to bottom, #06060c 0%, #020204 55%, #000000 100%)';
const LIGHT_BG = 'linear-gradient(to bottom, #ffffff 0%, #fcfcfd 55%, #f4f7fb 100%)';
const STAR_FIELD_HEIGHT = 4000;
const STAR_FIELD_SPREAD = 7000;

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
  const style = { width: `${size}px`, height: `${size}px`, color: starColor, boxShadow };

  return (
    <motion.div
      animate={animate ? { y: [0, -STAR_FIELD_HEIGHT] } : undefined}
      transition={animate ? { repeat: Infinity, duration, ease: 'linear' } : undefined}
      className="absolute top-0 left-0 w-full"
      style={{ height: `${STAR_FIELD_HEIGHT}px` }}
    >
      <div className="absolute bg-transparent rounded-full" style={style} />
      <div className="absolute bg-transparent rounded-full" style={{ ...style, top: `${STAR_FIELD_HEIGHT}px` }} />
    </motion.div>
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

  // Direct transform on mousemove (no spring) — keeps the heavy box-shadow
  // layer on a single composited transform without 60fps spring math.
  useEffect(() => {
    if (shouldReduceMotion) return;
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
      pendingX = -(e.clientX - window.innerWidth / 2) * 0.015;
      pendingY = -(e.clientY - window.innerHeight / 2) * 0.015;
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
      <div ref={parallaxRef} style={{ willChange: 'transform' }}>
        <StarLayer animate={animate} count={180} size={1 * starSizeMultiplier} duration={90} starColor={starColor} />
        <StarLayer animate={animate} count={80}  size={2 * starSizeMultiplier} duration={150} starColor={starColor} />
        <StarLayer animate={animate} count={40}  size={3 * starSizeMultiplier} duration={220} starColor={starColor} />
      </div>
    </div>
  );
};

export default StarsBackground;
