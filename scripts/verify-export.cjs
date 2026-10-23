/**
 * Verifies the static export in ./out after `next build`.
 * Checks TDK, canonical/hreflang (www domain), topic pages, sitemap/robots,
 * and that removed/unverified content is gone.
 * Run with: node scripts/verify-export.cjs
 */
const fs = require('fs');
const path = require('path');

const read = (f) => fs.readFileSync('out/' + f, 'utf8');

const checks = [
  {
    file: 'en.html',
    expect: [
      '<title>Zemun City Park (Zemunski Park) | Location, History &amp; Visitor Guide</title>',
      'rel="canonical" href="https://www.zemuncitypark.com/en"',
      'property="og:url" content="https://www.zemuncitypark.com/en"',
      'hrefLang="sr" href="https://www.zemuncitypark.com/sr',
      'x-default" href="https://www.zemuncitypark.com/sr',
      'Zemun City Park (Zemunski Park)',
      'free public park on the old Kontumac quarantine grounds',
      'More Zemun Guides',
      'Sources &amp; How This Guide Was Checked',
      '6,362',
      'RCR5+7F Belgrade, Serbia',
      'FAQPage',
      'BreadcrumbList',
      'TouristAttraction',
      'WebSite',
      'href="/en/zemun-market-zemunska-pijaca"',
      'href="/en/zemun-one-day-itinerary"',
      'href="/en/where-to-eat-in-zemun"',
      'href="/en/getting-to-zemun-from-airport-or-downtown"',
      'href="/en/zemun-city-park-accessibility"',
      'href="/en/zemun-travel-faq"',
      'href="/en/zemun-in-autumn-and-spring"',
      'href="/en/zemun-in-summer"',
      'href="/en/zemun-in-winter"',
      'href="/en/parking-near-zemun-city-park"',
      'href="/en/zemun-city-park-map"',
      'href="/en/zemun-with-kids-and-dogs"',
      'href="/en/zemun-in-spring"',
      'href="/en/zemun-in-autumn"',
    ],
    notExpect: ['Europe&#x27;s most famous', 'Ming Z.', 'Hua L.', 'Fang W.', 'Wei C.', '6,305', '08:00 - 18:00', '15, 84, 704, 706, or 707', 'telephone', 'https://zemuncitypark.com/en'],
  },
  {
    file: 'sr.html',
    expect: [
      'rel="canonical" href="https://www.zemuncitypark.com/sr"',
      'Градски парк у Земуну (Земунски парк) | Локација, историја и водич за посете',
      '6.362',
      'RCR5+7F Београд, Србија',
      'Још земунских водича',
    ],
    notExpect: ['6.305', 'Марко Д.', 'Јована Л.', 'најпознатије европске'],
  },
  {
    file: 'zh.html',
    expect: [
      'rel="canonical" href="https://www.zemuncitypark.com/zh"',
      '泽蒙城市公园（Zemunski Park）｜位置、历史与游览指南',
      '6,362',
      'RCR5+7F',
      '信息来源与核对方式',
    ],
    notExpect: ['6,305', ' Ming Z.', '欧洲最著名的边境防疫'],
  },
  {
    file: 'en/zemun-city-park-guide.html',
    expect: [
      'Zemun City Park: The Complete Guide',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-city-park-guide"',
      'FAQPage',
      'BreadcrumbList',
      'WebPage',
      'Related guides',
      'Sources &amp; verification',
      'How to get to the park',
      'isPartOf',
    ],
    notExpect: ['https://zemuncitypark.com/#attraction'],
  },
  {
    file: 'en/how-to-get-to-zemun-city-park.html',
    expect: [
      'How to Get to Zemun City Park',
      'GSP Beograd',
      'https://www.gsp.rs/',
      'Nikola Tesla Airport',
    ],
    notExpect: [],
  },
  {
    file: 'en/zemun-park-history-contumac.html',
    expect: ['The Kontumac and the Making of Zemun City Park', '1880', 'City of Belgrade'],
    notExpect: ['1730'],
  },
  {
    file: 'en/zemun-park-churches.html',
    expect: ['The Two Churches of Zemun City Park', '1786', '1836', 'could not verify'],
    notExpect: [],
  },
  {
    file: 'en/zemun-half-day-walking-route.html',
    expect: ['Zemun Half-Day Walking Route', 'Gardoš Tower', '3–4 hours'],
    notExpect: [],
  },
  {
    file: 'en/zemun-park-to-danube-promenade.html',
    expect: ['From the Park to the Danube Promenade', 'Zemunski kej', 'Great War Island'],
    notExpect: [],
  },
  {
    file: 'sr/gradski-park-zemun-vodic.html',
    expect: ['Градски парк у Земуну: комплетан водич', 'rel="canonical" href="https://www.zemuncitypark.com/sr/gradski-park-zemun-vodic"'],
    notExpect: [],
  },
  {
    file: 'en/gardos-tower-zemun.html',
    expect: [
      'Gardoš Tower: Zemun&#x27;s Lookout Above the Danube',
      'rel="canonical" href="https://www.zemuncitypark.com/en/gardos-tower-zemun"',
      'Millennium Monument',
      'FAQPage',
      'BreadcrumbList',
      'WebPage',
    ],
    notExpect: [],
  },
  {
    file: 'sr/kula-gardos-zemun.html',
    expect: ['Кула Гардош: земунски видиковац изнад Дунава', 'rel="canonical" href="https://www.zemuncitypark.com/sr/kula-gardos-zemun"'],
    notExpect: [],
  },
  {
    file: 'en/near-zemun-city-park.html',
    expect: ['What to Do Near Zemun City Park', 'Zemunska pijaca', 'FAQPage'],
    notExpect: [],
  },
  {
    file: 'sr/sta-posetiti-blizu-parka.html',
    expect: ['Шта посетити близу Градског парка у Земуну', 'rel="canonical" href="https://www.zemuncitypark.com/sr/sta-posetiti-blizu-parka"'],
    notExpect: [],
  },
  {
    file: 'en/zemun-park-photos-best-time.html',
    expect: ['Best Time &amp; Photos in Zemun City Park', 'Season by season', 'FAQPage'],
    notExpect: [],
  },
  {
    file: 'sr/fotografisanje-i-godisnja-doba.html',
    expect: ['Најбоље време и фотографије у Градском парку у Земуну', 'rel="canonical" href="https://www.zemuncitypark.com/sr/fotografisanje-i-godisnja-doba"'],
    notExpect: [],
  },
  {
    file: 'en/zemun-market-zemunska-pijaca.html',
    expect: [
      'Zemun Market: Fresh Food, Fish &amp; the Everyday Heart of Zemun',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-market-zemunska-pijaca"',
      'Zemunska pijaca',
      'FAQPage',
      'BreadcrumbList',
      'WebPage',
    ],
    notExpect: [],
  },
  {
    file: 'sr/zemunska-pijaca.html',
    expect: ['Земунска пијаца: свежа храна, риба и свакодневно срце Земуна', 'rel="canonical" href="https://www.zemuncitypark.com/sr/zemunska-pijaca"'],
    notExpect: [],
  },
  {
    file: 'en/zemun-one-day-itinerary.html',
    expect: [
      'Zemun in One Day: A Relaxed Walking Plan',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-one-day-itinerary"',
      'Gardoš Tower',
      'FAQPage',
    ],
    notExpect: [],
  },
  {
    file: 'sr/zemun-u-jednom-danu.html',
    expect: ['Земун у једном дану: опуштен план шетње', 'rel="canonical" href="https://www.zemuncitypark.com/sr/zemun-u-jednom-danu"'],
    notExpect: [],
  },
  {
    file: 'en/where-to-eat-in-zemun.html',
    expect: [
      'Where to Eat in Zemun (Without the Hype)',
      'rel="canonical" href="https://www.zemuncitypark.com/en/where-to-eat-in-zemun"',
      'Zemunski kej',
      'FAQPage',
    ],
    notExpect: [],
  },
  {
    file: 'sr/gde-jesti-u-zemu.html',
    expect: ['Где јести у Земуну: искрено и без рекламе', 'rel="canonical" href="https://www.zemuncitypark.com/sr/gde-jesti-u-zemu"'],
    notExpect: [],
  },
  {
    file: 'en/getting-to-zemun-from-airport-or-downtown.html',
    expect: [
      'Getting to Zemun from the Airport or Downtown',
      'rel="canonical" href="https://www.zemuncitypark.com/en/getting-to-zemun-from-airport-or-downtown"',
      'Nikola Tesla Airport',
      'FAQPage',
    ],
    notExpect: [],
  },
  {
    file: 'sr/kako-doci-u-zemun-sa-aerodroma-ili-iz-centra.html',
    expect: ['Како доћи у Земун са аеродрома или из центра', 'rel="canonical" href="https://www.zemuncitypark.com/sr/kako-doci-u-zemun-sa-aerodroma-ili-iz-centra"'],
    notExpect: [],
  },
  {
    file: 'en/zemun-city-park-accessibility.html',
    expect: [
      'Accessibility in Zemun City Park &amp; Nearby',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-city-park-accessibility"',
      'Gardoš',
      'FAQPage',
    ],
    notExpect: [],
  },
  {
    file: 'sr/pristupacnost-gradskog-parka-u-zemu.html',
    expect: ['Приступачност у Градском парку у Земуну и околини', 'rel="canonical" href="https://www.zemuncitypark.com/sr/pristupacnost-gradskog-parka-u-zemu"'],
    notExpect: [],
  },
  {
    file: 'en/zemun-travel-faq.html',
    expect: [
      'Zemun Travel FAQ',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-travel-faq"',
      'FAQPage',
    ],
    notExpect: [],
  },
  {
    file: 'sr/zemun-cesta-pitanja-za-posetioce.html',
    expect: ['Земун: честа питања за посетиоце', 'rel="canonical" href="https://www.zemuncitypark.com/sr/zemun-cesta-pitanja-za-posetioce"'],
    notExpect: [],
  },
  {
    file: 'en/zemun-in-autumn-and-spring.html',
    expect: [
      'Zemun in Autumn &amp; Spring',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-in-autumn-and-spring"',
      'shoulder seasons',
      'FAQPage',
    ],
    notExpect: [],
  },
  {
    file: 'sr/zemun-u-jesen-i-prolece.html',
    expect: ['Земун у јесен и пролеће', 'rel="canonical" href="https://www.zemuncitypark.com/sr/zemun-u-jesen-i-prolece"'],
    notExpect: [],
  },
  {
    file: 'en/zemun-in-summer.html',
    expect: [
      'Zemun in Summer',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-in-summer"',
      'FAQPage',
      'plane trees',
    ],
    notExpect: [],
  },
  {
    file: 'sr/zemun-leto.html',
    expect: [
      'Земун лети',
      'rel="canonical" href="https://www.zemuncitypark.com/sr/zemun-leto"',
    ],
    notExpect: [],
  },
  {
    file: 'en/zemun-in-winter.html',
    expect: [
      'Zemun in Winter',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-in-winter"',
      'FAQPage',
      'Julian calendar',
    ],
    notExpect: [],
  },
  {
    file: 'sr/zemun-zima.html',
    expect: [
      'Земун зими',
      'rel="canonical" href="https://www.zemuncitypark.com/sr/zemun-zima"',
    ],
    notExpect: [],
  },
  {
    file: 'en/parking-near-zemun-city-park.html',
    expect: [
      'Parking Near Zemun City Park',
      'rel="canonical" href="https://www.zemuncitypark.com/en/parking-near-zemun-city-park"',
      'FAQPage',
      'GSP Beograd',
    ],
    notExpect: [],
  },
  {
    file: 'sr/parking-kod-gradskog-parka.html',
    expect: [
      'Паркинг код Градског парка у Земуну',
      'rel="canonical" href="https://www.zemuncitypark.com/sr/parking-kod-gradskog-parka"',
    ],
    notExpect: [],
  },
  {
    file: 'en/zemun-city-park-map.html',
    expect: [
      'Zemun City Park: Map',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-city-park-map"',
      'FAQPage',
      'RCR5+7F',
    ],
    notExpect: [],
  },
  {
    file: 'sr/mapa-gradskog-parka.html',
    expect: [
      'Градски парк у Земуну: мапа',
      'rel="canonical" href="https://www.zemuncitypark.com/sr/mapa-gradskog-parka"',
    ],
    notExpect: [],
  },
  {
    file: 'en/zemun-with-kids-and-dogs.html',
    expect: [
      'Zemun City Park with Kids',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-with-kids-and-dogs"',
      'FAQPage',
      'pushchairs',
    ],
    notExpect: [],
  },
  {
    file: 'sr/zemun-sa-decom-i-psima.html',
    expect: [
      'Градски парк у Земуну са децом',
      'rel="canonical" href="https://www.zemuncitypark.com/sr/zemun-sa-decom-i-psima"',
    ],
    notExpect: [],
  },
  {
    file: 'en/zemun-in-spring.html',
    expect: [
      'Zemun in Spring',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-in-spring"',
      'FAQPage',
      'plane trees',
    ],
    notExpect: [],
  },
  {
    file: 'sr/zemun-prolece.html',
    expect: [
      'Земун у пролеће',
      'rel="canonical" href="https://www.zemuncitypark.com/sr/zemun-prolece"',
    ],
    notExpect: [],
  },
  {
    file: 'en/zemun-in-autumn.html',
    expect: [
      'Zemun in Autumn',
      'rel="canonical" href="https://www.zemuncitypark.com/en/zemun-in-autumn"',
      'FAQPage',
      'ginkgo',
    ],
    notExpect: [],
  },
  {
    file: 'sr/zemun-jesen.html',
    expect: [
      'Земун у јесен',
      'rel="canonical" href="https://www.zemuncitypark.com/sr/zemun-jesen"',
    ],
    notExpect: [],
  },
  {
    file: 'index.html',
    expect: ['NEXT_REDIRECT'],
    notExpect: [],
  },
];

