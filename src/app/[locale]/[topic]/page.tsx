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
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlacePage from '@/components/PlacePage';
import { placePhotos } from '@/lib/place-photos';
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

  const t = topic.place ? null : await getTranslations({ locale, namespace: `topics.${topic.key}` });
  const title = topic.place?.names[locale as Locale] ?? t!('title');
  const description = topic.place?.descriptions[locale as Locale] ?? t!('description');
  const photo = topic.place && placePhotos[topic.place.slug];
  const photoUrl = photo?.src.startsWith('/') ? `${SITE_URL}${photo.src}` : photo?.src;
  const image = topic.place ? photoUrl : `${SITE_URL}/gallery/images%20(1).jpg`;
  const selfUrl = `${SITE_URL}${topicPath(locale as Locale, topic.key)}`;

  const languages: Record<string, string> = {};
  for (const topicLocale of TOPIC_LOCALES) {
    const altSlug = topic.slugs[topicLocale];
    if (altSlug) {
      languages[topicLocale] = `${SITE_URL}${topicPath(topicLocale, topic.key)}`;
    }
  }

  return {
    title,
    description,
    alternates: {
      canonical: selfUrl,
      languages,
    },
    openGraph: {
      title,
      description,
      url: selfUrl,
      siteName: 'Zemun City Park — Independent Guide',
      type: 'article',
      images: image
        ? [topic.place ? { url: image, alt: title } : { url: image, width: 1200, height: 630, alt: t!('h1') }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
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

  return (
    <>
      <Header secondary />
      <main>
        {topic.place
          ? <PlacePage locale={locale as Locale} place={topic.place} />
          : <TopicPage locale={locale as Locale} topicKey={topic.key as TopicKey} />}
      </main>
      <Footer />
    </>
  );
}
