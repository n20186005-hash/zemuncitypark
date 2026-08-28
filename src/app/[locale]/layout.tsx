import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const SEO_CONFIG = {
  domain: 'zemuncitypark.com',
  baseUrl: 'https://zemuncitypark.com',
  attractionFullNameSr: 'Градски парк у Земуну',
  attractionFullNameEn: 'Zemun City Park',
  attractionFullNameZh: '泽蒙城市公园',
  attractionShortNameSr: 'Градски парк Земуна',
  attractionShortNameEn: 'Zemun City Park',
  attractionShortNameZh: '泽蒙公园',
  citySr: 'Београд',
  cityEn: 'Belgrade',
  cityZh: '贝尔格莱德',
  stateProvinceSr: 'Београд',
  stateProvinceEn: 'Belgrade',
  stateProvinceZh: '贝尔格莱德',
  countrySr: 'Србија',
  countryEn: 'Serbia',
  countryZh: '塞尔维亚',
  countryCode2: 'RS',
  postalCode: '11080',
  latitude: 44.8406259,
  longitude: 20.4086481,
  mapsShareUrl: 'https://maps.app.goo.gl/2T9CAbDFmTXmmBAA8',
  mapsEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5031.903251687941!2d20.4086481!3d44.8406259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65a433646bc9%3A0xa10db34886fbf646!2z5rO96JKZ5YWs5Zut!5e1!3m2!1szh-CN!2s!4v1787888645098!5m2!1szh-CN!2s',
  nearbyLandmark1Sr: 'Гардош кула',
  nearbyLandmark1En: 'Gardoš Tower',
  nearbyLandmark1Zh: '嘎多什塔',
  nearbyLandmark2Sr: 'Земунски кеј',
  nearbyLandmark2En: 'Zemunski Kej (Danube Waterfront)',
  nearbyLandmark2Zh: '泽蒙多瑙河畔',
  govtTourismUrl: 'https://www.tob.rs/',
  heroImage: '/gallery/images (1).jpg',
};

type LocaleStrings = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogLocale: string;
  htmlLang: string;
  faq: {
    q1: string;
    a1: string;
    q2: string;
    a2: string;
  };
  attractionFullName: string;
  attractionShortName: string;
  city: string;
  stateProvince: string;
  country: string;
  nearby1: string;
  nearby2: string;
};

