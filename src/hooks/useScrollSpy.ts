import { useState, useEffect } from 'react';

export function useScrollSpy(
  sectionIds: string[],
  enabled: boolean,
  headerHeight = 80,
): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    if (!enabled) return;

    const threshold = headerHeight + 40;
    let rafId = 0;

    const detect = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActiveSection((prev) => (prev === current ? prev : current));
    };

    // Throttle to one read per animation frame — cheap, keeps the same
    // detection logic as before but eliminates per-pixel scroll thrashing.
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        detect();
        rafId = 0;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    detect();
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [sectionIds, enabled, headerHeight]);

  return activeSection;
}
