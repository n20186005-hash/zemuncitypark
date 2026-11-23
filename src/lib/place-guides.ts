import type { Locale } from '@/i18n/routing';

type PlaceGuide = {
  highlight: Record<Locale, string>;
  photography: Record<Locale, string>;
  nearby: string;
  designationYear?: number;
};

export const placeGuides: Record<string, PlaceGuide> = {
  "spirta-house": {
    "highlight": {
      "en": "Compare the pointed windows and carved entrance with the plainer façades next door.",
      "sr": "Упоредите шиљате прозоре и украшени улаз са једноставнијим суседним фасадама.",
      "zh": "对照尖拱窗、雕饰入口与相邻建筑较朴素的立面。"
    },
    "photography": {
      "en": "A diagonal view from Glavna gives the doorway depth.",
      "sr": "Снимите портал укосо са Главне.",
      "zh": "在主街人行道斜拍，能突出门洞的进深。"
    },
    "nearby": "davidovic-house",
    "designationYear": 1965
  },
  "zemun-magistrate": {
    "highlight": {
      "en": "Line up the central entrance with the square and compare the upper windows on each side.",
      "sr": "Поравнајте средишњи улаз са тргом и упоредите прозоре спрата са обе стране.",
      "zh": "从广场看主入口与两翼楼窗的关系。"
    },
    "photography": {
      "en": "A wide frame from the open square shows how the building faces civic space.",
      "sr": "Широки кадар са трга показује однос зграде и јавног простора.",
      "zh": "用广角把广场与整个立面放在一起，可以读出旧行政建筑如何面向公共空间。"
    },
    "nearby": "markovic-family-house",
    "designationYear": 1965
  },
  "karamata-family-house": {
    "highlight": {
      "en": "Follow the façade along Karamatina and look at the change in roof height.",
      "sr": "Пратите фасаду дуж Караматине и погледајте промену висине крова.",
      "zh": "沿卡拉马蒂纳街看屋顶高度如何变化。"
    },
    "photography": {
      "en": "Keep both the entrance and the roofline in a single oblique shot.",
      "sr": "Снимите улаз и кровну линију у једном косом кадру.",
      "zh": "斜向取景时同时收进大门与屋脊。"
    },
    "nearby": "st-nicholas-church-zemun",
    "designationYear": 1950
  },
  "icko-house": {
    "highlight": {
      "en": "Read the corner from Svetosavska and then from Bežanijska.",
      "sr": "Погледајте угао прво из Светосавске, па из Бежанијске.",
      "zh": "先从圣萨瓦街再从贝扎尼亚街观察转角。"
    },
    "photography": {
      "en": "Stand back on the wider sidewalk to include the roof junction and both elevations.",
      "sr": "Са ширег тротоара у кадар укључите спој кровова и оба прочеља.",
      "zh": "在较宽的人行道后退，把两面墙和屋顶交接点拍进同一画面。"
    },
    "nearby": "orthodox-community-house-zemun",
    "designationYear": 1965
  },
  "davidovic-house": {
    "highlight": {
      "en": "Use the plaque and door number to distinguish the birthplace from neighbouring buildings.",
      "sr": "По плочи и броју разликујте родну кућу од суседних зграда.",
      "zh": "根据纪念牌和门牌辨认出生地。"
    },
    "photography": {
      "en": "Include the house in a wider street view so the marker has context.",
      "sr": "У ширем уличном кадру прикажите и положај спомен-плоче.",
      "zh": "拍一张有相邻店面作参照的街景，可看出这座房屋在主街中的位置。"
    },
    "nearby": "zemun-post-office",
    "designationYear": 1951
  },
  "pantelic-foundry": {
    "highlight": {
      "en": "Look for the round opening high on the gable and the long workshop wall.",
      "sr": "Потражите округли отвор високо на забату и дуги зид радионице.",
      "zh": "留意山墙上方的圆洞和沿街延伸的作坊墙。"
    },
    "photography": {
      "en": "Photograph the end wall from the sidewalk on Gajeva and keep the corner in view.",
      "sr": "Са тротоара у Гајевој снимите забат тако да се види угао зграде.",
      "zh": "从盖耶瓦街人行道拍山墙，同时保留建筑转角。"
    },
    "nearby": "icko-house",
    "designationYear": 1971
  },
  "zemun-customs-house": {
    "highlight": {
      "en": "Notice the different elevations at the corner.",
      "sr": "Уочите различита прочеља на углу.",
      "zh": "观察街角两面不同的立面。"
    },
    "photography": {
      "en": "From a public sidewalk, frame the customs house with the descending street to show its connection to the riverfront.",
      "sr": "Са јавног тротоара укључите улицу која се спушта према кеју.",
      "zh": "从公共人行道把大楼和下坡街道一同取景，能表现旧海关与河岸的关系。"
    },
    "nearby": "zemun-international-pier",
    "designationYear": 1965
  },
  "zemun-post-office": {
    "highlight": {
      "en": "The contrasting trim is easiest to read above the doors.",
      "sr": "Контрастни украси најбоље се виде изнад врата.",
      "zh": "入口上方能清楚看见对比色的饰带。"
    },
    "photography": {
      "en": "Use a diagonal view from the opposite sidewalk to capture the corner without blocking customers.",
      "sr": "Снимите угао укосо са супротног тротоара без ометања корисника поште.",
      "zh": "从街对面斜拍转角，给来办业务的人留出通道。"
    },
    "nearby": "spirta-house",
    "designationYear": 1997
  },
  "zemun-gymnasium": {
    "highlight": {
      "en": "Use the tree-lined path as foreground and compare the two ends of the formal frontage.",
      "sr": "Искористите стазу са дрвећем као предњи план и упоредите крајеве свечане фасаде.",
      "zh": "以林荫步道为前景，比较正式立面两端的构图。"
    },
    "photography": {
      "en": "Visit outside school arrival or dismissal for a quieter exterior look.",
      "sr": "За мирније разгледање избегните долазак и одлазак ученика.",
      "zh": "避开学生上下学时段，公共步道更适合停留看外观。"
    },
    "nearby": "st-roch-chapel-zemun",
    "designationYear": 1997
  },
  "st-roch-chapel-zemun": {
    "highlight": {
      "en": "Start with the entrance and step around to see the side wall and bell tower.",
      "sr": "Почните од улаза, па заобиђите капелу да видите бочни зид и звоник.",
      "zh": "从入口绕到侧墙和钟塔，从公共步道用两侧树干框住建筑。"
    },
    "photography": {
      "en": "Frame the chapel between tree trunks from a public park path.",
      "sr": "Са јавне стазе кадрирајте капелу између стабала.",
      "zh": ""
    },
    "nearby": "holy-archangels-chapel-zemun",
    "designationYear": 1966
  },
  "holy-archangels-chapel-zemun": {
    "highlight": {
      "en": "Look at the relationship between the front porch and the rising bell tower.",
      "sr": "Погледајте однос трема и високог звоника.",
      "zh": "留意门廊和高钟塔的比例。"
    },
    "photography": {
      "en": "From a side path, photograph the roofline with the porch still visible.",
      "sr": "Са бочне стазе снимите кровну линију тако да се види и трем.",
      "zh": "从侧面步道拍屋脊时把门廊一并留在画面中。"
    },
    "nearby": "st-roch-chapel-zemun",
    "designationYear": 1966
  },
  "st-nicholas-church-zemun": {
    "highlight": {
      "en": "Compare the tower silhouette from lower Njegoševa and a nearby uphill stretch.",
      "sr": "Упоредите силуету торња из доње Његошеве и са оближњег успона.",
      "zh": "从涅戈什街低处和上坡段分别观察塔楼。"
    },
    "photography": {
      "en": "For a vertical frame, leave room above the spire and stay clear of the street.",
      "sr": "У усправном кадру оставите простор изнад торња и останите на тротоару.",
      "zh": "竖幅拍摄时在尖顶上方留白，并站在人行道上。"
    },
    "nearby": "haris-chapel",
    "designationYear": 1948
  },
  "zemun-virgin-church": {
    "highlight": {
      "en": "Follow Rajačićeva until the tower clears the surrounding roofs.",
      "sr": "Пратите Рајачићеву док се торањ не издвоји изнад суседних кровова.",
      "zh": "沿拉亚契切瓦街走到塔楼露出周边屋顶的位置，从街上将塔楼和教堂墙体的弧线一并入镜。"
    },
    "photography": {
      "en": "An exterior shot from the street can include both the tower and the curve of the church wall.",
      "sr": "Са улице у кадар укључите торањ и кривину црквеног зида.",
      "zh": ""
    },
    "nearby": "zemun-magistrate",
    "designationYear": 1992
  },
  "zemun-assumption-church": {
    "highlight": {
      "en": "Walk across Veliki trg before going to the doorway.",
      "sr": "Пре приласка вратима пређите Велики трг.",
      "zh": "先横过大广场，再走近教堂门口。"
    },
    "photography": {
      "en": "A wide view across the square shows the relationship of the tower and the low street wall.",
      "sr": "Широки кадар преко трга показује однос торња и нижег уличног зида.",
      "zh": "从广场对侧用广角记录塔楼与较低街墙的比例。"
    },
    "nearby": "zemun-customs-house",
    "designationYear": 2022
  },
  "zemun-holy-trinity-church": {
    "highlight": {
      "en": "Pause outside the gate to compare the street frontage and the tower seen behind it.",
      "sr": "Станите испред капије да упоредите улично прочеље и торањ иза њега.",
      "zh": "在院门外看外墙与墙后的塔楼，再走到路口换个角度，之后沿原路返回泽蒙中心。"
    },
    "photography": {
      "en": "Walk to the street corner for a second angle before returning toward central Zemun.",
      "sr": "На углу улице погледајте из другог угла пре повратка ка средишту Земуна.",
      "zh": ""
    },
    "nearby": "pavle-horvat-house",
    "designationYear": 1958
  },
  "haris-chapel": {
    "highlight": {
      "en": "Notice how the tall chapel rises above the surrounding graves.",
      "sr": "Погледајте како се висока капела уздиже изнад гробова.",
      "zh": "留意高礼拜堂如何从墓碑间抬升。"
    },
    "photography": {
      "en": "Frame the full front from a cemetery path and keep active burial ceremonies outside the frame.",
      "sr": "Са стазе снимите цело прочеље и не усмеравајте фотоапарат ка обредима.",
      "zh": "从墓园步道拍全正面，避开正在举行的仪式和悼念者。"
    },
    "nearby": "gardos-cemetery",
    "designationYear": 1992
  },
  "gardos-cemetery": {
    "highlight": {
      "en": "Take a cemetery path with room to pass rather than stepping between graves.",
      "sr": "Крећите се проходном гробљанском стазом и не пролазите између гробова.",
      "zh": "走有余地让行的墓园步道，避免穿过墓穴之间。"
    },
    "photography": {
      "en": "Use a wide view of the terrain and memorials only where photography is permitted.",
      "sr": "Где је снимање дозвољено, широким кадром обухватите терен и споменике.",
      "zh": "允许拍摄时，可用广角记录山坡和纪念碑的布局。"
    },
    "nearby": "haris-chapel",
    "designationYear": 1994
  },
  "zemun-evangelical-church": {
    "highlight": {
      "en": "Compare the broad entrance front with the rounded roof above it.",
      "sr": "Упоредите широко улазно прочеље са заобљеним кровом.",
      "zh": "比较宽阔的入口正面和上方弧形屋顶。"
    },
    "photography": {
      "en": "From the public pavement, a straight-on photograph makes the unusual roof geometry clear.",
      "sr": "Снимак спреда, са јавног тротоара, јасно показује геометрију крова.",
      "zh": "从公共人行道正拍，屋顶轮廓更清楚。"
    },
    "nearby": "zemun-holy-trinity-church",
    "designationYear": 2005
  },
  "zemun-synagogue": {
    "highlight": {
      "en": "Read the rhythm of the tall openings on the former synagogue’s side.",
      "sr": "Погледајте ритам високих отвора на бочној страни некадашње синагоге.",
      "zh": "留意昔日会堂侧面高窗的排列。"
    },
    "photography": {
      "en": "Keep to the public street and take a diagonal exterior view that includes the corner.",
      "sr": "Са јавне улице снимите коси поглед који обухвата угао.",
      "zh": "从公共街道斜拍，把建筑转角一并收进去。"
    },
    "nearby": "icko-house"
  },
  "madlenianum-opera": {
    "highlight": {
      "en": "Notice the contemporary glazed entrance in the older street.",
      "sr": "Уочите савремени застакљени улаз у старијој улици.",
      "zh": "这条老街上的玻璃入口很醒目。"
    },
    "photography": {
      "en": "From across Glavna, frame the upper glass front and the entrance marquee together.",
      "sr": "Са супротне стране Главне снимите горње стакло и надстрешницу улаза у истом кадру.",
      "zh": "从主街对侧把上部玻璃立面与入口雨棚拍在一起。"
    },
    "nearby": "zemun-sundial-house"
  },
  "zemun-air-force-building": {
    "highlight": {
      "en": "Use the open square to compare the long horizontal wings with the taller central volume.",
      "sr": "На отвореном тргу упоредите дуга хоризонтална крила са вишим средишњим делом.",
      "zh": "从广场比较横向展开的两翼和较高的中部体量。"
    },
    "photography": {
      "en": "Observe any photography restrictions posted around the building.",
      "sr": "Поштујте истакнута ограничења фотографисања.",
      "zh": "拍摄前查看现场有无摄影限制。"
    },
    "nearby": "madlenianum-opera",
    "designationYear": 2007
  },
  "zemun-sundial-house": {
    "highlight": {
      "en": "Start below the house number, then look for the dial higher on the façade.",
      "sr": "Крените од кућног броја па потражите сат више на фасади.",
      "zh": "先找门牌，再抬头找日晷。"
    },
    "photography": {
      "en": "Use a zoom from the sidewalk so the dial can fill the frame without stepping into traffic.",
      "sr": "Користите зум са тротоара да сат испуни кадар без изласка на коловоз.",
      "zh": "用手机变焦从人行道拍细部，无需走到车道取景。"
    },
    "nearby": "spirta-house",
    "designationYear": 1951
  },
  "afrodita-bialo-house": {
    "highlight": {
      "en": "Look above the shopfronts for the ornament surrounding the windows.",
      "sr": "Потражите украсе око прозора изнад излога.",
      "zh": "商铺上方的窗框装饰值得细看。"
    },
    "photography": {
      "en": "Include the ground floor in one photo and take a separate detail of the upper façade.",
      "sr": "Једном фотографијом обухватите приземље, а другом детаљ фасаде спрата.",
      "zh": "先拍一张带底层店面的整体照，再单独拍楼上细节。"
    },
    "nearby": "branko-radicevic-square",
    "designationYear": 1951
  },
  "burovac-house": {
    "highlight": {
      "en": "Notice the small scale of the house against the hillside street.",
      "sr": "Уочите скромну величину куће у улици на падини.",
      "zh": "观察小宅邸与斜坡街道的比例。"
    },
    "photography": {
      "en": "A side angle reveals the gable and the grade of Visoka. Conditions may differ from the archival photograph.",
      "sr": "Бочни угао открива забат и нагиб Високе. Затечено стање може се разликовати од архивске фотографије.",
      "zh": "侧面角度能同时看到山墙与维索卡街坡度，现场可能与历史实景照片不同。"
    },
    "nearby": "st-nicholas-church-zemun",
    "designationYear": 1981
  },
  "markovic-family-house": {
    "highlight": {
      "en": "Use the square for the longer façade and Gospodska for the turn around the corner.",
      "sr": "Са трга погледајте дужу фасаду, а из Господске заокрет иза угла.",
      "zh": "从广场看长立面，再转入戈斯波德斯卡街观察转角。"
    },
    "photography": {
      "en": "The diagonal view ties both addresses to a single building.",
      "sr": "Коси поглед повезује обе адресе са истом зградом.",
      "zh": "斜拍能说明两个地址对应的是同一栋房屋。"
    },
    "nearby": "zemun-magistrate",
    "designationYear": 1965
  },
  "sava-nedeljkovic-house": {
    "highlight": {
      "en": "A diagonal view from Cara Dušana distinguishes the house from the adjoining properties.",
      "sr": "Коси поглед из Цара Душана издваја кућу од суседних објеката.",
      "zh": "从察拉杜沙纳街斜看，能把宅邸与相邻房屋区别开。"
    },
    "photography": {
      "en": "Look above parked cars at the door and window rhythm.",
      "sr": "Изнад паркираних возила погледајте распоред врата и прозора.",
      "zh": "可越过停放车辆的视线，观察门窗的排列。"
    },
    "nearby": "queen-maria-childrens-home",
    "designationYear": 1997
  },
  "pavle-horvat-house": {
    "highlight": {
      "en": "Look at the full elevation before studying the details above the ground floor.",
      "sr": "Погледајте целу фасаду пре детаља изнад приземља.",
      "zh": "先看完整立面，再看底层上方的细部。"
    },
    "photography": {
      "en": "Step back only where pavement width and traffic allow.",
      "sr": "Одмакните се само тамо где ширина тротоара и саобраћај то дозвољавају.",
      "zh": "只有在人行道宽度和交通允许时才后退取景。"
    },
    "nearby": "zemun-holy-trinity-church",
    "designationYear": 1997
  },
  "orthodox-community-house-zemun": {
    "highlight": {
      "en": "Look for the building’s street entrance independently of the nearby church tower.",
      "sr": "Потражите улични улаз зграде, посебно од оближњег црквеног торња.",
      "zh": "先辨认会馆的独立沿街入口，再看附近教堂塔楼。"
    },
    "photography": {
      "en": "A wider view from Svetosavska puts this community building into the streetscape.",
      "sr": "Шири поглед из Светосавске показује положај црквеног дома у улици.",
      "zh": "从圣萨瓦街拍宽幅，可以交代会馆在街道上的位置。"
    },
    "nearby": "icko-house",
    "designationYear": 1994
  },
  "queen-maria-childrens-home": {
    "highlight": {
      "en": "Compare the institutional scale with the smaller houses farther down Cara Dušana.",
      "sr": "Упоредите димензије установе са мањим кућама ниже у Цара Душана.",
      "zh": "把儿童院的建筑尺度与察拉杜沙纳街较小的住宅对照。"
    },
    "photography": {
      "en": "Use the public sidewalk for an exterior view and avoid photographing occupants.",
      "sr": "Снимите спољашњост са јавног тротоара без фотографисања корисника зграде.",
      "zh": "从公共人行道拍外观，避免拍摄楼内人员。"
    },
    "nearby": "sava-nedeljkovic-house",
    "designationYear": 2007
  },
  "branko-radicevic-square": {
    "highlight": {
      "en": "Use the foot of the steps to read the change from square to hillside.",
      "sr": "Са подножја степеница осмотрите прелаз са трга на падину.",
      "zh": "从台阶底部观察广场到山坡的变化。"
    },
    "photography": {
      "en": "Frame the stair approach and the opening of the square as two different views.",
      "sr": "Засебно снимите прилаз степеницама и отворени простор трга.",
      "zh": "可分别拍上坡的台阶入口和广场开阔的一面。"
    },
    "nearby": "afrodita-bialo-house"
  },
  "zemun-international-pier": {
    "highlight": {
      "en": "Use the public quay to compare the fixed bank with the floating landing.",
      "sr": "Са јавног кеја упоредите чврсту обалу и плутајући вез.",
      "zh": "从公共河岸对照固定岸线与浮动泊位。"
    },
    "photography": {
      "en": "Photograph along the river so the gangway, moorings and skyline stay in frame.",
      "sr": "Кадрирајте дуж реке тако да се виде приступни мост, везови и хоризонт.",
      "zh": "沿河斜拍，可把舷梯、系泊设施与远处天际线一起收进画面。"
    },
    "nearby": "great-war-island"
  },
  "great-war-island": {
    "highlight": {
      "en": "Read the wooded island edge from the quay before looking for the Lido beach.",
      "sr": "Са кеја прво погледајте шумовиту обалу острва, па потражите плажу Лидо.",
      "zh": "先在河岸观察林木覆盖的岛缘，再找丽都海滩。"
    },
    "photography": {
      "en": "Use a wider river view from the bank and keep to authorised areas if a crossing is open.",
      "sr": "Са обале снимите шири поглед и крећите се дозвољеним зонама ако је прелаз отворен.",
      "zh": "可在岸上拍宽幅河景。若通道开放，过河后只在允许区域活动。"
    },
    "nearby": "zemun-international-pier"
  }
};
