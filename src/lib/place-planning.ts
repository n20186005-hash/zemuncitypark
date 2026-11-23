import type { Locale } from '@/i18n/routing';
import type { NearbyPlace } from './nearby';

type Localized = [en: string, sr: string, zh: string];
const index = { en: 0, sr: 1, zh: 2 } satisfies Record<Locale, number>;
const text = (value: Localized, locale: Locale) => value[index[locale]];

export const cemeterySource = 'https://www.beogradskagroblja.rs/groblja?groblje=zemunsko-groblje';
export const boxOfficeSource = 'https://operatheatremadlenianum.com/node/210';

const profiles: Record<NearbyPlace['kind'], { type: Localized; hours?: Localized; admission?: Localized; tips: Localized; rules: Localized }> = {
  exterior: {
    type: ['Historic building', 'Историјска зграда', '历史建筑'],
    hours: ['View the façade in daylight from the public sidewalk. Plan on street access only.', 'Фасаду погледајте по дану са јавног тротоара. Планирајте разгледање са улице.', '建议白天从公共人行道看立面，按外观参观安排行程。'],
    tips: ['Allow 10–15 minutes to find the address and view the frontage from both directions.', 'Одвојите 10–15 минута за адресу и поглед на фасаду из оба смера.', '可留出 10–15 分钟找门牌，从街道两端观察立面。'],
    rules: ['Keep entrances clear and respect the privacy of residents and occupants.', 'Оставите улазе проходним и поштујте приватност станара и корисника.', '请保持入口畅通，尊重住户和建筑使用者的隐私。'],
  },
  school: {
    type: ['Historic school', 'Историјска школска зграда', '历史校舍'],
    hours: ['View from the park paths in daylight. Campus access is reserved for school activities.', 'Погледајте зграду по дану са стаза у парку. Школски простор служи за наставу.', '白天可在公园步道看校舍外观，校内空间供教学使用。'],
    tips: ['Use the park side for a quieter view and allow 10–15 minutes.', 'За мирнији поглед приђите са стране парка и одвојите 10–15 минута.', '从公园一侧看外观较从容，可留出 10–15 分钟。'],
    rules: ['Keep school entrances clear and avoid photographing students.', 'Оставите школске улазе проходним и избегавајте фотографисање ученика.', '请勿堵住校门，避免拍摄学生。'],
  },
  church: {
    type: ['Church or chapel', 'Црква или капела', '教堂或礼拜堂'],
    hours: ['Plan for an exterior visit. If you want to enter, confirm worship and visiting times with the congregation.', 'Планирајте разгледање споља. За улазак проверите распоред богослужења и посета код црквене заједнице.', '可先按外观参观规划。若想入内，请向教会确认礼拜及参观时段。'],
    admission: ['Exterior viewing is free. Ask the congregation about any arrangements for an interior visit.', 'Разгледање споља је бесплатно. За унутрашњост питајте црквену заједницу.', '外观免费参观，入内安排请向教会查询。'],
    tips: ['Leave 15–25 minutes for the exterior and make any interior visit flexible around services.', 'За спољашњост одвојите 15–25 минута, а улазак прилагодите богослужењима.', '外观可安排 15–25 分钟，入内时间请配合礼拜活动。'],
    rules: ['Keep your voice down and ask before taking photographs inside.', 'Говорите тихо и тражите дозволу пре фотографисања унутра.', '请保持安静，室内拍照前先征得许可。'],
  },
  cemetery: {
    type: ['Cemetery heritage site', 'Меморијално наслеђе на гробљу', '墓园历史遗产'],
    hours: ['Cemetery gates are open daily 07:00–19:00 from April through September and 07:00–18:00 from October through March. Ask separately about chapel interiors.', 'Гробље је отворено сваког дана 07:00–19:00 од априла до септембра и 07:00–18:00 од октобра до марта. За улазак у капелу питајте засебно.', '墓园每日开放，4–9 月 07:00–19:00，10 月至次年 3 月 07:00–18:00。礼拜堂室内开放请另行查询。'],
    admission: ['The public schedule covers entry to the cemetery grounds. Contact the cemetery service about special access.', 'Радно време за посетиоце односи се на гробље. За посебан приступ обратите се служби гробља.', '公布的访客时段适用于墓园区域，特殊参观安排请向管理方咨询。'],
    tips: ['Visit well before gate closure. Leave extra time for the uphill walk to Gardoš.', 'Дођите пре затварања капије и оставите додатно време за успон на Гардош.', '建议在关门前留足时间，加尔多什的上坡步行也要计入行程。'],
    rules: ['Stay on paths and give funerals and mourners space.', 'Користите стазе и оставите простор за сахране и ожалошћене.', '请走墓园步道，给葬礼活动和悼念者留出空间。'],
  },
  museum: {
    type: ['Historic house and local museum', 'Историјска кућа и завичајни музеј', '历史宅邸与地方博物馆'],
    hours: ['Confirm gallery access with the Belgrade City Museum before going. The façade is visible from Glavna in daylight.', 'Пре поласка проверите приступ поставци код Музеја града Београда. Фасада је по дану видљива из Главне.', '出发前向贝尔格莱德市博物馆确认展厅开放安排。白天可从主街参观外观。'],
    admission: ['The street view is free. Check current exhibition access and ticketing with the museum.', 'Поглед са улице је бесплатан. Услове посете поставци и цене проверите код музеја.', '街道外观免费参观。展览开放及票价请向博物馆查询。'],
    tips: ['Plan a flexible stop on Glavna and leave time to compare the museum with the nearby post office.', 'Планирајте флексибилно задржавање у Главној и упоредите музеј са оближњом поштом.', '可把这站安排在主街散步中，并留时间对照附近邮局的建筑。'],
    rules: ['Keep to the sidewalk for the exterior and follow posted rules inside.', 'Спољашњост гледајте са тротоара, а унутра пратите истакнута правила.', '看外观时请留在人行道，入内后遵守馆内告示。'],
  },
  theatre: {
    type: ['Opera and theatre', 'Опера и позориште', '歌剧及剧场'],
    hours: ['Performances follow the programme. See the official box-office page for current counter hours.', 'Представе прате репертоар. Радно време благајне проверите на званичној страници.', '演出按节目排期举行。售票处开放时间请查看剧院公告。'],
    admission: ['The façade can be viewed from the street. Performance tickets and prices depend on the programme and seating.', 'Фасада је видљива са улице. Улазнице и цене зависе од представе и седишта.', '外观可从街上观看。演出票价因节目和座位而异。'],
    tips: ['Book the performance first and allow time for ticket collection before the curtain.', 'Прво резервишите представу и оставите време за преузимање улазница.', '先选定演出并订票，演出前留时间取票入场。'],
    rules: ['Check the venue’s admission and photography rules for the event you book.', 'Проверите правила уласка и фотографисања за резервисану представу.', '请查看所订场次的入场与摄影规则。'],
  },
  square: {
    type: ['Public square', 'Јавни трг', '公共广场'],
    admission: ['Free access to the public square.', 'Слободан приступ јавном тргу.', '公共广场免费开放。'],
    tips: ['Leave 10–20 minutes to look across the square and orient yourself before the hill climb.', 'Одвојите 10–20 минута за трг и оријентацију пре успона.', '可留 10–20 分钟看广场布局，再辨认上坡方向。'],
    rules: ['Use designated crossings where streets meet the square.', 'Користите обележене прелазе на улицама око трга.', '广场与街道相接处请走人行横道。'],
  },
  pier: {
    type: ['Danube passenger pier', 'Путничко пристаниште на Дунаву', '多瑙河客运码头'],
    hours: ['View the pier from the public riverside walkway. Boarding times depend on the boat operator.', 'Пристаниште погледајте са јавног шеталишта. Укрцавање зависи од оператера брода.', '可从公共河岸步道看码头。登船时间以游船运营方通知为准。'],
    admission: ['Free view from the quay. Cruise tickets are sold by the relevant operator.', 'Поглед са кеја је бесплатан. Карте за пловидбу продаје оператер.', '从河岸观看免费，游船票由相应运营方出售。'],
    tips: ['If boarding, match the pier name and departure time against your booking before setting off.', 'Ако се укрцавате, пре поласка упоредите назив пристаништа и време са резервацијом.', '如需登船，出发前把码头名称和发船时间与订票信息逐项核对。'],
    rules: ['Stay on the public quay unless staff have opened the gangway for your departure.', 'Останите на јавном кеју док особље не отвори приступ за ваш полазак.', '请留在公共河岸，等工作人员开放对应班次的舷梯后再登船。'],
  },
  island: {
    type: ['Protected river island', 'Заштићено речно острво', '多瑙河河岛保护区'],
    admission: ['The mainland view is free. Check seasonal Lido access and any boat charges with the operator.', 'Поглед са копна је бесплатан. Проверите сезонски приступ Лиду и евентуалну цену пловидбе.', '从陆地看岛免费。丽都海滩的季节性通行和船费请向运营方查询。'],
    tips: ['Plan a mainland riverside walk first so the visit still works if the Lido crossing is closed.', 'Прво планирајте шетњу обалом, како би излет био могућ и ако је прелаз за Лидо затворен.', '可先规划陆地河岸步行，丽都通道关闭时仍有可走的路线。'],
    rules: ['Respect protected zones and barriers. Follow current notices about river conditions and access.', 'Поштујте заштићене зоне и ограде. Пратите обавештења о водостају и приступу.', '请遵守保护区分区与围栏标识，并查看当天河况和通行公告。'],
  },
};

