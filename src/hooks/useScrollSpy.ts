import { useState, useEffect } from 'react';

export function useScrollSpy(
  sectionIds: string[],
  enabled: boolean,
  headerHeight = 80,
): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    if (!enabled) return;

    // A section is "active" when its top edge is within this many px from the
    // viewport top.  The extra 40 px buffer absorbs sub-pixel rounding and the
    // gap between the last smooth-scroll event and the final resting position.
    const threshold = headerHeight + 40;

    const detect = () => {
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', detect, { passive: true });
    detect();
    return () => window.removeEventListener('scroll', detect);
  }, [sectionIds, enabled, headerHeight]);

  return activeSection;
}
