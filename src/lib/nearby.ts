import type { Locale } from '@/i18n/routing';

export type NearbyPlace = {
  slug: string;
  names: Record<Locale, string>;
  descriptions: Record<Locale, string>;
  address: string;
  category: string;
  kind: 'exterior' | 'church' | 'school' | 'cemetery' | 'theatre' | 'museum' | 'square' | 'pier' | 'island';
};

export const heritageRegister = 'https://beogradskonasledje.rs/skpz-po-opstinama/zemun/';
export const tourismGuide = 'https://www.tob.rs/en/zemun-kat';
export const parkMaintenance = 'https://zemun.rs/wp-content/uploads/2020/05/2023-05-22-APZZS-2023-FINAL.pdf';

export function googleMaps(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function placeMap(place: NearbyPlace) {
  return googleMaps(`${place.names.sr} ${place.address}, Zemun, Beograd, Srbija`);
}

export function photoCollection(place: NearbyPlace) {
  return `https://commons.wikimedia.org/wiki/Category:${encodeURIComponent(place.category.replaceAll(' ', '_'))}`;
}

export const NEARBY_PLACES: NearbyPlace[] = [
  {
    "slug": "spirta-house",
    "names": {
      "en": "Spirta House",
      "sr": "Спиртина кућа",
      "zh": "斯皮尔塔故居"
    },
    "descriptions": {
      "en": "Built in 1855 for the Spirta merchant family, the house now houses Zemun’s local history museum. Its pointed window arches give the façade a Gothic Revival character.",
      "sr": "Кућа је подигнута 1855. за трговачку породицу Спирта, а у њој је данас Завичајни музеј Земуна. Шиљати прозорски лукови дају фасади неоготички изглед.",
      "zh": "这座宅邸于 1855 年为斯皮尔塔商人家族建造，现为泽蒙地方博物馆所在地。立面上的尖拱窗是辨认哥特复兴风格的线索。"
    },
    "address": "Glavna 9",
    "category": "Spirtina kuća",
    "kind": "museum"
  },
  {
    "slug": "zemun-magistrate",
    "names": {
      "en": "Zemun Magistrate",
      "sr": "Магистрат у Земуну",
      "zh": "泽蒙旧市政法庭"
    },
    "descriptions": {
      "en": "The protected Magistrate building anchors the square named after it. View the formal street elevation from the square to see how the old civic centre was organised.",
      "sr": "Заштићени Магистрат обележава истоимени трг. Посматрајте свечано главно прочеље са трга да бисте разумели распоред старог управног средишта.",
      "zh": "受保护的旧市政法庭坐落在以它命名的广场。站在广场上看正式对称的正立面，可以理解旧行政中心的布局。"
    },
    "address": "Magistratski trg 3",
    "category": "Magistrat u Zemunu",
    "kind": "exterior"
  },
  {
    "slug": "karamata-family-house",
    "names": {
      "en": "Karamata Family House",
      "sr": "Кућа породице Карамата",
      "zh": "卡拉马塔家族宅邸"
    },
    "descriptions": {
      "en": "The Karamata family's protected house is a stop for reading the domestic architecture of the old town. Step back on Karamatina to compare the entrance and the upper-floor window rhythm.",
      "sr": "Заштићена кућа породице Карамата пример је стамбене архитектуре старог Земуна. Са Караматине упоредите портал и ритам прозора на спрату.",
      "zh": "这座受保护的家族宅邸适合观察泽蒙旧城的住宅建筑。从卡拉马蒂纳街稍退几步，对照入口和楼上窗户的排列。"
    },
    "address": "Karamatina 17",
    "category": "House of family Karamata",
    "kind": "exterior"
  },
  {
    "slug": "icko-house",
    "names": {
      "en": "Ičko’s House",
      "sr": "Ичкова кућа",
      "zh": "伊奇科故居"
    },
    "descriptions": {
      "en": "The protected house occupies the bend where Bežanijska and Svetosavska meet. The corner position lets you compare both street elevations within a short stop.",
      "sr": "Заштићена кућа стоји на углу Бежанијске и Светосавске. Са раскрснице се за кратко време могу упоредити оба улична прочеља.",
      "zh": "受保护的房屋占据贝扎尼亚街和圣萨瓦街的转角。短暂停留即可从两条街比较建筑的不同立面。"
    },
    "address": "Bežanijska 18 / Svetosavska 23",
    "category": "Ičko's House",
    "kind": "exterior"
  },
  {
    "slug": "davidovic-house",
    "names": {
      "en": "Dimitrije Davidović Birthplace",
      "sr": "Родна кућа Димитрија Давидовића",
      "zh": "迪米特里耶·达维多维奇出生地"
    },
    "descriptions": {
      "en": "This house commemorates the birthplace of Dimitrije Davidović. Look for the street number and memorial plaque in the busy row near the post office.",
      "sr": "Кућа обележава место рођења Димитрија Давидовића. Потражите кућни број и спомен-плочу у низу зграда код поште.",
      "zh": "这里纪念迪米特里耶·达维多维奇的出生地。主街这一段较热闹，可在邮局旁按门牌寻找纪念牌。"
    },
    "address": "Glavna 6",
    "category": "House of Dimitrije Davidović",
    "kind": "exterior"
  },
  {
    "slug": "pantelic-foundry",
    "names": {
      "en": "Pantelić Foundry",
      "sr": "Ливница Пантелић",
      "zh": "潘泰利奇铸造厂"
    },
    "descriptions": {
      "en": "The protected foundry recalls Zemun’s bell and tower-clock trades. Look at the street-scale workshop frontage and compare it with the civic buildings on the main square.",
      "sr": "Заштићена ливница подсећа на земунске занате израде звона и торањских сатова. Упоредите улично прочеље радионице са јавним зградама на тргу.",
      "zh": "这处受保护的铸造作坊记录了泽蒙制作钟铃和塔钟的传统。可将朴实的作坊沿街立面与主广场的大型公共建筑对照。"
    },
    "address": "Gajeva 15",
    "category": "Livnica Pantelić",
    "kind": "exterior"
  },
  {
    "slug": "zemun-customs-house",
    "names": {
      "en": "Zemun Customs House",
      "sr": "Царинарница у Земуну",
      "zh": "泽蒙旧海关大楼"
    },
    "descriptions": {
      "en": "The customs house is a reminder of how closely Zemun’s river trade and civic administration were connected. View the complete frontage from the street before continuing towards the Danube.",
      "sr": "Царинарница подсећа на везу дунавске трговине и земунске управе. Погледајте цело прочеље са улице пре наставка ка Дунаву.",
      "zh": "旧海关大楼见证河运贸易与泽蒙城市管理的联系。前往多瑙河之前，可以先从街对面看完整立面。"
    },
    "address": "Zmaj Jovina 26",
    "category": "Carinarnica",
    "kind": "exterior"
  },
  {
    "slug": "zemun-post-office",
    "names": {
      "en": "Zemun Post Office",
      "sr": "Земунска пошта",
      "zh": "泽蒙邮局"
    },
    "descriptions": {
      "en": "The protected post-office building is closely spaced with other landmarks on Glavna. Frame the public entrance and the upper façade separately on this narrow section of street.",
      "sr": "Заштићена зграда поште налази се у густом низу знаменитости у Главној. На уском тротоару посебно погледајте јавни улаз и горњи део фасаде.",
      "zh": "邮局是主街一系列受保护建筑中的一座。这里的街道较窄，可以分开观察公共入口和上半部立面。"
    },
    "address": "Glavna 8",
    "category": "Post office in Zemun",
    "kind": "exterior"
  },
  {
    "slug": "zemun-gymnasium",
    "names": {
      "en": "Zemun Gymnasium",
      "sr": "Земунска гимназија",
      "zh": "泽蒙文理中学"
    },
    "descriptions": {
      "en": "The secondary school puts a formal institutional façade on the park edge. From the public path, watch how the frontage changes as the trees open up.",
      "sr": "Средња школа даје свечано прочеље ободу парка. Са јавне стазе погледајте како се фасада открива између стабала.",
      "zh": "这所中学的正式立面面向城市公园。沿公共步道走一段，能看到树木间的不同取景角度。"
    },
    "address": "Gradski park 1",
    "category": "Zemun Gymnasium",
    "kind": "school"
  },
  {
    "slug": "st-roch-chapel-zemun",
    "names": {
      "en": "St Roch Chapel",
      "sr": "Контумацка капела Светог Рока",
      "zh": "泽蒙圣罗克礼拜堂"
    },
    "descriptions": {
      "en": "Built in 1836, this Catholic chapel was part of the Kontumac quarantine complex. Look at its entrance and compare its silhouette with the separate Orthodox chapel nearby.",
      "sr": "Католичка капела из 1836. била је део Контумаца. Погледајте улаз и упоредите силуету са оближњом православном капелом.",
      "zh": "这座建于 1836 年的天主教礼拜堂曾属于孔图马茨检疫设施。可观察入口，再比较附近另一座东正教礼拜堂的轮廓。"
    },
    "address": "Gradski park 3",
    "category": "Chapel of Saint Roch (Zemun)",
    "kind": "church"
  },
  {
    "slug": "holy-archangels-chapel-zemun",
    "names": {
      "en": "Chapel of the Holy Archangels",
      "sr": "Контумацка капела Светих арханђела",
      "zh": "泽蒙圣天使长礼拜堂"
    },
    "descriptions": {
      "en": "The Orthodox chapel of Michael and Gabriel, built in 1786, served the old quarantine grounds. Follow the park path around the chapel to see the profile of its tower and roof.",
      "sr": "Православна капела Михаила и Гаврила из 1786. служила је старом карантину. Са парковске стазе погледајте бочни профил торња и крова.",
      "zh": "这座建于 1786 年的东正教礼拜堂供奉米迦勒和加百列，服务于昔日检疫区。沿公园步道绕行，可观察塔楼及屋顶的侧面。"
    },
    "address": "Gradski park 3",
    "category": "Church of Sts. Michael and Gabriel, Zemun",
    "kind": "church"
  },
  {
    "slug": "st-nicholas-church-zemun",
    "names": {
      "en": "St Nicholas Church",
      "sr": "Николајевска црква у Земуну",
      "zh": "泽蒙圣尼古拉教堂"
    },
    "descriptions": {
      "en": "At the foot of Gardoš, the tower of this Orthodox church is an orienting landmark on Njegoševa. Pause in the lower street before continuing uphill.",
      "sr": "У подножју Гардоша, торањ православне Николајевске цркве служи као оријентир у Његошевој. Застаните у доњој улици пре успона.",
      "zh": "这座东正教堂的塔楼是加尔多什山脚的重要地标。上坡前可从涅戈什街低处观察塔楼。"
    },
    "address": "Njegoševa 43",
    "category": "St. Nicholas ortodox church (Zemun)",
    "kind": "church"
  },
  {
    "slug": "zemun-virgin-church",
    "names": {
      "en": "Church of the Nativity of the Virgin",
      "sr": "Богородичина црква у Земуну",
      "zh": "泽蒙圣母诞辰教堂"
    },
    "descriptions": {
      "en": "The protected Orthodox church sits behind the main commercial streets. The approach along Rajačićeva gives a closer view of the tower in the surrounding street fabric.",
      "sr": "Заштићена православна црква стоји иза главних трговачких улица. Прилаз Рајачићевом показује како се њен торањ уклапа у околне улице.",
      "zh": "这座受保护的东正教堂位于主要商业街后方。从拉亚契切瓦街接近，能看清塔楼与周围街巷的关系。"
    },
    "address": "Rajačićeva 4",
    "category": "Bogorodična crkva",
    "kind": "church"
  },
  {
    "slug": "zemun-assumption-church",
    "names": {
      "en": "Church of the Assumption",
      "sr": "Црква Узнесења Блажене Девице Марије",
      "zh": "泽蒙圣母升天教堂"
    },
    "descriptions": {
      "en": "This Catholic church faces Veliki trg. Cross the public square to see the whole entrance elevation before moving closer to the doorway.",
      "sr": "Католичка црква гледа на Велики трг. Са друге стране јавног трга погледајте цело улазно прочеље пре него што приђете вратима.",
      "zh": "这座天主教堂面向大广场。可先在广场另一侧欣赏完整入口立面，再近看大门。"
    },
    "address": "Veliki trg",
    "category": "St. Mary of the Assumption Church (Zemun)",
    "kind": "church"
  },
  {
    "slug": "zemun-holy-trinity-church",
    "names": {
      "en": "Holy Trinity Church",
      "sr": "Црква Свете Тројице у Земуну",
      "zh": "泽蒙圣三一教堂"
    },
    "descriptions": {
      "en": "This protected church belongs to the Upper Town, away from the quay. The two intersecting streets give different views of the roof and tower.",
      "sr": "Заштићена црква припада Горњој вароши, даље од кеја. Са две улице на углу виде се различити профили крова и торња.",
      "zh": "这座受保护的教堂位于远离河岸的上城区，从街角两条道路可分别观察屋顶和塔楼。"
    },
    "address": "Dobanovačka 72 / Svetotrojčina",
    "category": "Svetotroična church",
    "kind": "church"
  },
  {
    "slug": "haris-chapel",
    "names": {
      "en": "Hariš Chapel",
      "sr": "Харишева капела",
      "zh": "哈里什家族礼拜堂"
    },
    "descriptions": {
      "en": "The Church of St Demetrius is the Hariš family chapel inside Gardoš Cemetery. Follow the cemetery paths quietly and give mourners space around the chapel.",
      "sr": "Црква Светог Димитрија је породична капела Харишевих у гробљу на Гардошу. Крећите се тихо стазама и оставите простор ожалошћенима.",
      "zh": "圣德米特里教堂是加尔多什墓园内的哈里什家族礼拜堂。请沿墓园步道安静参观，并给前来悼念的人留出空间。"
    },
    "address": "Grobljanska 5",
    "category": "Church of St. Demetrius (Zemun)",
    "kind": "cemetery"
  },
  {
    "slug": "gardos-cemetery",
    "names": {
      "en": "Zemun Cemetery on Gardoš",
      "sr": "Земунско гробље на Гардошу",
      "zh": "加尔多什泽蒙墓园"
    },
    "descriptions": {
      "en": "The protected cemetery occupies the hill associated with the earliest settlement traces in Zemun. Its paths put family chapels and memorials into the context of a working cemetery.",
      "sr": "Заштићено гробље лежи на брду где су забележени најстарији трагови насељавања Земуна. Стазе повезују породичне капеле и споменике у активном гробљу.",
      "zh": "受保护的墓园所在山丘发现了泽蒙最早的聚落遗迹。步道连接家族礼拜堂和纪念碑，墓园至今仍在使用。"
    },
    "address": "Grobljanska 5",
    "category": "Zemun cemetery",
    "kind": "cemetery"
  },
  {
    "slug": "zemun-evangelical-church",
    "names": {
      "en": "Zemun Evangelical Church",
      "sr": "Евангелистичка црква у Земуну",
      "zh": "泽蒙福音教堂"
    },
    "descriptions": {
      "en": "The heritage register lists the former Evangelical church at Tošin bunar 2. Its address makes it useful for looking beyond the Catholic and Orthodox buildings in the old centre.",
      "sr": "Регистар бележи некадашњу евангелистичку цркву на Тошином бунару 2. Ова адреса проширује шетњу изван католичких и православних грађевина старог језгра.",
      "zh": "遗产名录记录了托申布纳尔街 2 号的原福音教堂。它适合作为老城天主教和东正教建筑之外的建筑参观点。"
    },
    "address": "Tošin bunar 2",
    "category": "Evangelička crkva u Zemunu (Belgrade)",
    "kind": "exterior"
  },
  {
    "slug": "zemun-synagogue",
    "names": {
      "en": "Zemun Synagogue",
      "sr": "Земунска синагога",
      "zh": "泽蒙犹太会堂"
    },
    "descriptions": {
      "en": "The former Ashkenazi synagogue stands on a street named for Rabbi Judah Alkalai. View it from the pavement as a stop on Zemun’s Jewish heritage trail.",
      "sr": "Некадашња ашкенаска синагога стоји у улици названој по рабину Јуди Алкалају. Погледајте је са тротоара у оквиру шетње јеврејским наслеђем Земуна.",
      "zh": "昔日的阿什肯纳兹会堂位于以犹大·阿尔卡莱拉比命名的街道，可从公共人行道观察泽蒙的犹太文化遗产。"
    },
    "address": "Rabina Alkalaja 5",
    "category": "Zemun Synagogue",
    "kind": "exterior"
  },
  {
    "slug": "madlenianum-opera",
    "names": {
      "en": "Madlenianum Opera and Theatre",
      "sr": "Опера и театар Мадленијанум",
      "zh": "玛德莱尼亚努姆歌剧院"
    },
    "descriptions": {
      "en": "The theatre occupies the former Zemun theatre site on Glavna. Come in the daytime to see how the contemporary entrance fits along the old main street, or look up a performance for an evening visit.",
      "sr": "Театар заузима место некадашњег земунског позоришта у Главној. Дању погледајте савремени улаз у старој улици, а за вече проверите репертоар.",
      "zh": "剧院位于主街原泽蒙剧院的位置。白天可观察现代入口怎样融入旧街景，晚上则可按节目排期安排观演。"
    },
    "address": "Glavna 32",
    "category": "Madlenianum",
    "kind": "theatre"
  },
  {
    "slug": "zemun-air-force-building",
    "names": {
      "en": "Air Force Command Building",
      "sr": "Зграда Команде ваздухопловства",
      "zh": "泽蒙空军司令部大楼"
    },
    "descriptions": {
      "en": "The protected command building presents a broad civic frontage to Aviators’ Square. Take in its massing from the public square and observe any posted restrictions.",
      "sr": "Заштићена зграда команде има широко прочеље према Авијатичарском тргу. Посматрајте њену масу са јавног трга и поштујте истакнута ограничења.",
      "zh": "这栋受保护的司令部建筑以宽阔立面面向飞行员广场。请在公共广场观察体量，并遵守现场标识。"
    },
    "address": "Avijatičarski trg 12",
    "category": "Airforce command building (Zemun)",
    "kind": "exterior"
  },
  {
    "slug": "zemun-sundial-house",
    "names": {
      "en": "House with the Sundial",
      "sr": "Кућа са сунчаним сатом",
      "zh": "泽蒙日晷之屋"
    },
    "descriptions": {
      "en": "The house’s sundial rewards a look above shop level. Look for the dial from a safe pavement position and compare its placement with the upper windows.",
      "sr": "Због сунчаног сата вреди подићи поглед изнад излога. Са безбедног места на тротоару упоредите положај сата са горњим прозорима.",
      "zh": "沿街商铺上方藏着这栋房屋的日晷。可从安全的人行道抬头找圆盘，并观察它与上层窗户的位置关系。"
    },
    "address": "Glavna 23",
    "category": "Kuća sa sunčanim satom, Zemun",
    "kind": "exterior"
  },
  {
    "slug": "afrodita-bialo-house",
    "names": {
      "en": "Afrodita Bialo House",
      "sr": "Кућа Афродите Биало",
      "zh": "阿芙罗迪塔·比亚洛宅邸"
    },
    "descriptions": {
      "en": "This protected house is an architectural stop toward the far end of the old main street. Read the ornament of the upper frontage before continuing toward Muhar.",
      "sr": "Заштићена кућа је архитектонска станица ближе крају старе Главне улице. Погледајте украс горње фасаде пре наставка ка Мухару.",
      "zh": "这座受保护宅邸靠近旧主街一端。向穆哈尔方向继续走之前，可留意立面上部的装饰。"
    },
    "address": "Glavna 45",
    "category": "Kuća Afrodite Bialo",
    "kind": "exterior"
  },
  {
    "slug": "burovac-house",
    "names": {
      "en": "Burovac House on Gardoš",
      "sr": "Кућа Буровца на Гардошу",
      "zh": "加尔多什布罗瓦茨宅邸"
    },
    "descriptions": {
      "en": "The protected house illustrates domestic architecture on the slopes of Gardoš. Pay attention to how the frontage meets the street on Visoka.",
      "sr": "Заштићена кућа показује стамбену архитектуру на падини Гардоша. Обратите пажњу на спој прочеља и улице у Високој.",
      "zh": "这座山坡宅邸展示加尔多什的住宅建筑。走到维索卡街时，留意建筑正面与斜坡街道如何衔接。"
    },
    "address": "Visoka 27",
    "category": "Kuća Burovca na Gardošu",
    "kind": "exterior"
  },
  {
    "slug": "markovic-family-house",
    "names": {
      "en": "Marković Family House",
      "sr": "Кућа породице Марковић",
      "zh": "马尔科维奇家族宅邸"
    },
    "descriptions": {
      "en": "The protected house has addresses on Gospodska and Magistratski trg. Look at it first from the square, then turn onto the street to see how it forms the corner.",
      "sr": "Заштићена кућа има адресе у Господској и на Магистратском тргу. Погледајте је прво са трга, па из улице да видите како обликује угао.",
      "zh": "这座宅邸同时面向戈斯波德斯卡街和市政法庭广场。可先从广场看，再转入街内观察建筑如何形成街角。"
    },
    "address": "Gospodska 14 / Magistratski trg 11",
    "category": "Kuća porodice Marković",
    "kind": "exterior"
  },
  {
    "slug": "sava-nedeljkovic-house",
    "names": {
      "en": "Dr Sava Nedeljković House",
      "sr": "Кућа др Саве Недељковића",
      "zh": "萨瓦·内代利科维奇医生故居"
    },
    "descriptions": {
      "en": "The heritage-listed house extends an architectural walk beyond the old central squares. Locate number 41 on Cara Dušana and read the street frontage from the pavement.",
      "sr": "Кућа под заштитом продужава архитектонску шетњу изван средишњих тргова. Нађите број 41 у Цара Душана и погледајте фасаду са тротоара.",
      "zh": "这座受保护的住宅让老城建筑散步从核心广场继续向外延伸。沿察拉杜沙纳街找到 41 号即可从人行道观察立面。"
    },
    "address": "Cara Dušana 41",
    "category": "Kuća dr Save Nedeljkovića",
    "kind": "exterior"
  },
  {
    "slug": "pavle-horvat-house",
    "names": {
      "en": "Pavle Horvat House",
      "sr": "Кућа инжењера Павла Хорвата",
      "zh": "帕夫莱·霍尔瓦特工程师宅邸"
    },
    "descriptions": {
      "en": "The engineer’s protected house is a small residential landmark on Ivićeva. Leave the busier commercial streets for a short look at its street elevation.",
      "sr": "Заштићена кућа инжењера мали је стамбени оријентир у Ивићевој. Одвојите се од прометних трговачких улица за кратак поглед на прочеље.",
      "zh": "这座受保护的工程师宅邸是伊维切瓦街上的小型住宅地标。可从繁忙商业街转入住宅街短暂停留。"
    },
    "address": "Ivićeva 4",
    "category": "Kuća inženjera Pavla Horvata",
    "kind": "exterior"
  },
  {
    "slug": "orthodox-community-house-zemun",
    "names": {
      "en": "Serbian Orthodox Community House",
      "sr": "Дом српске православне црквене општине",
      "zh": "泽蒙塞尔维亚东正教会馆"
    },
    "descriptions": {
      "en": "The heritage-listed community house has its own frontage on Svetosavska. Pair it with Ičko’s House to compare two different buildings on the same stretch of street.",
      "sr": "Заштићени црквени дом има засебно прочеље у Светосавској. Упоредите га са Ичковом кућом на истом делу улице.",
      "zh": "这座列入遗产名录的教会会馆有独立沿街立面，可与同一街段的伊奇科故居一并对照。"
    },
    "address": "Svetosavska 22",
    "category": "Community centre of Serbian Orthodox Church in Zemun",
    "kind": "exterior"
  },
  {
    "slug": "queen-maria-childrens-home",
    "names": {
      "en": "Queen Maria Children’s Home",
      "sr": "Дечији дом краљице Марије",
      "zh": "玛丽亚王后儿童院旧址"
    },
    "descriptions": {
      "en": "The protected building records the history of institutional child care in Zemun. Its position at number 57 makes it a separate exterior stop after the house at number 41.",
      "sr": "Заштићена зграда чува историју институционалне бриге о деци у Земуну. Број 57 је засебна станица после куће на броју 41.",
      "zh": "这栋受保护建筑记录了泽蒙的儿童照护历史。参观同街 41 号住宅后，可继续沿街前往 57 号看外观。"
    },
    "address": "Cara Dušana 57",
    "category": "Queen Maria’s Children’s Home",
    "kind": "exterior"
  },
  {
    "slug": "branko-radicevic-square",
    "names": {
      "en": "Branko Radičević Square",
      "sr": "Трг Бранка Радичевића",
      "zh": "布兰科·拉迪切维奇广场"
    },
    "descriptions": {
      "en": "The square is one of the public spaces that make up old Zemun. Use it as a pause in a street walk and observe how the roads converge by the foothill.",
      "sr": "Трг је један од јавних простора старог Земуна. Застаните током шетње и погледајте како се улице састају у подножју брда.",
      "zh": "广场是泽蒙老城的公共空间之一。可在步行途中停留，观察几条街道如何在山脚汇合。"
    },
    "address": "Trg Branka Radičevića",
    "category": "Branko Radičević Square",
    "kind": "square"
  },
  {
    "slug": "zemun-international-pier",
    "names": {
      "en": "Zemun International Pier",
      "sr": "Међународно пристаниште у Земуну",
      "zh": "泽蒙国际码头"
    },
    "descriptions": {
      "en": "This landing has its own gangway on the Zemun quay. Compare the mooring structures and the island skyline from the public riverside walkway.",
      "sr": "Пристаниште има свој приступни мост на земунском кеју. Са јавног шеталишта погледајте везове и обрисе острва.",
      "zh": "码头在泽蒙河岸设有独立舷梯。从公共河边步道可观察系泊设施，以及多瑙河岛屿的轮廓。"
    },
    "address": "Kej oslobođenja",
    "category": "International pier in Zemun",
    "kind": "pier"
  },
  {
    "slug": "great-war-island",
    "names": {
      "en": "Great War Island",
      "sr": "Велико ратно острво",
      "zh": "大战岛"
    },
    "descriptions": {
      "en": "The island occupies the confluence of the Sava and the Danube. The view from Zemun’s quay helps distinguish its wooded shore and the seasonal Lido access point at the northern tip.",
      "sr": "Острво је на ушћу Саве у Дунав. Са земунског кеја се разликују шумовита обала и сезонски приступ Лиду на северном крају.",
      "zh": "岛屿位于萨瓦河汇入多瑙河的位置。从泽蒙河岸可辨认林木覆盖的岛岸，以及北端丽都海滩的季节性入口。"
    },
    "address": "Veliko ratno ostrvo, confluence of the Sava and Danube",
    "category": "Great War Island",
    "kind": "island"
  }
];
