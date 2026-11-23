import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import { TOPICS, topicPath, type TopicKey } from '@/lib/topics';
import { visitorLabels } from '@/lib/visitor-details';

const officialLinks = {
  council: 'https://www.serbia.travel/',
  tourism: 'https://www.tob.rs/',
  serbiaGov: 'https://www.srbija.gov.rs/',
  vojvodina: 'https://vojvodina.travel/',
  belgradeCity: 'https://www.beograd.rs/en/',
  heritage: 'https://www.nasledje.gov.rs/',
};

const guideGroups = [
  { label: 'planning', keys: ['guide', 'transport', 'gettingHere', 'parking', 'map', 'accessibility', 'faq'] },
  { label: 'places', keys: ['history', 'churches', 'sarcophagi', 'oldTown', 'gardos', 'near', 'market'] },
  { label: 'routes', keys: ['halfDay', 'oneDay', 'promenade', 'photo', 'dining', 'kidsDogs'] },
  { label: 'seasons', keys: ['seasons', 'spring', 'summer', 'autumn', 'winter'] },
] as const satisfies ReadonlyArray<{ label: string; keys: readonly TopicKey[] }>;

const legalLinks = {
  privacy: 'privacy-policy',
  terms: 'terms-of-service',
  cookies: 'cookie-settings',
};

const linkClass = 'inline-block py-1 leading-relaxed text-[var(--text-secondary)] underline-offset-4 hover:text-[var(--accent)] hover:underline';

export default function Footer() {
  const t = useTranslations('footer');
  const guide = useTranslations('topics');
  const locale = useLocale() as Locale;
  const prefix = `/${locale}`;
  const nearby = visitorLabels[locale].nearby;

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-tertiary)] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] sm:gap-10">
          <div>
            <a href={prefix} className="font-display text-xl font-semibold text-[var(--text-primary)] hover:underline">
              Zemun City Park
            </a>
            <ul className="mt-2 flex flex-wrap gap-x-5 text-sm">
              <li><a href={`${prefix}#guides`} className={linkClass}>{t('allGuides')}</a></li>
              <li><a href={`${prefix}#nearby`} className={linkClass}>{nearby}</a></li>
              <li><a href={`${prefix}/sources`} className={linkClass}>{t('sources')}</a></li>
            </ul>
          </div>

          <section aria-labelledby="footer-official-resources">
            <h2 id="footer-official-resources" className="mb-2 font-display text-base font-semibold text-[var(--text-primary)]">
              {t('officialResourcesTitle')}
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 text-sm sm:gap-x-6">
              {Object.entries(officialLinks).map(([key, href]) => (
                <li key={key}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {t(`officialLinks.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <details className="group my-6 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-medium text-[var(--text-primary)] sm:px-5 [&::-webkit-details-marker]:hidden">
            {t('guideIndex')}
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" className="shrink-0 transition-transform group-open:rotate-180">
              <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <div className="grid gap-5 border-t border-[var(--border-color)] px-4 py-5 text-sm sm:grid-cols-2 sm:px-5 lg:grid-cols-4">
            {guideGroups.map(({ label, keys }) => (
              <section key={label} aria-labelledby={`footer-guides-${label}`}>
                <h2 id={`footer-guides-${label}`} className="mb-1 font-semibold text-[var(--text-primary)]">{t(`guideGroups.${label}`)}</h2>
                <ul>
                  {keys.filter(key => TOPICS.some(topic => topic.key === key && topic.slugs[locale])).map(key => (
                    <li key={key}><a href={topicPath(locale, key)} className={linkClass}>{guide(`${key}.card`)}</a></li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </details>

        <div className="flex flex-col gap-4 border-t border-[var(--border-color)] pt-5 text-sm text-[var(--text-muted)] sm:flex-row sm:justify-between sm:gap-8">
          <div className="space-y-2">
            <p>{t('rights')}</p>
            <p className="max-w-2xl text-xs leading-relaxed">{t('disclaimer')}</p>
          </div>
          <nav aria-label={t('legal')} className="sm:shrink-0">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {Object.entries(legalLinks).map(([key, path]) => (
                <li key={key}><a href={`${prefix}/${path}`} className={linkClass}>{t(key)}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
