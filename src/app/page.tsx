import { redirect } from 'next/navigation';

// All locales are prefixed in the static export (/sr, /zh, /en).
// The root path redirects to the default locale (Serbian).
export default function RootPage() {
  redirect('/sr');
}
