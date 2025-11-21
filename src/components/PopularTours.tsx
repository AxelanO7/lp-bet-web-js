import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { Star } from "lucide-react";
import { Lang } from "./LanguageToggle";

type Tour = {
  key: string;
  image: string;
  price: string;
  rating: number;
  duration: string;
  span?: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
};

const tours: Tour[] = [
  {
    key: "penida",
    title: {
      en: "Nusa Penida Day Trip",
      id: "Trip Sehari Nusa Penida",
      zh: "努沙佩尼达一日游",
    },
    description: {
      en: "Fast boat, island tour, photo spots, and hosted lunch by the beach.",
      id: "Fast boat, tur keliling pulau, spot foto, dan makan siang di tepi pantai.",
      zh: "含快艇、岛上包车、网红打卡点与海边午餐。",
    },
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    price: "$320",
    rating: 4.9,
    duration: "1 Day",
    span: "lg:col-span-2",
  },
  {
    key: "ubud",
    title: {
      en: "Ubud Culture & Rice Fields",
      id: "Budaya & Sawah Ubud",
      zh: "乌布文化与梯田",
    },
    description: {
      en: "Visit temples, coffee plantations, and Tegallalang with a local guide.",
      id: "Kunjungi pura, kebun kopi, dan Tegallalang bersama pemandu lokal.",
      zh: "本地向导陪同参观寺庙、咖啡园与德哥拉朗梯田。",
    },
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    price: "$180",
    rating: 4.8,
    duration: "10h",
    span: "lg:row-span-2",
  },
  {
    key: "tanah-lot",
    title: {
      en: "Tanah Lot Sunset Tour",
      id: "Tur Senja Tanah Lot",
      zh: "海神庙日落行",
    },
    description: {
      en: "Catch golden hour, stroll the market, and enjoy seaside dinner.",
      id: "Nikmati golden hour, jelajah pasar, dan makan malam di tepi laut.",
      zh: "黄金时段观景，逛市集并享用海边晚餐。",
    },
    image: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1200&q=80",
    price: "$140",
    rating: 4.7,
    duration: "6h",
  },
  {
    key: "labuan-bajo",
    title: {
      en: "Labuan Bajo & Komodo Cruise",
      id: "Labuan Bajo & Pelayaran Komodo",
      zh: "拉布汉巴焦科莫多巡航",
    },
    description: {
      en: "Flights, phinisi cruise, Komodo park visit, and Pink Beach snorkeling.",
      id: "Tiket pesawat, pelayaran phinisi, kunjungan Taman Komodo, dan snorkeling Pink Beach.",
      zh: "含机票、传统帆船巡航、科莫多国家公园与粉红沙滩浮潜。",
    },
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1200&q=80",
    price: "$540",
    rating: 5,
    duration: "3D2N",
  },
  {
    key: "canggu",
    title: {
      en: "Canggu Surf & Spa",
      id: "Surfing & Spa Canggu",
      zh: "仓古冲浪与水疗",
    },
    description: {
      en: "Morning surf lesson, brunch cafe hop, and bamboo spa session.",
      id: "Kelas surfing pagi, brunch di kafe, dan sesi spa bambu.",
      zh: "早晨冲浪课程、网红早午餐与竹屋水疗。",
    },
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    price: "$220",
    rating: 4.85,
    duration: "1 Day",
    span: "lg:col-span-2",
  },
];

const titles: Record<Lang, string> = {
  en: "Top-selling packages",
  id: "Paket terlaris",
  zh: "热门套餐",
};

export const PopularTours = ({ lang }: { lang: Lang }) => {
  return (
    <section id="tours" className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 text-center">
          <Chip variant="flat" color="success" className="mx-auto bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200">
            {lang === "en" ? "Popular picks" : lang === "id" ? "Pilihan populer" : "热卖精选"}
          </Chip>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">{titles[lang]}</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            {lang === "en"
              ? "Easy-to-book Bali and island packages with transport, guides, and curated stops."
              : lang === "id"
                ? "Paket Bali dan island hopping lengkap dengan transport, pemandu, dan pemberhentian kurasi."
                : "一键预订巴厘及跳岛行程，含交通、向导与精选站点。"}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <Card
              key={tour.key}
              isPressable
              radius="lg"
              className={`group relative overflow-hidden border-0 bg-white/60 shadow-xl backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-slate-900/70 ${tour.span ?? ""}`}
            >
              <CardHeader className="absolute inset-0 z-0 h-full w-full p-0">
                <div className="h-full w-full">
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 70%), url(${tour.image})` }}
                  />
                </div>
              </CardHeader>
              <CardBody className="relative z-10 flex h-full flex-col justify-end gap-3 text-white">
                <div className="flex items-center gap-3">
                  <Chip variant="flat" color="warning" className="bg-white/20 text-white backdrop-blur">
                    {tour.duration}
                  </Chip>
                  <div className="flex items-center gap-1 text-sm text-amber-300">
                    <Star className="h-4 w-4 fill-amber-300" />
                    <span>{tour.rating}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold leading-snug">{tour.title[lang]}</h3>
                <p className="text-sm text-slate-100/90">{tour.description[lang]}</p>
                <div className="flex items-center justify-between rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  <span>{tour.price}</span>
                  <span className="text-slate-200">Premium</span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
