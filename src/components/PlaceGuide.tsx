import type { Locale } from '@/i18n/routing';
import { NEARBY_PLACES, placeMap, type NearbyPlace } from '@/lib/nearby';
import { placeGuides } from '@/lib/place-guides';
import { topicPath } from '@/lib/topics';
import { MapLink, VisitPanel } from './VisitDetails';

const copy = {
  en: {
    discover: 'History, architecture and what to look for', advice: 'Visit tips and photo spots',
    route: 'Suggested walking route', start: 'Start from Zemun City Park and use the destination map for your walk.',
    islandStart: 'Start on the Zemun quay. Check whether the crossing to Lido is open.',
    stop: 'At the site', next: 'Continue to', islandNext: 'Back on the mainland, continue to',
    faq: 'Frequently asked questions', entry: 'How should I plan access?', combine: 'What can I visit on the same walk?',
    source: 'The Belgrade heritage register records its protection decision in',
  },
  sr: {
    discover: 'Историја, архитектура и детаљи', advice: 'Савети за посету и фотографисање',
    route: 'Предложена пешачка рута', start: 'Крените од Градског парка у Земуну и користите мапу одредишта.',
    islandStart: 'Крените са Земунског кеја и проверите да ли је отворен прелаз до Лида.',
    stop: 'На одредишту', next: 'Наставите ка', islandNext: 'По повратку на копно наставите ка',
    faq: 'Честа питања', entry: 'Како да планирам приступ?', combine: 'Шта могу да обиђем у истој шетњи?',
    source: 'Београдски регистар наслеђа бележи одлуку о заштити из',
  },
  zh: {
    discover: '历史、建筑与观察重点', advice: '游览建议与拍照机位',
    route: '建议步行路线', start: '从泽蒙城市公园出发，按下方的目的地地图步行前往。',
    islandStart: '从泽蒙河岸出发，先查看通往丽都的季节性通道是否开放。',
    stop: '到达后', next: '接着前往', islandNext: '返回陆地后可前往',
    faq: '常见问答', entry: '出发前要确认哪些参观安排？', combine: '附近还有哪里适合一起游览？',
    source: '贝尔格莱德文化遗产名录记载，此处的保护决定发布于',
  },
};

export default function PlaceGuide({ locale, place, access }: { locale: Locale; place: NearbyPlace; access: string }) {
  const labels = copy[locale];
  const guide = placeGuides[place.slug];
  const next = NEARBY_PLACES.find((item) => item.slug === guide.nearby)!;
  const nextLink = <a className="underline underline-offset-4" href={topicPath(locale, `place:${next.slug}`)}>{next.names[locale]}</a>;
  const island = place.kind === 'island';

  return (
    <>
      <VisitPanel title={labels.discover} id="discover">
        <p>{guide.highlight[locale]}</p>
        {guide.designationYear && <p>{labels.source} {guide.designationYear}{locale === 'zh' ? ' 年。' : '.'}</p>}
      </VisitPanel>
      <VisitPanel title={labels.advice} id="photo-spots">
        <p>{guide.photography[locale]}</p>
      </VisitPanel>
      <VisitPanel title={labels.route} id="walking-route">
        <ol className="list-decimal space-y-2 pl-5">
          <li>{island ? labels.islandStart : labels.start}</li>
          <li>{labels.stop} · <MapLink href={placeMap(place)}>{place.names[locale]}</MapLink> · {place.address}</li>
          <li>{island ? labels.islandNext : labels.next} · {nextLink}</li>
        </ol>
      </VisitPanel>
      <VisitPanel title={labels.faq} id="faq">
        <details><summary className="cursor-pointer font-semibold">{labels.entry}</summary><p className="mt-2">{access}</p></details>
        <details><summary className="cursor-pointer font-semibold">{labels.combine}</summary><p className="mt-2">{nextLink} · {next.address}</p></details>
      </VisitPanel>
    </>
  );
}
