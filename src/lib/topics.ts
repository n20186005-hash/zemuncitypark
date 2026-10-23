import type { Locale } from '@/i18n/routing';

/**
 * Topic (long-tail guide) registry for zemuncitypark.com.
 *
 * Slugs are intentionally different per locale:
 *  - English slugs target the international visitor queries seen in Search Console.
 *  - Serbian slugs use the local name "Gradski park u Zemunu / Zemunski park".
 *
 * Content lives in src/messages/{locale}.json under the `topics` namespace.
 * Only locales that actually have translated content are generated.
 */

export const TOPIC_LOCALES = ['sr', 'en'] as const;
export type TopicLocale = (typeof TOPIC_LOCALES)[number];

export type TopicKey =
  | 'guide'
  | 'transport'
  | 'history'
  | 'churches'
  | 'sarcophagi'
  | 'halfDay'
  | 'oldTown'
  | 'promenade'
  | 'gardos'
  | 'near'
  | 'photo';

export type Topic = {
  key: TopicKey;
  slugs: Partial<Record<TopicLocale, string>>;
};

export const TOPICS: Topic[] = [
  {
    key: 'guide',
    slugs: {
      en: 'zemun-city-park-guide',
      sr: 'gradski-park-zemun-vodic',
    },
  },
  {
    key: 'transport',
    slugs: {
      en: 'how-to-get-to-zemun-city-park',
      sr: 'kako-stici-do-gradskog-parka',
    },
  },
  {
    key: 'history',
    slugs: {
      en: 'zemun-park-history-contumac',
      sr: 'istorija-gradskog-parka-kontumac',
    },
  },
  {
    key: 'churches',
    slugs: {
      en: 'zemun-park-churches',
      sr: 'crkve-gradskog-parka-zemun',
    },
  },
  {
    key: 'sarcophagi',
    slugs: {
      en: 'roman-sarcophagi-zemun-park',
      sr: 'rimski-sarkofazi-i-spomenici',
    },
  },
  {
    key: 'halfDay',
    slugs: {
      en: 'zemun-half-day-walking-route',
      sr: 'poludnevna-setnja-kroz-zemun',
    },
  },
  {
    key: 'oldTown',
    slugs: {
      en: 'zemun-old-town-guide',
      sr: 'stari-grad-zemun-vodic',
    },
  },
  {
    key: 'promenade',
    slugs: {
      en: 'zemun-park-to-danube-promenade',
      sr: 'od-gradskog-parka-do-zemunskog-keja',
    },
  },
  {
    key: 'gardos',
    slugs: {
      en: 'gardos-tower-zemun',
      sr: 'kula-gardos-zemun',
    },
  },
  {
    key: 'near',
    slugs: {
      en: 'near-zemun-city-park',
      sr: 'sta-posetiti-blizu-parka',
    },
  },
  {
    key: 'photo',
    slugs: {
      en: 'zemun-park-photos-best-time',
      sr: 'fotografisanje-i-godisnja-doba',
    },
  },
];

/**
 * Locale path helper. All locales are prefixed in the deployed static export
 * (/sr, /zh, /en); the root path redirects to the default locale (sr).
 */
export function localePath(locale: Locale, path: string): string {
  return `/${locale}${path === '/' ? '' : path}`;
}

/** Absolute or root-relative URL of a topic page for the given locale. */
export function topicPath(locale: Locale, key: TopicKey): string {
  const topic = TOPICS.find((t) => t.key === key);
  if (!topic) return '/';
  const slug = topic.slugs[locale as TopicLocale];
  if (!slug) return '/';
  return localePath(locale, `/${slug}`);
}

export function getTopicBySlug(locale: Locale, slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slugs[locale as TopicLocale] === slug);
}

/** Homepage URL for a locale (all locales are prefixed: /sr, /zh, /en). */
export function homePath(locale: Locale): string {
  return `/${locale}`;
}

export const SITE_URL = 'https://www.zemuncitypark.com';

export function absoluteUrl(locale: Locale, path: string): string {
  return `${SITE_URL}${localePath(locale, path)}`;
}
