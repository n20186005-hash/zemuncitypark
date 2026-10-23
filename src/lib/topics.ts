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

export const TOPIC_LOCALES = ['sr', 'en', 'zh'] as const;
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
  | 'photo'
  | 'market'
  | 'oneDay'
  | 'dining'
  | 'gettingHere'
  | 'accessibility'
  | 'faq'
  | 'seasons'
  | 'summer'
  | 'winter'
  | 'parking'
  | 'map'
  | 'kidsDogs'
  | 'spring'
  | 'autumn';

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
      zh: 'zemun-city-park-guide',
    },
  },
  {
    key: 'transport',
    slugs: {
      en: 'how-to-get-to-zemun-city-park',
      sr: 'kako-stici-do-gradskog-parka',
      zh: 'how-to-get-to-zemun-city-park',
    },
  },
  {
    key: 'history',
    slugs: {
      en: 'zemun-park-history-contumac',
      sr: 'istorija-gradskog-parka-kontumac',
      zh: 'zemun-park-history-contumac',
    },
  },
  {
    key: 'churches',
    slugs: {
      en: 'zemun-park-churches',
      sr: 'crkve-gradskog-parka-zemun',
      zh: 'zemun-park-churches',
    },
  },
  {
    key: 'sarcophagi',
    slugs: {
      en: 'roman-sarcophagi-zemun-park',
      sr: 'rimski-sarkofazi-i-spomenici',
      zh: 'roman-sarcophagi-zemun-park',
    },
  },
  {
    key: 'halfDay',
    slugs: {
      en: 'zemun-half-day-walking-route',
      sr: 'poludnevna-setnja-kroz-zemun',
      zh: 'zemun-half-day-walking-route',
    },
  },
  {
    key: 'oldTown',
    slugs: {
      en: 'zemun-old-town-guide',
      sr: 'stari-grad-zemun-vodic',
      zh: 'zemun-old-town-guide',
    },
  },
  {
    key: 'promenade',
    slugs: {
      en: 'zemun-park-to-danube-promenade',
      sr: 'od-gradskog-parka-do-zemunskog-keja',
      zh: 'zemun-park-to-danube-promenade',
    },
  },
  {
    key: 'gardos',
    slugs: {
      en: 'gardos-tower-zemun',
      sr: 'kula-gardos-zemun',
      zh: 'gardos-tower-zemun',
    },
  },
  {
    key: 'near',
    slugs: {
      en: 'near-zemun-city-park',
      sr: 'sta-posetiti-blizu-parka',
      zh: 'near-zemun-city-park',
    },
  },
  {
    key: 'photo',
    slugs: {
      en: 'zemun-park-photos-best-time',
      sr: 'fotografisanje-i-godisnja-doba',
      zh: 'zemun-park-photos-best-time',
    },
  },
  {
    key: 'market',
    slugs: {
      en: 'zemun-market-zemunska-pijaca',
      sr: 'zemunska-pijaca',
      zh: 'zemun-market-zemunska-pijaca',
    },
  },
  {
    key: 'oneDay',
    slugs: {
      en: 'zemun-one-day-itinerary',
      sr: 'zemun-u-jednom-danu',
      zh: 'zemun-one-day-itinerary',
    },
  },
  {
    key: 'dining',
    slugs: {
      en: 'where-to-eat-in-zemun',
      sr: 'gde-jesti-u-zemu',
      zh: 'where-to-eat-in-zemun',
    },
  },
  {
    key: 'gettingHere',
    slugs: {
      en: 'getting-to-zemun-from-airport-or-downtown',
      sr: 'kako-doci-u-zemun-sa-aerodroma-ili-iz-centra',
      zh: 'getting-to-zemun-from-airport-or-downtown',
    },
  },
  {
    key: 'accessibility',
    slugs: {
      en: 'zemun-city-park-accessibility',
      sr: 'pristupacnost-gradskog-parka-u-zemu',
      zh: 'zemun-city-park-accessibility',
    },
  },
  {
    key: 'faq',
    slugs: {
      en: 'zemun-travel-faq',
      sr: 'zemun-cesta-pitanja-za-posetioce',
      zh: 'zemun-travel-faq',
    },
  },
  {
    key: 'seasons',
    slugs: {
      en: 'zemun-in-autumn-and-spring',
      sr: 'zemun-u-jesen-i-prolece',
      zh: 'zemun-in-autumn-and-spring',
    },
  },
  {
    key: 'summer',
    slugs: {
      en: 'zemun-in-summer',
      sr: 'zemun-leto',
      zh: 'zemun-in-summer',
    },
  },
  {
    key: 'winter',
    slugs: {
      en: 'zemun-in-winter',
      sr: 'zemun-zima',
      zh: 'zemun-in-winter',
    },
  },
  {
    key: 'parking',
    slugs: {
      en: 'parking-near-zemun-city-park',
      sr: 'parking-kod-gradskog-parka',
      zh: 'parking-near-zemun-city-park',
    },
  },
  {
    key: 'map',
    slugs: {
      en: 'zemun-city-park-map',
      sr: 'mapa-gradskog-parka',
      zh: 'zemun-city-park-map',
    },
  },
  {
    key: 'kidsDogs',
    slugs: {
      en: 'zemun-with-kids-and-dogs',
      sr: 'zemun-sa-decom-i-psima',
      zh: 'zemun-with-kids-and-dogs',
    },
  },
  {
    key: 'spring',
    slugs: {
      en: 'zemun-in-spring',
      sr: 'zemun-prolece',
      zh: 'zemun-in-spring',
    },
  },
  {
    key: 'autumn',
    slugs: {
      en: 'zemun-in-autumn',
      sr: 'zemun-jesen',
      zh: 'zemun-in-autumn',
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
