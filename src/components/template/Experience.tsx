import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReducedMotion } from 'motion/react';
import { useScrollAnimation } from '../../contexts/useScrollAnimation';
import CertificationsTitle from '../molecules/CertificationsTitle';
import CertificationCard from '../molecules/CertificationCard';

interface ExperienceItem {
  role: string;
  entity: string;
  period: string;
  location: string;
  points: string[];
}

// ─── Scroll-progress hook ─────────────────────────────────────────────────────
function useTimelineProgress(ref: React.RefObject<HTMLDivElement>) {
  const [progress, setProgress] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) { setProgress(1); return; }

    let raf = 0;
    const compute = () => {
      const el = ref.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      // Line fills as the 65% viewport mark travels through the timeline
      setProgress(Math.max(0, Math.min(1, (window.innerHeight * 0.65 - top) / height)));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { compute(); raf = 0; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    compute();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, [ref, shouldReduce]);

  return progress;
}

// ─── Meta block (date · role · entity · location) ────────────────────────────
const MetaBlock: React.FC<{ item: ExperienceItem; align: 'left' | 'right' }> = ({ item, align }) => (
  <div className={align === 'right' ? 'text-right' : 'text-left'}>
    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-2">
      {item.period}
    </p>
    {/* "negrilla cursiva en mayus" — extrabold italic uppercase */}
    <h3 className="text-xl md:text-2xl font-extrabold italic uppercase tracking-tight leading-tight text-gray-900 dark:text-white">
      {item.role}
    </h3>
    <p className="mt-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 not-italic">
      {item.entity}
    </p>
    {item.location && (
      <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">{item.location}</p>
    )}
  </div>
);

// ─── Description block (bullet points) ───────────────────────────────────────
const DescBlock: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <ul className="space-y-3.5">
    {item.points.map((point, i) => (
      <li key={i} className="flex items-start gap-3">
        <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
        <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{point}</span>
      </li>
    ))}
  </ul>
);

// ─── Main component ───────────────────────────────────────────────────────────
const Experience: React.FC = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  const timelineRef = useRef<HTMLDivElement>(null);
  const lineProgress = useTimelineProgress(timelineRef);

  return (
    <section
      id="experience"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-16 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section heading ── */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold uppercase tracking-[0.35em] text-gray-900 dark:text-gray-300 mb-3 mt-10">
            {t('nav.experience')}
          </h2>
        </div>

        {/* ── DESKTOP: alternating timeline ── */}
        <div ref={timelineRef} className="hidden md:block relative mb-28">

          {/* Track (faint gray) */}
          <div className="absolute left-1/2 -translate-x-px top-3 bottom-3 w-px bg-gray-100 dark:bg-gray-800" />

          {/* Animated fill (scroll-driven) */}
          <div
            className="absolute left-1/2 -translate-x-px top-3 w-px bg-gray-400 dark:bg-gray-500 origin-top"
            style={{ height: `calc((100% - 1.5rem) * ${lineProgress})`, transition: 'height 120ms linear' }}
          />

          <div className="space-y-16">
            {items.map((item, index) => {
              const metaLeft = index % 2 === 0;
              // Dot fires when the fill line reaches its vertical position
              const dotThreshold = (index + 0.5) / items.length;
              const lit = lineProgress >= dotThreshold;

              return (
                <div key={index} className="relative flex items-start gap-0">

                  {/* Left column */}
                  <div className="flex-1 min-w-0 pr-14">
                    {metaLeft
                      ? <MetaBlock item={item} align="right" />
                      : <DescBlock item={item} />}
                  </div>

                  {/* Center dot — sits on the line */}
                  <div
                    className={[
                      'absolute left-1/2 -translate-x-1/2 top-[3px] z-10',
                      'w-[11px] h-[11px] rounded-full border-2 transition-all duration-500',
                      lit
                        ? 'bg-gray-900 dark:bg-white border-gray-900 dark:border-white'
                        : 'bg-white dark:bg-gray-950 border-gray-300 dark:border-gray-600',
                    ].join(' ')}
                  />

                  {/* Right column */}
                  <div className="flex-1 min-w-0 pl-14">
                    {metaLeft
                      ? <DescBlock item={item} />
                      : <MetaBlock item={item} align="left" />}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE: single-column ── */}
        <div className="md:hidden relative pl-7 mb-24">
          {/* Track */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />

          {items.map((item, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Dot */}
              <div className="absolute -left-[29px] top-[3px] w-[11px] h-[11px] rounded-full bg-gray-900 dark:bg-white border-2 border-gray-900 dark:border-white" />

              {/* Meta */}
              <div className="mb-3">
                <MetaBlock item={item} align="left" />
              </div>

              {/* Description */}
              <DescBlock item={item} />
            </div>
          ))}
        </div>

        {/* ── Certifications ── */}
        <div>
          <CertificationsTitle />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <CertificationCard
              title={t('experience.certifications.devcamp.title')}
              date={t('experience.certifications.devcamp.date')}
              description={t('experience.certifications.devcamp.description')}
              link="https://certificados.talentotech.co/?cc=1015992343&cert=2584663820#pdf"
            />
            <CertificationCard
              title={t('experience.certifications.oracle.title')}
              date={t('experience.certifications.oracle.date')}
              description={t('experience.certifications.oracle.description')}
              link="https://app.aluracursos.com/program/certificate/900e9ca1-8847-48d1-85f4-76b5cf2fec05?lang"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
