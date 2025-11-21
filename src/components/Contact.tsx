import { Button, Card, CardBody, CardHeader, Input, Textarea } from "@nextui-org/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Lang } from "./LanguageToggle";

export const Contact = ({ lang }: { lang: Lang }) => {
  const title = lang === "en" ? "Plan with our concierge" : lang === "id" ? "Rancang bersama concierge" : "礼宾为您定制";
  const subtitle =
    lang === "en"
      ? "Tell us the vibe, dates, and group size—we'll script the perfect Bali story."
      : lang === "id"
        ? "Ceritakan tema, tanggal, dan jumlah tamu—kami susun cerita Bali yang sempurna."
        : "告诉我们风格、日期与人数，我们将为您编排完美巴厘之旅。";

  return (
    <section id="contact" className="bg-gradient-to-b from-slate-900 via-slate-950 to-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Concierge</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
            <p className="text-base text-slate-200">{subtitle}</p>
            <div className="space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+62 811-1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@balieternatours.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Benoa Harbour, Bali</span>
              </div>
            </div>
          </div>
          <Card className="glass-card border border-white/10">
            <CardHeader className="flex flex-col gap-1 px-6 pt-6">
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{lang === "en" ? "Share your plan" : lang === "id" ? "Bagikan rencana" : "告诉我们需求"}</p>
              <p className="text-sm text-slate-500 dark:text-slate-300">
                {lang === "en"
                  ? "We respond in under 10 minutes during service hours."
                  : lang === "id"
                    ? "Kami balas di bawah 10 menit selama jam layanan."
                    : "服务时间内10分钟内回复。"}
              </p>
            </CardHeader>
            <CardBody className="gap-4 px-6 pb-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input label="Name" variant="bordered" radius="md" className="text-left" />
                <Input label="Email" type="email" variant="bordered" radius="md" className="text-left" />
              </div>
              <Input label="Travel dates" variant="bordered" radius="md" className="text-left" />
              <Input label="Number of guests" variant="bordered" radius="md" className="text-left" />
              <Textarea label="Tell us about the experience you want" minRows={4} variant="bordered" radius="md" className="text-left" />
              <Button className="bg-sunset-gradient text-white" radius="full" size="lg">
                {lang === "en" ? "Send request" : lang === "id" ? "Kirim permintaan" : "发送需求"}
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
