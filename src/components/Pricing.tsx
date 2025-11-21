import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Lang } from "./LanguageToggle";

const plans = [
  {
    name: "Essential",
    price: "$140",
    perks: ["Fast boat tickets", "Hotel pickup", "On-ground liaison"],
    badge: "Popular",
  },
  {
    name: "Signature",
    price: "$320",
    perks: ["Private yacht", "Sunset dinner", "Pro photo & drone"],
    badge: "Best Value",
    highlight: true,
  },
  {
    name: "Executive",
    price: "$540",
    perks: ["Seaplane transfer", "Luxury villa", "24/7 concierge"],
  },
];

export const Pricing = ({ lang }: { lang: Lang }) => {
  const title = lang === "en" ? "Pricing" : lang === "id" ? "Harga" : "套餐价格";
  const subtitle =
    lang === "en"
      ? "Transparent luxury bundles—flexible for private charters or groups."
      : lang === "id"
        ? "Paket mewah transparan—fleksibel untuk charter privat atau grup."
        : "清晰透明的奢华套餐，可灵活定制私享或团组。";

  return (
    <section id="pricing" className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2 text-center">
          <Chip startContent={<ShieldCheck className="h-4 w-4" />} variant="flat" color="success" className="mx-auto">
            {lang === "en" ? "Protected" : lang === "id" ? "Terjamin" : "保障"}
          </Chip>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{title}</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">{subtitle}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden border border-slate-200/60 dark:border-slate-800/80 ${
                plan.highlight ? "shadow-2xl" : "shadow-lg"
              }`}
            >
              {plan.badge && (
                <Chip
                  color={plan.highlight ? "warning" : "primary"}
                  variant={plan.highlight ? "shadow" : "flat"}
                  className="absolute right-4 top-4"
                  startContent={<Sparkles className="h-3 w-3" />}
                >
                  {plan.badge}
                </Chip>
              )}
              <CardHeader className="flex flex-col items-start gap-3 px-6 pt-6">
                <p className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">{plan.name}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</p>
                  <span className="text-sm text-slate-500 dark:text-slate-400">/person</span>
                </div>
              </CardHeader>
              <CardBody className="flex flex-col gap-4 px-6 pb-6">
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  as={Link}
                  href="#contact"
                  radius="full"
                  className={`mt-2 ${plan.highlight ? "bg-sunset-gradient text-white" : "bg-slate-900 text-white dark:bg-white dark:text-slate-900"}`}
                >
                  {lang === "en" ? "Book this" : lang === "id" ? "Pilih paket" : "预订"}
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