export function placePlanning(place: NearbyPlace, locale: Locale) {
  const profile = profiles[place.kind];
  return {
    type: text(profile.type, locale),
    hours: profile.hours && text(profile.hours, locale),
    admission: profile.admission && text(profile.admission, locale),
    tips: text(profile.tips, locale),
    rules: text(profile.rules, locale),
  };
}

export const planningLabels = {
  en: { intro: 'Explore this stop', tips: 'Visit tips', highlights: 'Highlights', localName: 'Local name', type: 'Type', district: 'District', area: 'Zemun, Belgrade, Serbia', hours: 'Opening hours and access', admission: 'Tickets and admission', rules: 'Before you go', lodging: 'Where to stay', directions: 'Address and map', latest: 'Check latest hours with the operator', rating: 'Google Maps reviews', planWalk: 'Map the walk to this stop' },
  sr: { intro: 'Упознајте локацију', tips: 'Савети за посету', highlights: 'Шта издвојити', localName: 'Локални назив', type: 'Врста', district: 'Општина', area: 'Земун, Београд, Србија', hours: 'Радно време и приступ', admission: 'Улазнице и цене', rules: 'Пре поласка', lodging: 'Где одсести', directions: 'Адреса и мапа', latest: 'Проверите радно време код управљача', rating: 'Оцене на Google мапама', planWalk: 'Прикажите пешачку руту' },
  zh: { intro: '探索景点', tips: '游览建议', highlights: '景区特色', localName: '当地名称', type: '景点类型', district: '所在地区', area: '塞尔维亚贝尔格莱德市泽蒙区', hours: '开放时间与参观方式', admission: '门票与费用', rules: '游览须知', lodging: '住宿建议', directions: '交通指南与地图', latest: '向运营方查询最新开放时间', rating: '查看 Google Maps 评价', planWalk: '查看前往此处的步行路线' },
};

