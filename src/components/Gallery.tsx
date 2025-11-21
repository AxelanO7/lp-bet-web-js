import { Card, CardBody, Chip } from "@nextui-org/react";
import { Camera } from "lucide-react";
import { Lang } from "./LanguageToggle";

const galleryItems = [
  {
    title: "Kelingking Cliff",
    location: "Nusa Penida",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sekumpul Waterfall",
    location: "North Bali",
    image: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Diamond Beach",
    location: "Nusa Penida",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Amed Sunrise",
    location: "East Bali",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  },
];

export const Gallery = ({ lang }: { lang: Lang }) => {
  const title = lang === "en" ? "Destination snapshots" : lang === "id" ? "Cuplikan destinasi" : "目的地掠影";
  const subtitle =
    lang === "en"
      ? "Preview the sights included in our best-selling Bali and island-hopping packages."
      : lang === "id"
        ? "Intip lokasi yang masuk dalam paket tur Bali dan island hopping terlaris kami."
        : "抢先浏览热门巴厘与跳岛套餐中的亮点景点。";

  return (
    <section id="gallery" className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2 text-center">
          <Chip startContent={<Camera className="h-4 w-4" />} variant="flat" color="primary" className="mx-auto">
            {lang === "en" ? "Destinations" : lang === "id" ? "Destinasi" : "目的地"}
          </Chip>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{title}</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">{subtitle}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <Card key={item.title} isHoverable radius="lg" className={`overflow-hidden ${index === 0 ? "lg:col-span-2" : ""}`}>
              <CardBody className="p-0">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm uppercase tracking-wide text-white/80">{item.location}</p>
                    <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
