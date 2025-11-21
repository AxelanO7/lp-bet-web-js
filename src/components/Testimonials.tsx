import { Avatar, Card, CardBody, Chip } from "@nextui-org/react";
import { Quote } from "lucide-react";
import { Lang } from "./LanguageToggle";

const testimonials = [
  {
    name: "Sakura Ito",
    title: "Creative Director, Tokyo",
    quote:
      "Every touchpoint felt bespoke. The crew anticipated our needs before we even asked—this is true five-star hospitality at sea.",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    rating: 5,
  },
  {
    name: "Michael Tan",
    title: "Tech Founder, Singapore",
    quote:
      "The Nusa Penida charter was cinematic. Drone footage, sunset deck dinner, and a concierge who handled everything seamlessly.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Dewi Hartono",
    title: "Wedding Planner, Jakarta",
    quote:
      "They transformed our elopement shoot into a film set—locations, permits, glam team, all-in. Clients were blown away.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
];

export const Testimonials = ({ lang }: { lang: Lang }) => {
  const title = lang === "en" ? "Guest stories" : lang === "id" ? "Cerita tamu" : "贵宾故事";
  const subtitle =
    lang === "en"
      ? "What discerning travelers say about their time with Balieternatours."
      : lang === "id"
        ? "Kata para traveler premium tentang pengalaman mereka bersama Balieternatours."
        : "高端旅客眼中的巴厘专属体验。";

  return (
    <section id="testimonials" className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2 text-center">
          <Chip color="secondary" variant="flat" className="mx-auto" startContent={<Quote className="h-4 w-4" />}>
            {lang === "en" ? "Testimonials" : lang === "id" ? "Testimoni" : "评价"}
          </Chip>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{title}</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">{subtitle}</p>
        </div>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
          {testimonials.map((item) => (
            <Card key={item.name} className="glass-card min-w-[320px] max-w-md flex-1">
              <CardBody className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Avatar src={item.avatar} name={item.name} size="md" />
                  <div>
                    <p className="text-base font-semibold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-300">{item.title}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">“{item.quote}”</p>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
