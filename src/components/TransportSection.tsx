'use client';

import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

export default function TransportSection() {
  const t = useTranslations('transport');

  const transportOptions = [
    {
      key: 'bus',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 6v6"/>
          <path d="M16 6v6"/>
          <path d="M2 12h20"/>
          <path d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>
          <circle cx="7" cy="19" r="2"/>
          <circle cx="17" cy="19" r="2"/>
        </svg>
      ),
    },
    {
      key: 'walk',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
          <path d="M7 21l3-7"/>
          <path d="M10 14l5-4"/>
          <path d="M15 10l2 7"/>
          <path d="M10 14l-2 4"/>
          <path d="M15 10l3-2"/>
        </svg>
      ),
    },
    {
      key: 'taxi',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
    },
    {
      key: 'airport',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-3 3-3-1-2 1 3 4 4 3 1-2-1-3 3-3 5 6l1.2-.7c.4-.2.7-.6.6-1.1z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transportOptions.map((option) => (
            <TransportCard
              key={option.key}
              icon={option.icon}
              title={t(option.key as any)}
              description={t(`${option.key}Desc` as any)}
            />
          ))}
        </div>

        {/* Travel Tips */}
        <div
          className="mt-8 rounded-xl p-6 flex items-start gap-4"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <div>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{t('tips')}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t('tipsDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TransportCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div
      className="rounded-xl p-5 flex gap-4"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: 'var(--accent)', color: 'white' }}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{description}</p>
      </div>
    </div>
  );
}
