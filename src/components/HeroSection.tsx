import { Button, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Lang } from "./LanguageToggle";

const heroCopy: Record<Lang, { title: string; subtitle: string; cta: string; secondary: string }> = {
  en: {
    title: "Bali fast boat & tour packages",
    subtitle: "Secure seats, hotels, and island trips to Nusa Penida, Lembongan, and Bali in one easy booking.",
    cta: "Browse packages",
    secondary: "Talk to our team",
  },
  id: {
    title: "Paket fast boat & tur Bali",
    subtitle: "Pesan kursi kapal, hotel, dan trip pulau ke Nusa Penida, Lembongan, dan Bali dalam satu layanan.",
    cta: "Lihat paket",
    secondary: "Hubungi tim kami",
  },
  zh: {
    title: "巴厘快艇与旅游套餐",
    subtitle: "一站式预订船票、酒店与岛屿行程，轻松畅游努沙佩尼达、蓝梦岛与巴厘。",
    cta: "查看套餐",
    secondary: "咨询团队",
  },
};

export const HeroSection = ({ lang }: { lang: Lang }) => {
  const t = heroCopy[lang];

  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://storage.googleapis.com/coverr-main/mp4/Mt_Batur.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-36">
        <div className="flex flex-col gap-8 lg:max-w-3xl">
          <Chip color="primary" variant="shadow" className="w-fit bg-white/20 text-white backdrop-blur">
            Bali · Nusa Penida · Lembongan
          </Chip>
          <motion.h1
            className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.title}
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg text-slate-100/90"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            {t.subtitle}
          </motion.p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              as={Link}
              href="#tours"
              size="lg"
              radius="full"
              className="bg-sunset-gradient text-white shadow-xl hover:shadow-2xl"
              endContent={<ArrowRight className="h-4 w-4" />}
            >
              {t.cta}
            </Button>
            <Button
              as={Link}
              href="#contact"
              size="lg"
              radius="full"
              variant="bordered"
              className="glass-card border-white/40 text-white"
              startContent={<Play className="h-4 w-4" />}
            >
              {t.secondary}
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-slate-100/80 sm:grid-cols-4">
            {[
              { label: "islands", value: "14" },
              { label: "luxury partners", value: "30+" },
              { label: "5★ reviews", value: "1,200" },
              { label: "avg. response", value: "5 min" },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl px-4 py-3 text-center">
                <p className="text-lg font-semibold text-white">{item.value}</p>
                <p className="text-xs uppercase tracking-wide text-slate-200/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-[-1px] h-16 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950" />
    </section>
  );
};