const LOCALE_DATA: Record<string, LocaleStrings> = {
  sr: {
    title: 'Градски парк у Земуну (Београд) - Водич за посете и локација',
    description: 'Откријте Градски парк у Земуну, значајно земље у Земуну, Београд, Србија. Погледајте мапу локације, радни време, оближње Гардош кулу и Земунски кеј, и савете за путовање.',
    ogTitle: 'Градски парк у Земуну - Водич за путовање Београд',
    ogDescription: 'Званични водич за посету Градског парка у Земуну у Београд, Србија.',
    ogLocale: 'sr_RS',
    htmlLang: 'sr',
    faq: {
      q1: 'Где се налази Градски парк у Земуну?',
      a1: 'Градски парк у Земуну се налази у Земуну, Београд, Србија.',
      q2: 'Да ли је Градски парк Земуна бесплатан за посету?',
      a2: 'Да, Градски парк у Земуну је јавни простор и бесплатан је за посету целе године.',
    },
    attractionFullName: SEO_CONFIG.attractionFullNameSr,
    attractionShortName: SEO_CONFIG.attractionShortNameSr,
    city: SEO_CONFIG.citySr,
    stateProvince: SEO_CONFIG.stateProvinceSr,
    country: SEO_CONFIG.countrySr,
    nearby1: SEO_CONFIG.nearbyLandmark1Sr,
    nearby2: SEO_CONFIG.nearbyLandmark2Sr,
  },
  zh: {
    title: '泽蒙城市公园 Zemun City Park (贝尔格莱德) - 游客指南与地理位置',
    description: '探索塞尔维亚贝尔格莱德泽蒙城市公园，贝尔格莱德标志性地标。查看位置地图、开放详情、周边嘎多什塔和多瑙河畔，以及旅行建议。',
    ogTitle: '泽蒙城市公园 - 贝尔格莱德旅行指南',
    ogDescription: '泽蒙城市公园官方游客指南，位于塞尔维亚贝尔格莱德泽蒙区。',
    ogLocale: 'zh_CN',
    htmlLang: 'zh-CN',
    faq: {
      q1: '泽蒙城市公园位于哪里？',
      a1: '泽蒙城市公园位于塞尔维亚贝尔格莱德泽蒙区。',
      q2: '泽蒙公园是否免费开放？',
      a2: '是的，泽蒙城市公园是公共空间，全年免费向公众开放。',
    },
    attractionFullName: SEO_CONFIG.attractionFullNameZh,
    attractionShortName: SEO_CONFIG.attractionShortNameZh,
    city: SEO_CONFIG.cityZh,
    stateProvince: SEO_CONFIG.stateProvinceZh,
    country: SEO_CONFIG.countryZh,
    nearby1: SEO_CONFIG.nearbyLandmark1Zh,
    nearby2: SEO_CONFIG.nearbyLandmark2Zh,
  },
  en: {
    title: 'Zemun City Park (Belgrade) - Visitor Guide & Location',
    description: 'Discover Zemun City Park, the iconic landmark in Belgrade, Serbia. View location map, opening details, nearby Gardoš Tower and Zemunski Kej, and travel tips.',
    ogTitle: 'Zemun City Park - Belgrade Travel Guide',
    ogDescription: 'Official visitor guide to Zemun City Park in Zemun, Belgrade, Serbia.',
    ogLocale: 'en_US',
    htmlLang: 'en',
    faq: {
      q1: 'Where is Zemun City Park located?',
      a1: 'Zemun City Park is located in Zemun, Belgrade, Serbia.',
      q2: 'Is Zemun City Park free to visit?',
      a2: 'Yes, Zemun City Park is a public space and is free to visit year-round.',
    },
    attractionFullName: SEO_CONFIG.attractionFullNameEn,
    attractionShortName: SEO_CONFIG.attractionShortNameEn,
    city: SEO_CONFIG.cityEn,
    stateProvince: SEO_CONFIG.stateProvinceEn,
    country: SEO_CONFIG.countryEn,
    nearby1: SEO_CONFIG.nearbyLandmark1En,
    nearby2: SEO_CONFIG.nearbyLandmark2En,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = LOCALE_DATA[locale] || LOCALE_DATA['sr'];
  const baseUrl = SEO_CONFIG.baseUrl;

  const srUrl = `${baseUrl}/`;
  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;

  let selfUrl: string;
  if (locale === 'sr') selfUrl = srUrl;
  else if (locale === 'zh') selfUrl = zhUrl;
  else selfUrl = enUrl;

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        'sr': srUrl,
        'zh': zhUrl,
        'en': enUrl,
        'x-default': srUrl,
      },
    },
    openGraph: {
      title: data.ogTitle,
      description: data.ogDescription,
      url: selfUrl,
      siteName: data.attractionFullName,
      locale: data.ogLocale,
      type: 'website',
      images: [
        {
          url: `${baseUrl}${SEO_CONFIG.heroImage}`,
          width: 1200,
          height: 630,
          alt: `${data.attractionFullName} in ${data.city}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.ogTitle,
      description: data.ogDescription,
      images: [`${baseUrl}${SEO_CONFIG.heroImage}`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const data = LOCALE_DATA[locale] || LOCALE_DATA['sr'];
  const baseUrl = SEO_CONFIG.baseUrl;

  const touristAttractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${baseUrl}/#attraction`,
    name: data.attractionFullName,
    alternateName: [
      data.attractionShortName,
      `${data.city} ${data.attractionFullName}`,
      SEO_CONFIG.attractionFullNameSr,
      SEO_CONFIG.attractionFullNameEn,
      SEO_CONFIG.attractionFullNameZh,
    ],
    description: data.description,
    url: baseUrl,
    image: [
      `${baseUrl}${SEO_CONFIG.heroImage}`,
    ],
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gradski park 9',
      addressLocality: data.city,
      addressRegion: data.stateProvince,
      postalCode: SEO_CONFIG.postalCode,
      addressCountry: SEO_CONFIG.countryCode2,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SEO_CONFIG.latitude,
      longitude: SEO_CONFIG.longitude,
    },
    hasMap: SEO_CONFIG.mapsShareUrl,
    telephone: '+381112113706',
    sameAs: [
      SEO_CONFIG.mapsShareUrl,
      SEO_CONFIG.govtTourismUrl,
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: data.faq.q1,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.faq.a1,
        },
      },
      {
        '@type': 'Question',
        name: data.faq.q2,
        acceptedAnswer: {
          '@type': 'Answer',
          text: data.faq.a2,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: data.attractionFullName,
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: data.city,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.stateProvince,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: data.country,
      },
    ],
  };

  return (
    <html lang={data.htmlLang} suppressHydrationWarning>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <link rel="canonical" href={`${baseUrl}${locale === 'sr' ? '/' : `/${locale}`}`} />
        <meta property="og:image" content={`${baseUrl}${SEO_CONFIG.heroImage}`} />
        <meta property="og:image:alt" content={`${data.attractionFullName} in ${data.city}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
