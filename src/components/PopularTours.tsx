import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { Star } from "lucide-react";
import { Lang } from "./LanguageToggle";

const tours = [
  {
    key: "penida",
    title: "Nusa Penida Private Yacht",
    description: "Cliffside vistas, hidden lagoons, and sunset dinner on deck.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    price: "$320",
    rating: 4.9,
    duration: "8h",
    span: "lg:col-span-2",
  },
  {
    key: "ubud",
    title: "Ubud Culture & Rice Terraces",
    description: "Helicopter + chauffeured drive through emerald paddies.",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    price: "$180",
    rating: 4.8,
    duration: "6h",
    span: "lg:row-span-2",
  },
  {
    key: "tanah-lot",
    title: "Tanah Lot Golden Hour",
    description: "Iconic sea temple with VIP seating for the perfect sunset.",
    image: "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?auto=format&fit=crop&w=1200&q=80",
    price: "$140",
    rating: 4.7,
    duration: "4h",
  },
  {
    key: "labuan-bajo",
    title: "Labuan Bajo & Komodo Escape",
    description: "Private seaplane, luxury phinisi, and pink beach picnic.",
    image: "https://images.unsplash.com/photo-1526481280695-3c469c2f3a32?auto=format&fit=crop&w=1200&q=80",
    price: "$540",
    rating: 5,
    duration: "2D1N",
  },
  {
    key: "canggu",
    title: "Canggu Sunrise Surf & Spa",
    description: "Dawn surf session followed by signature bamboo spa ritual.",
    image: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    price: "$220",
    rating: 4.85,
    duration: "1 Day",
    span: "lg:col-span-2",
  },
];

const titles: Record<Lang, string> = {
  en: "Signature experiences",
  id: "Pengalaman unggulan",
  zh: "奢享推荐行程",
};

export const PopularTours = ({ lang }: { lang: Lang }) => {
  return (
    <section id="tours" className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3 text-center">
          <Chip variant="flat" color="success" className="mx-auto bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-200">
            {lang === "en" ? "Bento layout" : lang === "id" ? "Bento layout" : "创意编排"}
          </Chip>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">{titles[lang]}</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            {lang === "en"
              ? "Curated luxury routes with balanced adventure, comfort, and iconic views."
              : lang === "id"
                ? "Rute mewah terkurasi dengan paduan petualangan, kenyamanan, dan panorama ikonik."
                : "精选奢华路线，兼顾冒险、舒适与绝美景观。"}
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
                <h3 className="text-2xl font-semibold leading-snug">{tour.title}</h3>
                <p className="text-sm text-slate-100/90">{tour.description}</p>
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
