import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['sr', 'zh', 'en'],
  defaultLocale: 'sr',
  localePrefix: {
    // Deployed URLs are prefixed for every locale (/sr, /zh, /en);
    // the root path redirects to the default locale via src/app/page.tsx.
    mode: 'always',
  },
  pathnames: {
    '/': '/',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
  },
});

export type Locale = (typeof routing.locales)[number];
