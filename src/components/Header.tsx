'use client';

import { useTranslations, useLocale } from 'next-intl';
import { visitorLabels } from '@/lib/visitor-details';
import type { Locale } from '@/i18n/routing';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

export default function Header({ secondary = false }: { secondary?: boolean }) {
  const t = useTranslations('header');
  const locale = useLocale();
  const homeHref = `/${locale}`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });

    return () => window.removeEventListener('scroll', handler);
  }, []);
  const solid = secondary || scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solid ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: solid ? '1px solid var(--border-color)' : 'none',
        backdropFilter: solid ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-[minmax(0,1fr)_auto] items-center md:h-16 md:grid-cols-[1fr_auto_1fr]">
        <a href={homeHref} className="min-w-0 truncate font-display text-lg font-semibold tracking-tight py-4" style={{ color: solid ? 'var(--text-primary)' : '#fff' }}>
          Zemun City Park
        </a>

        <nav aria-label={visitorLabels[locale as Locale].navigation} className="col-span-2 row-start-2 flex items-stretch justify-center gap-1 overflow-x-auto md:col-span-1 md:row-start-1 md:col-start-2 md:gap-3">
          {(['gallery', 'reviews', 'map', 'nearby'] as const).map((section) => (
            <a
              key={section}
              href={`${homeHref}/#${section}`}
              className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-md px-2 text-xs font-medium transition-colors hover:bg-white/15 md:px-3 md:text-sm"
              style={{ color: solid ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
            >
              {section === 'nearby' ? visitorLabels[locale as Locale].nearby : t(section)}
            </a>
          ))}
        </nav>

        <div className="col-start-2 row-start-1 flex items-center justify-end gap-2 md:col-start-3">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
