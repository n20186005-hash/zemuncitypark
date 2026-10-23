import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://www.zemuncitypark.com';
  const srUrl = `${baseUrl}/cookie-settings`;
  const zhUrl = `${baseUrl}/zh/cookie-settings`;
  const enUrl = `${baseUrl}/en/cookie-settings`;
  const selfUrl = locale === 'sr' ? srUrl : locale === 'zh' ? zhUrl : enUrl;

  return {
    alternates: {
      canonical: selfUrl,
      languages: {
        'sr': srUrl,
        'zh': zhUrl,
        'en': enUrl,
        'x-default': srUrl,
      },
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
