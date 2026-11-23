import type { Locale } from '@/i18n/routing';
import { NEARBY_PLACES } from '@/lib/nearby';
import { topicPath } from '@/lib/topics';
import { visitorLabels } from '@/lib/visitor-details';
import { placePhotos } from '@/lib/place-photos';

export default function NearbyLinks({ locale }: { locale: Locale }) {
  const labels = visitorLabels[locale];

  return (
    <section id="nearby" className="section-padding scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-2">{labels.nearby}</h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{labels.intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {NEARBY_PLACES.map((place) => (
            <a key={place.slug} href={topicPath(locale, `place:${place.slug}`)}
              className="rounded-xl overflow-hidden transition-shadow hover:shadow-md block"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
              {placePhotos[place.slug] && (
                <img src={placePhotos[place.slug].src} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />
              )}
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold mb-2">{place.names[locale]}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{place.address}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
