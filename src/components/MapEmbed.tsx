'use client';

import { useTranslations } from 'next-intl';

const MAPS_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5031.903251687941!2d20.4086481!3d44.8406259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65a433646bc9%3A0xa10db34886fbf646!2z5rO96JKZ5YWs5Zut!5e1!3m2!1szh-CN!2s!4v1787888645098!5m2!1szh-CN!2s';
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/2T9CAbDFmTXmmBAA8';
const GOVT_TOURISM_URL = 'https://www.tob.rs/';

export default function MapEmbed() {
  const t = useTranslations('mapSection');
  const tFooter = useTranslations('footer');
  const tRec = useTranslations('recommendations');

  return (
    <section id="map" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div
          className="map-container relative rounded-xl overflow-hidden"
          style={{ border: '1px solid var(--map-border)' }}
        >
          <iframe
            src={MAPS_EMBED_SRC}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Google Maps - Zemun City Park (Gradski park u Zemunu)"
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href={MAPS_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('openMaps')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <div
          className="mt-10 p-5 sm:p-6 rounded-xl text-center"
          style={{ background: 'var(--bg-tertiary)', border: '1px dashed var(--border-color)' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {tFooter('officialResourcesTitle')}:{' '}
            <a
              href={GOVT_TOURISM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              {tFooter('officialLinks.tourism')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
