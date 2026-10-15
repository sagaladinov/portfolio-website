// Все тексты сайта. Правьте здесь — компоненты подхватят изменения.
// Строки могут содержать простой HTML: <strong>, <em>, <b>.

export type Lang = "ru" | "en";
/** [заголовок, описание, где проявился, якорь] */
export type Skill = [string, string, string, string];

const dict = {
ru:{
 "p.name":"Султан Сагаладинов","p.role":"Проектный менеджер",
 "p.bio":"Я проектный менеджер с 2-летним опытом превращения амбициозных идей в успешные цифровые продукты.\n\nРуководил AI-платформой для MedTech (SaaS) от discovery до пилотного внедрения в 20+ клиниках: привлёк первых платящих клиентов и выстроил регулярную выручку. Довёл 4 цифровых продукта от идеи до запуска в FinTech, MedTech и BeautyTech.",
 "b.q.t":"Необанк, который превращает покупки в игру","b.q.s":"Карта мерчантов · QR-оплата · геймификация","b.open":"Читать кейс",
 "b.st.t":"Открыт к предложениям","b.st.s":"Астана · Remote · Relocation",
 "b.n1":"продукта в портфеле","b.n2":"индустрии",
 "b.a.t":"AI-ассистент для врачей","b.a.s":"38 клиник · 52 врача · 3 региона Казахстана","b.a.f1":"Аудиоанализ","b.a.f2":"Диаризация","b.a.f3":"Готовый отчёт",
 "b.b.t":"Маркетплейс бьюти-услуг","b.b.s":"MVP из 6 блоков, карта салонов, пилот",
 "b.v.t":"Парки развлечений в одном приложении","b.v.s":"Редизайн, достижения, детский профиль",
 "b.projects":"Проекты","b.int":"Стажировки","b.kl":"Куала-Лумпур",
 "i1.when":"апр 2024 – авг 2024","i1.l":["Помогал команде Business Development: решал проблемы и делал лендинги и страницы офферов","Улучшил внутренний сайт Atlas, чтобы им было удобно пользоваться разным отделам"],
 "i2.when":"дек 2023 – фев 2024","i2.l":["Участвовал в создании админ-панели для приложения OkOk","Вёл маркетинг и соцсети приложения OkOk"],"b.edu":"Образование","b.edu.k":"Бакалавриат","b.edu.loc":"Куала-Лумпур, Малайзия","b.edu.deg":"B.Sc. Computer Science · специализация Mobile Development","b.cert.k":"Сертификаты","b.about":"Обо мне","b.contacts":"Контакты","b.sk":"Что я делаю","b.skl":["Discovery","WBS и декомпозиция","Интеграции и API","GA4 и воронки","Геймификация","Запуск в App Store","Маркетплейсы"],
 "b.tg":"Написать в Telegram","b.li":"Профиль в LinkedIn","b.lib":"Открыть","b.msg":"Написать","b.mail":"Написать на почту","b.cv":"Резюме","b.cvs":"PDF, 2 страницы","b.cvb":"Скачать","b.soon":"Скоро",
 "case.back":"Все проекты","case.more":"Вернуться к проектам",
 "nav.work":"Кейсы","nav.skills":"Навыки","nav.contact":"Контакт",
 "cta.cv":"CV","cta.work":"Смотреть кейсы","cta.cv2":"Скачать CV",
 "hero.status":"Открыт к предложениям · Астана · Remote · Relocation",
 "hero.h1a":"Четыре продукта.","hero.h1b":"Три индустрии.",
 "hero.lede":"Единственный PM в кросс-функциональной команде Rama. Веду FinTech, MedTech и Beauty-tech продукты от идеи до релиза.",
 "st.1":"продукта в портфеле одновременно","st.2":"индустрии: FinTech, MedTech, Beauty-tech","st.3":"PM на всю кросс-функциональную команду","st.4":"инженерный бэкграунд: говорю с разработкой на одном языке",
 "q.kicker":"qmeta · FinTech","q.title":"Необанк, который превращает покупки в игру.",
 "q.lede":"Мобильный банк и карта мерчантов на базе Halyk BaaS. Каждая оплата становится сигналом для персональных наград и заданий.",
 "q.t1":"Роль","q.v1":"Проектный менеджер. От ТЗ до публикации в App Store",
 "q.t2":"Команда","q.v2":"Tech lead, 2 системных аналитика, инфобезопасность, разработка",
 "q.t3":"Скоуп","q.v3":"Мобильное приложение из 5 модулей и админ-панель с ролями",
 "q.t4":"Интеграция","q.v4":"Halyk BaaS через site-to-site IPsec VPN",
 "q.pk":"Проблема","q.problem":"Банк видит каждую покупку клиента. <em>Но почти не использует это, чтобы привести его к партнёру ещё раз.</em>",
 "ph.pin":"Введите PIN","ph.linked":"Этот PIN откроет и банк","ph.search":"Кофе, спорт, кино…","ph.c1":"Партнёры","ph.c2":"Рядом","ph.c3":"Кэшбэк",
 "ph.m":"Кофейня на Достык","ph.md":"350 м · открыто до 23:00","ph.cb":"Кэшбэк 100% на второй кофе",
 "ph.qr":"Оплата по QR","ph.ach":"Цепочка выполнена","ph.box":"Лутбокс открыт",
 "ph.l1":"Кофейня","ph.l2":"Супермаркет","ph.l3":"Кофешоп",
 "s1.n":"Решение 1","s1.h":"Один PIN на два входа.",
 "s1.p":"В продукте два контура авторизации: вход qmeta (телефон → OTP → PIN) и онбординг Halyk через SDK. Я спроектировал кросс-авторизацию: <strong>PIN задаётся один раз в qmeta и открывает банковский виджет.</strong> Для пользователя это один вход.",
 "s2.n":"Решение 2","s2.h":"Карта, которая знает, где вы платите.",
 "s2.p":"Карта мерчантов с поиском, фильтрами и партнёрами. После оплаты по QR банк возвращает <strong>БИН и terminal ID мерчанта.</strong> На этом держится атрибуция блогеров и финансовая часть кабинета мерчанта.",
 "s3.n":"Решение 3","s3.h":"QR-оплата, разобранная по шагам.",
 "s3.p":"Декомпозировал пакет работ по WBS: доступ к камере, UI сканера, <strong>парсинг TLV по EMVCo MPM</strong>, определение мерчанта, каталог ошибок, аналитика. Отдельно описали поведение для QR других банков.",
 "s4.n":"Решение 4","s4.h":"Транзакция становится игрой.",
 "s4.p":"MCC и БИН из каждой транзакции питают геймификацию: лутбоксы, ачивки со сроком действия, статусы, которые снижаются при бездействии. <strong>Партнёр платит за подтверждённую оплату, а не за показ.</strong>",
 "sc.a":"Мобильное приложение","sc.al":["<b>Главная:</b> места рядом, афиша, партнёры","<b>Онлайн-банк Halyk:</b> онбординг, переводы, кредитование","<b>Карта мерчантов:</b> поиск, фильтры, партнёры","<b>QR-оплата</b>","<b>Профиль:</b> данные из банка, настройки интернет-банкинга"],
 "sc.b":"Админ-панель и запуск","sc.bl":["<b>Роли:</b> admin, merchant, compliance","<b>Мерчанты,</b> отчёты, заявки, офферы","<b>Блогеры:</b> атрибуция продаж по БИН","<b>Push-инфраструктура:</b> APNs и FCM","<b>Запуск:</b> юридический пакет, удаление аккаунта, TestFlight, App Store"],
 "w.k":"Другие продукты","w.h":"Разные рынки. Один подход.",
 "a.what":"AI-платформа для врачей.","a.l":["Воронка событий GA4 для лендинга: этапы формы, CTA, сегменты по ролям","16 этапов разработки в карточках с колонками Design, Engineering, BA/QA","Гипотеза Telegram mini app: запись диалога врач–пациент и проверка спроса на отдельное приложение"],
 "b.what":"Маркетплейс бьюти-услуг.","b.l":["MVP из 6 блоков: карта салонов, кабинет салона, комиссии, платежи, Shopify, пилот","Карта салонов на Mapbox GL и PostGIS","Пилот с Amaryllis House of Beauty и онбординг вендоров"],
 "v.what":"Приложение для поиска парков развлечений, покупки билетов и бонусов.","v.l":["Полный редизайн приложения","Система достижений и детский профиль","Сторис и баннеры в формате Instagram"],
 "soon":"Полный кейс скоро",
 "k.k":"Навыки","k.h":"Что я приношу команде.",
 "sk":[
  ["Discovery и гипотезы","Проверяю спрос до разработки. Telegram mini app вместо отдельного мобильного приложения.","Ascle","#work"],
  ["Декомпозиция","WBS, пакеты работ, этапы с явными блокерами и ролями.","qmeta","#qmeta"],
  ["Интеграции и архитектура","BaaS, VPN, callback-паттерны, SDK против headless API. CS-диплом, AWS, Java.","qmeta","#qmeta"],
  ["Продуктовая аналитика","Воронки GA4, события CTA, сегментация аудитории по ролям.","Ascle","#work"],
  ["Геймификация и удержание","Лутбоксы, ачивки, статусы и цепочки заданий с оплатой партнёром за результат.","qmeta · Avatariya","#qmeta"],
  ["Маркетплейсы и запуск","MVP-скоуп, комиссионная модель, пилот с партнёром, публикация в App Store.","Beautobe · qmeta","#work"]
 ],
 "c.h":"Давайте поговорим.","c.lede":"Ищу роль проектного менеджера в продуктовой команде. Отвечу в течение дня.",
 "c.copy":"Скопировать","c.copied":"Скопировано","c.cv":"CV в PDF — скоро","f.loc":"Астана, Казахстан","f.terms":"Условия использования"
},
en:{
 "p.name":"Sultan Sagaladinov","p.role":"Project Manager",
 "p.bio":"I am a Project Manager with 2 years of experience turning ambitious ideas into successful digital products.\n\nI've led an AI-powered MedTech SaaS platform from discovery to pilot deployment across 20+ clinics, securing its first paying customers and establishing recurring revenue. Successfully delivered 4 digital products end-to-end across FinTech, MedTech, and BeautyTech.",
 "b.q.t":"A neobank that turns purchases into a game","b.q.s":"Merchant map · QR payments · gamification","b.open":"Read the case",
 "b.st.t":"Open to offers","b.st.s":"Astana · Remote · Relocation",
 "b.n1":"products in the portfolio","b.n2":"industries",
 "b.a.t":"An AI assistant for doctors","b.a.s":"38 clinics · 52 doctors · 3 regions of Kazakhstan","b.a.f1":"Audio capture","b.a.f2":"Diarization","b.a.f3":"Ready report",
 "b.b.t":"A beauty services marketplace","b.b.s":"6-block MVP, salon map, pilot",
 "b.v.t":"Amusement parks in one app","b.v.s":"Redesign, achievements, child profile",
 "b.projects":"Projects","b.int":"Internships","b.kl":"Kuala Lumpur",
 "i1.when":"Apr 2024 – Aug 2024","i1.l":["Supported the Business Development team by resolving issues and delivering landing and offer pages","Enhanced the internal website (Atlas), improving usability across departments"],
 "i2.when":"Dec 2023 – Feb 2024","i2.l":["Played an integral role in building the admin panel for the OkOk app","Led marketing initiatives, managing social media for the OkOk app"],"b.edu":"Education","b.edu.k":"Bachelor's degree","b.edu.loc":"Kuala Lumpur, Malaysia","b.edu.deg":"B.Sc. Computer Science · Mobile Development track","b.cert.k":"Certifications","b.about":"About","b.contacts":"Contact","b.sk":"What I do","b.skl":["Discovery","WBS and decomposition","Integrations and APIs","GA4 and funnels","Gamification","App Store launch","Marketplaces"],
 "b.tg":"Message me on Telegram","b.li":"Connect on LinkedIn","b.lib":"Connect","b.msg":"Message","b.mail":"Email me","b.cv":"Resume","b.cvs":"PDF, 2 pages","b.cvb":"Download","b.soon":"Soon",
 "case.back":"All projects","case.more":"Back to projects",
 "nav.work":"Work","nav.skills":"Skills","nav.contact":"Contact",
 "cta.cv":"CV","cta.work":"See the work","cta.cv2":"Download CV",
 "hero.status":"Open to offers · Astana · Remote · Relocation",
 "hero.h1a":"Four products.","hero.h1b":"Three industries.",
 "hero.lede":"The only PM on a cross-functional team at Rama. I take FinTech, MedTech and Beauty-tech products from idea to release.",
 "st.1":"products in the portfolio at once","st.2":"industries: FinTech, MedTech, Beauty-tech","st.3":"PM for the whole cross-functional team","st.4":"engineering background, so I speak the team's language",
 "q.kicker":"qmeta · FinTech","q.title":"A neobank that turns purchases into a game.",
 "q.lede":"A mobile bank and merchant map built on Halyk BaaS. Every payment becomes a signal for personal rewards and quests.",
 "q.t1":"Role","q.v1":"Project Manager. From spec to App Store release",
 "q.t2":"Team","q.v2":"Tech lead, 2 system analysts, infosec, engineering",
 "q.t3":"Scope","q.v3":"Mobile app with 5 modules and a role-based admin panel",
 "q.t4":"Integration","q.v4":"Halyk BaaS over a site-to-site IPsec VPN",
 "q.pk":"The problem","q.problem":"A bank sees every purchase. <em>It rarely uses that to bring the customer back to a partner.</em>",
 "ph.pin":"Enter PIN","ph.linked":"This PIN unlocks the bank too","ph.search":"Coffee, sport, cinema…","ph.c1":"Partners","ph.c2":"Nearby","ph.c3":"Cashback",
 "ph.m":"Coffee on Dostyk","ph.md":"350 m · open until 23:00","ph.cb":"100% cashback on a 2nd coffee",
 "ph.qr":"Pay by QR","ph.ach":"Chain complete","ph.box":"Loot box opened",
 "ph.l1":"Coffee shop","ph.l2":"Supermarket","ph.l3":"Café",
 "s1.n":"Decision 1","s1.h":"One PIN for two sign-ins.",
 "s1.p":"The product has two auth flows: qmeta sign-in (phone → OTP → PIN) and Halyk onboarding through an SDK. I designed cross-authorization: <strong>the PIN is set once in qmeta and unlocks the banking widget.</strong> For the user it is one sign-in.",
 "s2.n":"Decision 2","s2.h":"A map that knows where you pay.",
 "s2.p":"A merchant map with search, filters and partners. After a QR payment the bank returns the <strong>merchant's BIN and terminal ID.</strong> Blogger attribution and the merchant dashboard's finance view both depend on it.",
 "s3.n":"Decision 3","s3.h":"QR payments, broken down step by step.",
 "s3.p":"I split the work package using WBS: camera permission, scanner UI, <strong>TLV parsing per EMVCo MPM</strong>, merchant resolution, an error catalog and analytics. We also defined behavior for other banks' QR codes.",
 "s4.n":"Decision 4","s4.h":"A transaction becomes a game.",
 "s4.p":"MCC and BIN from every transaction feed the gamification: loot boxes, achievements that expire, and statuses that decay with inactivity. <strong>Partners pay for a confirmed payment, not an impression.</strong>",
 "sc.a":"Mobile app","sc.al":["<b>Home:</b> places nearby, events, partners","<b>Halyk online banking:</b> onboarding, transfers, lending","<b>Merchant map:</b> search, filters, partners","<b>QR payments</b>","<b>Profile:</b> bank-provided data, online banking settings"],
 "sc.b":"Admin panel and launch","sc.bl":["<b>Roles:</b> admin, merchant, compliance","<b>Merchants,</b> reports, applications, offers","<b>Bloggers:</b> sales attribution by BIN","<b>Push infrastructure:</b> APNs and FCM","<b>Launch:</b> legal docs, account deletion, TestFlight, App Store"],
 "w.k":"More products","w.h":"Different markets. One approach.",
 "a.what":"An AI platform for doctors.","a.l":["GA4 event funnel for the landing page: form stages, CTAs, role-based segments","16 development stages as cards with Design, Engineering and BA/QA columns","Telegram mini app hypothesis: record doctor–patient conversations and test demand for a native app"],
 "b.what":"A marketplace for beauty services.","b.l":["MVP in 6 blocks: salon map, salon dashboard, commissions, payments, Shopify, pilot","Salon map on Mapbox GL and PostGIS","Pilot with Amaryllis House of Beauty and vendor onboarding"],
 "v.what":"An app to find amusement parks, book tickets and earn bonuses.","v.l":["Full app redesign","Achievements system and a child profile","Instagram-style stories and banners"],
 "soon":"Full case study coming soon",
 "k.k":"Skills","k.h":"What I bring to a team.",
 "sk":[
  ["Discovery and hypotheses","I test demand before building. A Telegram mini app instead of a separate native app.","Ascle","#work"],
  ["Decomposition","WBS, work packages, stages with explicit blockers and owners.","qmeta","#qmeta"],
  ["Integrations and architecture","BaaS, VPN, callback patterns, SDK vs headless API. CS degree, AWS, Java.","qmeta","#qmeta"],
  ["Product analytics","GA4 funnels, CTA events, role-based audience segments.","Ascle","#work"],
  ["Gamification and retention","Loot boxes, achievements, statuses and quest chains where partners pay for results.","qmeta · Avatariya","#qmeta"],
  ["Marketplaces and launch","MVP scope, commission model, a partner pilot, App Store release.","Beautobe · qmeta","#work"]
 ],
 "c.h":"Let's talk.","c.lede":"I'm looking for a Project Manager role on a product team. I reply within a day.",
 "c.copy":"Copy","c.copied":"Copied","c.cv":"PDF CV coming soon","f.loc":"Astana, Kazakhstan","f.terms":"Terms & Conditions"
}};

export type Entry = string | string[] | Skill[];
export const T = dict as unknown as Record<Lang, Record<string, Entry>>;

/** Настройки сайта */
export const site = {
  name: "Sultan Sagaladinov",
  email: "sagaladinovsultan@gmail.com",
  // Резюме: две версии. Положите PDF в /public и укажите пути. Пока null — кнопка «Скоро».
  // Если одной версии нет, кнопка покажет ту, что есть.
  cvUrl: { ru: "/cv-ru.pdf", en: "/cv-en.pdf" } as { ru: string | null; en: string | null },
  // Фото: положите файл в /public/avatar.jpg и поставьте "/avatar.jpg". Пока null — круг с инициалом.
  avatar: "/avatar-square.jpg" as string | null,
  // Добавьте ссылки, когда будут готовы: они появятся в блоке контакта.
  links: [
    { label: "Telegram", handle: "@sula373", href: "https://t.me/sula373" },
    { label: "LinkedIn", handle: "linkedin.com/in/sagaladinov", href: "https://www.linkedin.com/in/sagaladinov/" },
  ] as { label: string; handle: string; href: string }[],
};
