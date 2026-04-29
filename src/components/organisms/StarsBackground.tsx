import React, { useMemo, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

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
}

const StarLayer: React.FC<StarLayerProps> = ({ count, size, duration, starColor }) => {
  const boxShadow = useMemo(() => generateStars(count), [count]);
  const style = { width: `${size}px`, height: `${size}px`, color: starColor, boxShadow };

  return (
    <motion.div
      animate={{ y: [0, -STAR_FIELD_HEIGHT] }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
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

  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const springX = useSpring(offsetX, { stiffness: 50, damping: 20 });
  const springY = useSpring(offsetY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    let rafId = 0;
    let pendingX = 0;
    let pendingY = 0;

    const onMouseMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        offsetX.set(-(pendingX - window.innerWidth / 2) * 0.025);
        offsetY.set(-(pendingY - window.innerHeight / 2) * 0.025);
        rafId = 0;
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [offsetX, offsetY]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ background: isDark ? DARK_BG : LIGHT_BG }} />
      <motion.div style={{ x: springX, y: springY, willChange: 'transform' }}>
        <StarLayer count={400} size={1 * starSizeMultiplier} duration={60} starColor={starColor} />
        <StarLayer count={200} size={2 * starSizeMultiplier} duration={120} starColor={starColor} />
        <StarLayer count={100} size={3 * starSizeMultiplier} duration={180} starColor={starColor} />
        <StarLayer count={40} size={4 * starSizeMultiplier} duration={240} starColor={starColor} />
      </motion.div>
    </div>
  );
};

export default StarsBackground;
