import { boxOfficeSource, cemeterySource, placeLogistics, placePlanning, planningLabels } from '@/lib/place-planning';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { googleMaps, parkMaintenance, placeMap, type NearbyPlace } from '@/lib/nearby';
import { topicPath, type TopicKey } from '@/lib/topics';
import { visitorLabels } from '@/lib/visitor-details';

const parkMap = 'https://maps.app.goo.gl/2T9CAbDFmTXmmBAA8';
const transportPlanner = 'https://www.gsp.rs/';

const existingDestinations: Partial<Record<TopicKey, { name: string; address: string; operator?: string }>> = {
  gardos: { name: 'Kula Gardoš', address: 'Sinđelićeva, Zemun, Beograd' },
  promenade: { name: 'Zemunski kej', address: 'Kej oslobođenja, Zemun, Beograd', operator: 'JKP Zelenilo–Beograd' },
  market: { name: 'Zemunska pijaca', address: 'Masarikov trg 17, Zemun, Beograd', operator: 'JKP Beogradske pijace' },
  oldTown: { name: 'Staro jezgro Zemuna', address: 'Glavna, Zemun, Beograd' },
};

const linkStyle = { color: 'var(--accent)' };

export function VisitPanel({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="rounded-xl p-5 sm:p-7 mb-7 scroll-mt-24"
      style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
      <h2 className="font-display text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{children}</div>
    </section>
  );
}

export function MapLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4" style={linkStyle}>{children}</a>;
}

export async function ParkVisitDetails({ locale, topicKey }: { locale: Locale; topicKey: TopicKey }) {
  const labels = visitorLabels[locale];
  const info = await getTranslations({ locale, namespace: 'basicInfo' });
  const reviews = await getTranslations({ locale, namespace: 'reviews' });
  const destination = existingDestinations[topicKey];
  const map = destination ? googleMaps(`${destination.name}, ${destination.address}`) : parkMap;

  return (
    <div className="mb-12">
      <VisitPanel title={destination ? `${labels.information} · ${destination.name}` : labels.parkContext}>
        <p><strong>{labels.address}</strong> · {destination?.address ?? info('addressValue')}</p>
        {!destination && <p><strong>{labels.hours}</strong> · {labels.parkAccess}</p>}
        {!destination && <p><strong>{labels.tickets}</strong> · {labels.parkPrice}</p>}
        <h3 className="font-semibold">{labels.management}</h3>
        <p>{destination ? (destination.operator ?? labels.venue) : labels.parkManager}</p>
        {!destination && <p><MapLink href={parkMaintenance}>{labels.municipality}</MapLink></p>}
        <h3 className="font-semibold">{labels.transport}</h3>
        <p>{destination ? labels.localWalk : labels.parkWalk}</p>
        <p><a href={topicPath(locale, 'transport')} className="underline" style={linkStyle}>{labels.publicTransport}</a></p>
        <p><MapLink href={map}>{labels.map}</MapLink></p>
      </VisitPanel>
      <VisitPanel title={labels.reviews}>
        {!destination && <p><strong>{reviews('ratingLabel')}</strong> · {reviews('countLabel')}</p>}
        <p><MapLink href={map}>{labels.readReviews}</MapLink></p>
      </VisitPanel>
    </div>
  );
}

export function placeAccess(place: NearbyPlace, locale: Locale) {
  const labels = visitorLabels[locale];
  const hours = placePlanning(place, locale).hours;
  if (hours) return hours;
  const exterior = place.kind === 'exterior' || place.kind === 'school' || place.kind === 'pier';
  if (exterior) return labels.heritageAccess;
  if (place.kind === 'square') return labels.publicAccess;
  if (place.kind === 'island') return labels.seasonal;
  return labels.venue;
}

export function PlaceVisitDetails({ place, locale, children }: { place: NearbyPlace; locale: Locale; children: React.ReactNode }) {
  const labels = visitorLabels[locale];
  const map = placeMap(place);
  const plan = placePlanning(place, locale);
  const headings = planningLabels[locale];
  const logistics = placeLogistics(place, locale);
  const schedule = place.kind === 'cemetery' ? cemeterySource : place.kind === 'theatre' ? boxOfficeSource : undefined;
  const exterior = place.kind === 'exterior' || place.kind === 'school' || place.kind === 'pier';
  const manager = place.kind === 'exterior' ? labels.protected : labels[place.kind];
  const access = placeAccess(place, locale);
  const admission = plan.admission ?? (exterior ? labels.exteriorPrice : labels.venuePrice);
  const walk = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Gradski park u Zemunu, Beograd')}&destination=${encodeURIComponent(`${place.names.sr}, ${place.address}, Beograd`)}&travelmode=walking`;

  return (
    <>
      <VisitPanel title={labels.management} id="management"><p className="font-semibold">{place.names[locale]}</p><p>{manager}</p></VisitPanel>
      <VisitPanel title={labels.information} id="information">
        <dl className="grid sm:grid-cols-[10rem_1fr] gap-x-4 gap-y-2">
          <dt className="font-semibold">{headings.localName}</dt><dd>{place.names.sr}</dd>
          <dt className="font-semibold">{headings.type}</dt><dd>{plan.type}</dd>
          <dt className="font-semibold">{headings.district}</dt><dd>{headings.area}</dd>
          <dt className="font-semibold">{labels.address}</dt><dd>{place.address}</dd>
          <dt className="font-semibold">{labels.hours}</dt><dd>{access}</dd>
          <dt className="font-semibold">{labels.tickets}</dt><dd>{admission}</dd>
        </dl>
      </VisitPanel>
      <VisitPanel title={headings.hours} id="opening-hours"><p>{access}</p>
        {schedule && <p><MapLink href={schedule}>{headings.latest}</MapLink></p>}
      </VisitPanel>
      <VisitPanel title={headings.admission} id="admission"><p>{admission}</p></VisitPanel>
      <VisitPanel title={labels.transport} id="transport">
        <p>{place.kind === 'island' ? labels.islandWalk : logistics.approach}</p>
        {place.kind !== 'island' && <p><MapLink href={walk}>{labels.route}</MapLink></p>}
        <p><MapLink href={transportPlanner}>{labels.publicTransport}</MapLink></p>
        <p><MapLink href={map}>{labels.map}</MapLink></p>
      </VisitPanel>
      {children}
      <VisitPanel title={headings.lodging} id="accommodation"><p>{logistics.lodging}</p></VisitPanel>
      <VisitPanel title={labels.reviews} id="visitor-reviews"><p><MapLink href={map}>{labels.readReviews}</MapLink></p></VisitPanel>
      <VisitPanel title={headings.directions} id="directions">
        <p><strong>{labels.address}</strong> · {place.address} · {headings.area}</p>
        <p><MapLink href={map}>{labels.map}</MapLink></p>
        {place.kind !== 'island' && <p><MapLink href={walk}>{headings.planWalk}</MapLink></p>}
      </VisitPanel>
    </>
  );
}
