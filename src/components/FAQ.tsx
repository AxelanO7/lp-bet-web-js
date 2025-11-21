import { Accordion, AccordionItem, Chip } from "@nextui-org/react";
import { HelpCircle } from "lucide-react";
import { Lang } from "./LanguageToggle";

const faqs = [
  {
    q: {
      en: "Can we customize the itinerary?",
      id: "Bisakah itinerary disesuaikan?",
      zh: "行程可以定制吗？",
    },
    a: {
      en: "Yes. Our concierge team tailors every route, dining, and activity to your preferences before departure.",
      id: "Bisa. Tim concierge kami menyesuaikan rute, makan, dan aktivitas sesuai preferensi Anda sebelum berangkat.",
      zh: "当然。我们的礼宾团队会在出发前根据您的喜好定制路线、餐饮与活动。",
    },
  },
  {
    q: {
      en: "Do you handle photo/video production?",
      id: "Apakah menyediakan foto/video?",
      zh: "会提供影像拍摄吗？",
    },
    a: {
      en: "We collaborate with professional crews for aerials, underwater shots, and travel-ready edits. Ask for the 'Signature' add-on.",
      id: "Kami bekerja sama dengan kru profesional untuk aerial, underwater, dan editing siap pakai. Gunakan add-on 'Signature'.",
      zh: "我们与专业团队合作，提供航拍、水下拍摄及成片剪辑，可选择“Signature”增值服务。",
    },
  },
  {
    q: {
      en: "What about safety & insurance?",
      id: "Bagaimana dengan keamanan & asuransi?",
      zh: "安全和保险如何保障？",
    },
    a: {
      en: "Certified captains, modern vessels, and comprehensive coverage for all guests across every activity.",
      id: "Kapten tersertifikasi, kapal modern, dan perlindungan menyeluruh untuk seluruh tamu di setiap aktivitas.",
      zh: "持证船长、现代化船只，并为每位客人提供全方位活动保险。",
    },
  },
];

export const FAQ = ({ lang }: { lang: Lang }) => {
  return (
    <section id="faq" className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-2 text-center">
          <Chip startContent={<HelpCircle className="h-4 w-4" />} variant="flat" className="mx-auto" color="primary">
            {lang === "en" ? "FAQ" : lang === "id" ? "FAQ" : "常见问题"}
          </Chip>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            {lang === "en" ? "Frequently asked" : lang === "id" ? "Pertanyaan umum" : "常见询问"}
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            {lang === "en"
              ? "Everything you need to know before sailing with us."
              : lang === "id"
                ? "Semua yang perlu Anda tahu sebelum berlayar bersama kami."
                : "出发前需要了解的所有关键信息。"}
          </p>
        </div>
        <Accordion className="mt-10" variant="splitted" selectionMode="multiple">
          {faqs.map((item, idx) => (
            <AccordionItem
              key={idx}
              aria-label={item.q[lang]}
              title={item.q[lang]}
              className="rounded-2xl border border-slate-200/70 bg-white/80 px-4 dark:border-slate-800/80 dark:bg-slate-900/70"
            >
              <p className="text-sm text-slate-700 dark:text-slate-200">{item.a[lang]}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
