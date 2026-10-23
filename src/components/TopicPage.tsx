import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import {
  TOPICS,
  topicPath,
  homePath,
  absoluteUrl,
  type TopicKey,
} from '@/lib/topics';

type Section = { id: string; title: string; body: string };
type Faq = { q: string; a: string };
type Source = { name: string; url: string; note?: string };

export default async function TopicPage({
  locale,
  topicKey,
}: {
  locale: Locale;
  topicKey: TopicKey;
}) {
  const t = await getTranslations({ locale, namespace: `topics.${topicKey}` });
  const tUi = await getTranslations({ locale, namespace: 'topicUi' });

  const title = t('title');
  const h1 = t('h1');
  const lead = t('lead');
  const updated = t('updated');
  const sections = t.raw('sections') as Section[];
  const faq = t.raw('faq') as Faq[];
  const sources = t.raw('sources') as Source[];
  const relatedKeys = t.raw('related') as TopicKey[];

  const selfUrl = absoluteUrl(locale, topicPath(locale, topicKey));
  const homeUrl = absoluteUrl(locale, homePath(locale));

  const related = relatedKeys
    .map((key) => {
      const topic = TOPICS.find((item) => item.key === key);
      if (!topic) return null;
      return { key, href: topicPath(locale, key) };
    })
    .filter((x): x is { key: TopicKey; href: string } => x !== null);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: tUi('home'), item: homeUrl },
      { '@type': 'ListItem', position: 2, name: tUi('guides'), item: homeUrl },
      { '@type': 'ListItem', position: 3, name: title },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${selfUrl}#webpage`,
    url: selfUrl,
    name: title,
    description: t('description'),
    dateModified: '2026-10-23',
    about: { '@id': 'https://www.zemuncitypark.com/#attraction' },
    isPartOf: { '@id': 'https://www.zemuncitypark.com/#website' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <article className="section-padding" style={{ paddingTop: '7rem' }}>
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <a href={homePath(locale)} className="hover:underline" style={{ color: 'var(--accent)' }}>
              {tUi('home')}
            </a>
            <span className="mx-2">›</span>
            <a href={homePath(locale)} className="hover:underline" style={{ color: 'var(--accent)' }}>
              {tUi('guides')}
            </a>
            <span className="mx-2">›</span>
            <span>{title}</span>
          </nav>

          <h1
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            {h1}
          </h1>

          <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            {tUi('updated')}: {updated} · {tUi('independent')}
          </p>

          <p className="text-lg leading-relaxed mb-12" style={{ color: 'var(--text-secondary)' }}>
            {lead}
          </p>

          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-12">
              <h2
                className="font-display text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.title}
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
              <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
                {section.body}
              </p>
            </section>
          ))}

          {/* FAQ */}
          <section id="faq" className="mb-12">
            <h2
              className="font-display text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {tUi('faqTitle')}
            </h2>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <details
                  key={i}
                  className="rounded-xl p-4 sm:p-5"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <summary
                    className="cursor-pointer font-medium"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Sources */}
          <section id="sources" className="mb-12">
            <h2
              className="font-display text-2xl sm:text-3xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {tUi('sourcesTitle')}
            </h2>
            <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              {tUi('sourcesIntro')}
            </p>
            <ul className="space-y-3">
              {sources.map((source) => (
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
          </section>

          {/* Related guides */}
          <section id="related" className="mb-12">
            <h2
              className="font-display text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {tUi('relatedTitle')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="rounded-xl p-5 transition-shadow hover:shadow-md block"
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <RelatedCard locale={locale} topicKey={item.key} />
                </a>
              ))}
            </div>
          </section>

          <a
            href={homePath(locale)}
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            ← {tUi('backHome')}
          </a>
        </div>
      </article>
    </>
  );
}

async function RelatedCard({ locale, topicKey }: { locale: Locale; topicKey: TopicKey }) {
  const t = await getTranslations({ locale, namespace: `topics.${topicKey}` });
  return (
    <>
      <span className="block font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
        {t('card')}
      </span>
      <span className="block text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {t('cardDesc')}
      </span>
    </>
  );
}
