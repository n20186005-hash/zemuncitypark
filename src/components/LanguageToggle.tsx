'use client';
import { visitorLabels } from '@/lib/visitor-details';


import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { getTopicBySlug, topicPath } from '@/lib/topics';

const labels: Record<string, string> = {
  sr: 'Српски',
  zh: '中文',
  en: 'English',
};

export default function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const hasPrefix = routing.locales.includes(segments[0] as Locale);
  const currentLocale = hasPrefix ? segments.shift() as Locale : routing.defaultLocale;
  const topic = segments.length === 1 ? getTopicBySlug(currentLocale, segments[0]) : undefined;
  const alternatePath = (next: Locale) =>
    topic?.slugs[next] ? topicPath(next, topic.key) : `/${[next, ...segments].join('/')}`;

  return (
    <details className="group relative">
      <summary
        className="flex cursor-pointer list-none items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors [&::-webkit-details-marker]:hidden"
        style={{
          background: 'var(--tag-bg)',
          color: 'var(--tag-text)',
        }}
        aria-label={visitorLabels[locale as Locale].switchLanguage}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        {labels[locale]}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-open:rotate-180">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </summary>

      <div
        className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg overflow-hidden z-50"
        style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
      >
        {routing.locales.map((loc) => (
          <a
            key={loc}
            href={alternatePath(loc)}
            hrefLang={loc}
            lang={loc}
            aria-current={loc === locale ? 'page' : undefined}
            className="block w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[var(--bg-tertiary)]"
            style={{
              color: loc === locale ? 'var(--accent)' : 'var(--text-primary)',
              fontWeight: loc === locale ? 600 : 400,
            }}
          >
            {labels[loc]}
          </a>
        ))}
      </div>
    </details>
  );
}
