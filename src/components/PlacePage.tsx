import type { Locale } from '@/i18n/routing';
import { heritageRegister, photoCollection, placeMap, tourismGuide, type NearbyPlace } from '@/lib/nearby';
import { homePath, SITE_URL } from '@/lib/topics';
import { placePhotos } from '@/lib/place-photos';
import { visitorLabels } from '@/lib/visitor-details';
import PlaceGuide from './PlaceGuide';
import { MapLink, placeAccess, PlaceVisitDetails, VisitPanel } from './VisitDetails';

const attractionSources: Record<string, string> = {
  'spirta-house': 'https://www.beograd.rs/lat/zivot-u-beogradu/beogradska-riznica/a112098/Zavicajni-muzej-Zemuna.html',
  'madlenianum-opera': 'https://operatheatremadlenianum.com/en/contacts',
  'great-war-island': 'https://www.zelenilo.rs/qr/en',
};

export default function PlacePage({ locale, place }: { locale: Locale; place: NearbyPlace }) {
  const labels = visitorLabels[locale];
  const name = place.names[locale];
  const access = placeAccess(place, locale);
  const photo = placePhotos[place.slug];
  const officialSource = attractionSources[place.slug];
  const nearby = `${homePath(locale)}#nearby`;
  const pageUrl = `${SITE_URL}/${locale}/${place.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': `${pageUrl}#place`,
    name,
    alternateName: place.names.sr,
    description: place.descriptions[locale],
    address: {
      '@type': 'PostalAddress',
      streetAddress: place.address,
      addressLocality: 'Zemun, Belgrade',
      addressCountry: 'RS',
    },
    url: pageUrl,
    hasMap: placeMap(place),
    image: photo && (photo.src.startsWith('/') ? `${SITE_URL}${photo.src}` : photo.src),
  };

  return (
    <article className="section-padding" style={{ paddingTop: '7rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-3xl mx-auto">
        <nav aria-label={labels.nearby} className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          <a href={nearby} className="hover:underline">{labels.nearby}</a>
          <span className="mx-2">›</span><span>{name}</span>
        </nav>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">{name}</h1>
        <p className="mb-5" style={{ color: 'var(--text-muted)' }}>{place.address} · Zemun</p>
        <p className="text-lg leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>{place.descriptions[locale]}</p>
        <p className="mb-3 text-sm" style={{ color: 'var(--text-muted)' }}>{access}</p>
        <p className="mb-6"><MapLink href={placeMap(place)}>{labels.map}</MapLink></p>
        {photo && (
          <figure className="mb-8">
            <img src={photo.src} alt={name} className="w-full max-h-[34rem] object-contain rounded-xl" />
            <figcaption className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <MapLink href={photo.source}>{photo.credit}</MapLink>
              {' · '}<MapLink href={photo.license}>{labels.photoLicense}</MapLink>
              {' · '}{labels.photoEdit}
            </figcaption>
          </figure>
        )}
        <PlaceVisitDetails locale={locale} place={place}>
          <PlaceGuide locale={locale} place={place} access={access} />
        </PlaceVisitDetails>
        <VisitPanel title={labels.sources} id="sources">
          <ul className="list-disc pl-5 space-y-2">
            <li><MapLink href={heritageRegister}>{labels.heritage}</MapLink></li>
            {officialSource && <li><MapLink href={officialSource}>{labels.officialSource}</MapLink></li>}
            <li><MapLink href={tourismGuide}>{labels.tourism}</MapLink></li>
            <li><MapLink href={photo?.source ?? photoCollection(place)}>{labels.photos}</MapLink></li>
          </ul>
        </VisitPanel>
        <a href={nearby} className="inline-block font-medium underline underline-offset-4" style={{ color: 'var(--accent)' }}>← {labels.return}</a>
      </div>
    </article>
  );
}
