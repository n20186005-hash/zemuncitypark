import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing, type Locale } from '@/i18n/routing';
import {
  TOPICS,
  TOPIC_LOCALES,
  getTopicBySlug,
  topicPath,
  SITE_URL,
  type TopicKey,
  type TopicLocale,
} from '@/lib/topics';
import TopicPage from '@/components/TopicPage';

export function generateStaticParams() {
  return TOPICS.flatMap((topic) =>
    TOPIC_LOCALES.filter((locale) => topic.slugs[locale]).map((locale) => ({
      locale,
      topic: topic.slugs[locale as TopicLocale] as string,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic: slug } = await params;
  const topic = getTopicBySlug(locale as Locale, slug);
  if (!topic) return {};

  const t = await getTranslations({ locale, namespace: `topics.${topic.key}` });
  const selfUrl = `${SITE_URL}${topicPath(locale as Locale, topic.key)}`;

  const languages: Record<string, string> = {};
  for (const topicLocale of TOPIC_LOCALES) {
    const altSlug = topic.slugs[topicLocale];
    if (altSlug) {
      languages[topicLocale] = `${SITE_URL}${topicPath(topicLocale, topic.key)}`;
    }
  }

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: selfUrl,
      languages,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: selfUrl,
      siteName: 'Zemun City Park — Independent Guide',
      type: 'article',
      images: [{ url: `${SITE_URL}/gallery/images%20(1).jpg`, width: 1200, height: 630, alt: t('h1') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${SITE_URL}/gallery/images%20(1).jpg`],
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic: slug } = await params;
  const topic = getTopicBySlug(locale as (typeof routing.locales)[number], slug);

  if (!topic) {
    notFound();
  }

  setRequestLocale(locale);

  return <TopicPage locale={locale as (typeof routing.locales)[number]} topicKey={topic.key as TopicKey} />;
}
