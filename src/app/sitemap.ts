import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { TOPICS, TOPIC_LOCALES, homePath, topicPath, SITE_URL } from '@/lib/topics';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-23T00:00:00Z');

  // Homepages: sr (root), /zh, /en
  const homes = routing.locales.map((locale) => ({
    url: `${SITE_URL}${homePath(locale)}`,
    lastModified,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l === 'sr' ? 'sr' : l, `${SITE_URL}${homePath(l)}`])
      ),
    },
  }));

  // Topic guides exist only for the locales with translated content (sr, en).
  const topics = TOPICS.flatMap((topic) =>
    TOPIC_LOCALES.filter((locale) => topic.slugs[locale]).map((locale) => {
      const languages: Record<string, string> = {};
      for (const topicLocale of TOPIC_LOCALES) {
        const altSlug = topic.slugs[topicLocale];
        if (altSlug) {
          languages[topicLocale === 'sr' ? 'sr' : topicLocale] = `${SITE_URL}${topicPath(topicLocale, topic.key)}`;
        }
      }
      return {
        url: `${SITE_URL}${topicPath(locale, topic.key)}`,
        lastModified,
        alternates: { languages },
      };
    })
  );

  return [...homes, ...topics];
}
