import { getLocale, getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { TOPICS, topicPath, type TopicKey } from '@/lib/topics';

/**
 * Homepage grid linking to every topic guide.
 * Rendered only for locales that actually have topic content (sr, en).
 */
export default async function TopicLinks() {
  const locale = (await getLocale()) as Locale;
  const tUi = await getTranslations('topicUi');

  const topics = TOPICS.filter((topic) => topic.slugs[locale as 'sr' | 'en']);
  if (topics.length === 0) return null;

  return (
    <section id="guides" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {tUi('guidesTitle')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
          {tUi('guidesIntro')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {topics.map((topic) => (
            <a
              key={topic.key}
              href={topicPath(locale, topic.key)}
              className="rounded-xl p-5 sm:p-6 transition-shadow hover:shadow-md block"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
              }}
            >
              <TopicCardBody locale={locale} topicKey={topic.key} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

async function TopicCardBody({ locale, topicKey }: { locale: string; topicKey: TopicKey }) {
  const t = await getTranslations({ locale, namespace: `topics.${topicKey}` });
  return (
    <>
      <span className="block font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
        {t('card')}
      </span>
      <span className="block text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {t('cardDesc')}
      </span>
    </>
  );
}
