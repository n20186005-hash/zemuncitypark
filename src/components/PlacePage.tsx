import { placePlanning, planningLabels, splitPlaceIntro } from '@/lib/place-planning';
import { placeGuides } from '@/lib/place-guides';
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
  const headings = planningLabels[locale];
  const plan = placePlanning(place, locale);
  const guide = placeGuides[place.slug];
  const { intro, detail } = splitPlaceIntro(place.descriptions[locale], locale);
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
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="relative isolate flex min-h-[32rem] items-end overflow-hidden bg-[#20372a] pb-12 pt-40 text-white sm:pb-16 lg:min-h-[36rem]">
        {photo && <img src={photo.src} alt={name} className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />}
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/95 via-black/60 to-black/15" />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <nav aria-label={labels.nearby} className="mb-5 text-sm text-white/90">
            <a href={nearby} className="underline underline-offset-4">{labels.nearby}</a>
            <span className="mx-2">›</span><span>{name}</span>
          </nav>
          <h1 className="mb-4 max-w-4xl font-display text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">{name}</h1>
          <p className="mb-3 text-lg text-white/95">{plan.type} · {headings.area}</p>
          <p className="mb-2 text-sm text-white/95">{place.address}</p>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/95">{access}</p>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            <a href="#visitor-reviews" className="rounded-full bg-white/20 px-4 py-2 hover:bg-white/30">{headings.rating}</a>
            <a href={placeMap(place)} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/20 px-4 py-2 hover:bg-white/30">{labels.map}</a>
          </div>
        </div>
      </header>
      <div className="section-padding" style={{ paddingTop: '1.25rem' }}>
        <div className="mx-auto max-w-3xl">
          {photo && (
            <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
              <MapLink href={photo.source}>{photo.credit}</MapLink>
              {' · '}<MapLink href={photo.license}>{labels.photoLicense}</MapLink>
              {' · '}{labels.photoEdit}
            </p>
          )}
        <VisitPanel title={headings.intro} id="introduction"><p>{intro}</p></VisitPanel>
        <VisitPanel title={headings.tips} id="visit-tips"><p>{plan.tips}</p></VisitPanel>
        <VisitPanel title={headings.highlights} id="highlights"><p>{guide.highlight[locale]}</p></VisitPanel>
        <PlaceVisitDetails locale={locale} place={place}>
          <PlaceGuide locale={locale} place={place} access={access} detail={detail} />
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
      </div>
    </article>
  );
}
