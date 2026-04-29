import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

export interface PillNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface PillNavProps {
  items: PillNavItem[];
  activeId: string;
  isScrolled: boolean;
  theme: string;
  toggleTheme: () => void;
  language: string;
  onLanguageToggle: () => void;
  onItemClick: (id: string) => void;
}

export function PillNav({
  items,
  activeId,
  isScrolled,
  theme,
  toggleTheme,
  language,
  onLanguageToggle,
  onItemClick,
}: PillNavProps) {
  const isDark = theme === 'dark';

  const ghostActive    = isDark ? 'text-white' : 'text-gray-900';
  const ghostInactive  = isDark ? 'text-white/55 hover:text-white/90' : 'text-gray-500 hover:text-gray-900';
  const ghostControl   = isDark ? 'text-white/55 hover:text-white hover:bg-white/[0.1]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-900/[0.06]';
  const ghostDivider   = isDark ? 'bg-white/25' : 'bg-gray-400/30';
  const ghostIndicator = isDark ? 'bg-white/[0.13]' : 'bg-gray-900/[0.07]';

  // Single persistent indicator that slides between buttons
  const navRef  = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const container = navRef.current;
    const btn       = btnRefs.current.get(activeId);
    if (!container || !btn) return;
    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();
    setIndicator({ left: bRect.left - cRect.left, width: bRect.width });
  }, [activeId, items]);

  return (
    <motion.div
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <nav
        className={[
          'pointer-events-auto flex items-center rounded-full border duration-500 ease-in-out',
          'transition-[background-color,backdrop-filter,border-color,box-shadow]',
          isScrolled
            ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-gray-200/60 dark:border-white/[0.08] shadow-2xl shadow-black/10 dark:shadow-black/50'
            : 'bg-transparent border-transparent shadow-none',
        ].join(' ')}
      >
        {/* Nav items */}
        <div ref={navRef} className="relative flex items-center gap-0.5 px-2 py-1.5">

          {/* One persistent pill that slides — no mount/unmount jank */}
          {indicator && (
            <motion.div
              className={`absolute inset-y-1.5 rounded-full pointer-events-none ${ghostIndicator}`}
              initial={false}
              animate={{ left: indicator.left, width: indicator.width }}
              transition={{ type: 'spring', stiffness: 480, damping: 38, mass: 0.7 }}
            />
          )}

          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  if (el) btnRefs.current.set(item.id, el);
                  else btnRefs.current.delete(item.id);
                }}
                onClick={() => onItemClick(item.id)}
                className={[
                  'relative flex items-center justify-center rounded-full select-none z-10',
                  'px-3.5 py-1.5 text-sm font-medium transition-colors duration-200',
                  isActive
                    ? isScrolled ? 'text-gray-900 dark:text-white' : ghostActive
                    : isScrolled
                      ? 'text-gray-400 dark:text-white/40 hover:text-gray-800 dark:hover:text-white/75'
                      : ghostInactive,
                ].join(' ')}
              >
                <span className="hidden md:inline whitespace-nowrap">{item.label}</span>
                <span className="md:hidden">{item.icon}</span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div
          className={[
            'w-px h-5 mx-0.5 rounded-full transition-colors duration-500',
            isScrolled ? 'bg-gray-200 dark:bg-white/[0.12]' : ghostDivider,
          ].join(' ')}
        />

        {/* Controls: language + theme */}
        <div className="flex items-center gap-0.5 pl-1 pr-2 py-1.5">
          <button
            onClick={onLanguageToggle}
            className={[
              'px-2.5 py-1.5 text-xs font-bold rounded-full transition-[color,background-color] duration-200 select-none',
              isScrolled
                ? 'text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.07]'
                : ghostControl,
            ].join(' ')}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          <button
            onClick={toggleTheme}
            className={[
              'p-1.5 rounded-full transition-[color,background-color] duration-200',
              isScrolled
                ? 'text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.07]'
                : ghostControl,
            ].join(' ')}
            aria-label="Toggle theme"
          >
            {isDark
              ? <Sun size={15} color="#fbbf24" />
              : <Moon size={15} color="#6366f1" />
            }
          </button>
        </div>
      </nav>
    </motion.div>
  );
}
