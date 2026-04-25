import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollTo';

interface FooterLink {
  title: string;
  href?: string;
  anchor?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

export function FooterSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const footerLinks: FooterSection[] = [
    {
      label: t('footer.sections.navigation'),
      links: [
        { title: t('nav.home'), anchor: 'home' },
        { title: t('nav.about'), anchor: 'about' },
        { title: t('nav.experience'), anchor: 'experience' },
        { title: t('nav.projects'), anchor: 'projects' },
        { title: t('nav.skills'), anchor: 'skills' },
        { title: t('nav.contact'), href: '/contact' },
      ],
    },
    {
      label: t('footer.sections.social'),
      links: [
        { title: 'GitHub', href: 'https://github.com/SergioR-02', icon: Github },
        { title: 'LinkedIn', href: 'https://www.linkedin.com/in/sergio-ruiz-75818a28b', icon: Linkedin },
        { title: 'Email', href: 'mailto:sergioruiz456@gmail.com', icon: Mail },
        { title: 'CV / Resume', href: 'https://drive.google.com/file/d/1d5ckFTCSephhdBYMrK_ECwPFp3SZPK2B/view?usp=sharing', icon: FileText },
      ],
    },
  ];

  function handleAnchorClick(anchor: string) {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(anchor), 300);
    } else {
      scrollToSection(anchor);
    }
  }

  function renderLink(link: FooterLink) {
    const linkClass =
      'hover:text-white inline-flex items-center gap-1.5 transition-all duration-300';

    if (link.anchor) {
      return (
        <button
          onClick={() => handleAnchorClick(link.anchor!)}
          className={`${linkClass} bg-transparent border-none cursor-pointer p-0`}
        >
          {link.icon && <link.icon className="size-4 shrink-0" />}
          {link.title}
        </button>
      );
    }

    if (link.href?.startsWith('/')) {
      return (
        <Link to={link.href} className={linkClass}>
          {link.icon && <link.icon className="size-4 shrink-0" />}
          {link.title}
        </Link>
      );
    }

    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {link.icon && <link.icon className="size-4 shrink-0" />}
        {link.title}
      </a>
    );
  }

  return (
    <footer className="relative w-full bg-gray-900 dark:bg-black text-white border-t border-gray-800 dark:border-gray-700">
      <div className="absolute top-0 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-px rounded-full bg-indigo-500/50 blur-sm" />

      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-12">

          <AnimatedContainer className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t('footer.brand')}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <p className="text-gray-500 text-xs pt-2">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </p>
          </AnimatedContainer>

          <div className="mt-6 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.15 + index * 0.1}>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
                  {section.label}
                </h4>
                <ul className="text-gray-400 space-y-2.5 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>{renderLink(link)}</li>
                  ))}
                </ul>
              </AnimatedContainer>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