let fail = 0;
for (const c of checks) {
  const html = read(c.file);
  const missing = c.expect.filter((e) => !html.includes(e));
  const present = c.notExpect.filter((e) => html.includes(e));
  if (missing.length || present.length) {
    fail++;
    console.log('FAIL', c.file);
    if (missing.length) console.log('  missing:', missing);
    if (present.length) console.log('  should NOT contain:', present);
  } else {
    console.log('OK  ', c.file);
  }
}

// sitemap / robots domain check
const sitemap = read('sitemap.xml');
const robots = read('robots.txt');
const nonWww = [...sitemap.matchAll(/https:\/\/(?!www\.)zemuncitypark\.com/g)].length;
console.log('\nsitemap URLs:', [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].length, '| non-www refs in sitemap:', nonWww);
if (nonWww > 0 || !robots.includes('https://www.zemuncitypark.com/sitemap.xml')) {
  fail++;
  console.log('FAIL sitemap/robots www consistency');
} else {
  console.log('OK   sitemap/robots www');
}

// no non-www domain anywhere in exported HTML
const all = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (p.endsWith('.html') || p.endsWith('.xml') || p.endsWith('.txt')) all.push(p);
  }
};
walk('out');
let stray = [];
for (const f of all) {
  const s = fs.readFileSync(f, 'utf8');
  const m = s.match(/https?:\/\/(?!www\.)zemuncitypark\.com/g);
  if (m) stray.push(f + ' (' + m.length + ')');
}
if (stray.length) { fail++; console.log('FAIL non-www refs:', stray); } else { console.log('OK   no non-www refs in', all.length, 'files'); }

console.log(fail === 0 ? '\nALL CHECKS PASSED' : `\n${fail} CHECK(S) FAILED`);