const waterfront = ['zemun-customs-house', 'zemun-international-pier', 'great-war-island'];
const upperTown = ['st-nicholas-church-zemun', 'zemun-holy-trinity-church', 'haris-chapel', 'gardos-cemetery', 'burovac-house', 'branko-radicevic-square', 'sava-nedeljkovic-house', 'queen-maria-childrens-home'];

export function placeLogistics(place: NearbyPlace, locale: Locale) {
  if (waterfront.includes(place.slug)) {
    return {
      approach: text(['Reach the Danube quay at Kej oslobođenja and follow the water. For the island, confirm access to Lido before crossing.', 'Изађите на Кеј ослобођења и пратите реку. За острво проверите приступ Лиду пре преласка.', '先到解放河岸步道，沿多瑙河步行。若要登岛，请先确认丽都通道开放。'], locale),
      lodging: text(['Choose the Zemun quay for riverside evenings or central Zemun for easier bus connections. Check how far the property is from the actual boarding point if you have an early departure.', 'Изаберите Земунски кеј за вечери уз реку или средиште Земуна за лакши превоз. За рани полазак проверите удаљеност од стварног места укрцавања.', '想晚上沿河散步可住泽蒙河岸，重视公交则可住泽蒙中心。若有早班船，请核对住宿到实际登船点的距离。'], locale),
    };
  }
  if (upperTown.includes(place.slug)) {
    return {
      approach: text(['Start in central Zemun. Allow time for sloping streets and use the destination address rather than a generic Gardoš pin.', 'Крените из средишта Земуна. Оставите време за улице на падини и користите адресу одредишта.', '从泽蒙中心区出发，为坡道步行留出时间。导航请以本页地址为准。'], locale),
      lodging: text(['Stay in lower central Zemun for bus access and a simpler walk with luggage. Choose the hill area only after checking the property’s approach and steps.', 'Одседните у нижем делу средишта Земуна за лакши превоз и кретање са пртљагом. За смештај на брду проверите прилаз и степенице.', '携带行李或依赖公交，可住泽蒙中心区较低处。若选山坡住宿，先确认入口坡度和台阶。'], locale),
    };
  }
  return {
    approach: text(['Arrive in central Zemun by bus and walk from the park towards the listed street and number. The destination link is useful on streets with several nearby landmarks.', 'Дођите аутобусом у средиште Земуна, па од парка пешке до наведене улице и броја. Мапа помаже где има више оближњих знаменитости.', '搭公交到泽蒙中心，从城市公园步行至本页所列街道和门牌。遇到同一街上有多处景点时，以专属地图地址为准。'], locale),
    lodging: text(['Central Zemun around the park and Glavna is convenient for combining old-town stops by foot. A central Belgrade stay also works if this is a day trip and you check the return bus.', 'Смештај око парка и Главне погодан је за обилазак пешке. За једнодневни излет можете одсести и у средишту Београда, уз проверу повратног аутобуса.', '住城市公园与主街附近，方便步行串联老城景点。只安排一日游也可住贝尔格莱德市中心，出发前查好回程公交。'], locale),
  };
}


export function splitPlaceIntro(description: string, locale: Locale) {
  const boundary = locale === 'zh' ? description.indexOf('。') : description.search(/[.!?]\s+(?=[A-ZА-ЯЉЊЋЂЏЈ])/u);
  if (boundary < 0 || !description.slice(boundary + 1).trim()) return { intro: description, detail: '' };
  return { intro: description.slice(0, boundary + 1), detail: description.slice(boundary + 1).trim() };
}
