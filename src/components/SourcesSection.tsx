import { getTranslations } from 'next-intl/server';

type Source = { name: string; url: string; note?: string };

/**
 * Homepage "sources & verification" block: states when facts were last
 * checked and lists the official sources used for this guide.
 */
export default async function SourcesSection() {
  const t = await getTranslations('sources');
  const items = t.raw('items') as Source[];

  return (
    <section id="sources" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          {t('intro')}
        </p>

        <ul className="space-y-3 mb-6">
          {items.map((source) => (
            <li key={source.url + source.name} className="text-sm leading-relaxed">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {source.name}
              </a>
              {source.note ? (
                <span style={{ color: 'var(--text-muted)' }}> — {source.note}</span>
              ) : null}
            </li>
          ))}
        </ul>

        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {t('outro')}
        </p>
      </div>
    </section>
  );
}
