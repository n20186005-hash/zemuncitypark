import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SourcesSection from '@/components/SourcesSection';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/topics';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'sources' });

  return {
    title: t('title'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/sources`,
      languages: Object.fromEntries(routing.locales.map(language => [language, `${SITE_URL}/${language}/sources`])),
    },
  };
}

export default async function SourcesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header secondary />
      <main className="pt-28 sm:pt-20">
        <SourcesSection />
      </main>
      <Footer />
    </>
  );
}
