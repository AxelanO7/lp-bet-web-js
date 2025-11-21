import { useEffect, useState } from "react";
import { Button, Link as NextUILink } from "@nextui-org/react";
import { Moon, Sun, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Lang, LanguageToggle } from "./LanguageToggle";

const navCopy = {
  en: [
    { label: "Tours", href: "#tours" },
    { label: "Experiences", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
    { label: "Stories", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  id: [
    { label: "Tur", href: "#tours" },
    { label: "Pengalaman", href: "#gallery" },
    { label: "Harga", href: "#pricing" },
    { label: "Cerita", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  zh: [
    { label: "行程", href: "#tours" },
    { label: "体验", href: "#gallery" },
    { label: "价格", href: "#pricing" },
    { label: "故事", href: "#testimonials" },
    { label: "常见问题", href: "#faq" },
  ],
};

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const Navbar = ({ lang, setLang }: Props) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = navCopy[lang];

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    const next = (resolvedTheme ?? theme) === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/30 bg-white/70 px-4 py-3 shadow-lg backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70">
        <Link href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="h-10 w-10 rounded-full bg-sunset-gradient shadow-lg" />
          <div className="leading-tight">
            <p className="text-sm text-slate-500 dark:text-slate-300">Balieternatours</p>
            <p className="text-base font-bold">Cinematic Travel</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200 md:flex">
          {t.map((item) => (
            <NextUILink
              key={item.href}
              href={item.href}
              className="hover:text-teal-500 dark:hover:text-amber-400"
              underline="hover"
            >
              {item.label}
            </NextUILink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle lang={lang} setLang={setLang} />
          <Button
            isIconOnly
            radius="full"
            variant="flat"
            aria-label="Toggle theme"
            className="glass-card"
            onPress={toggleTheme}
          >
            {mounted && (resolvedTheme ?? theme) === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button
            as={Link}
            href="#contact"
            radius="full"
            className="bg-sunset-gradient text-white shadow-xl hover:shadow-2xl"
            startContent={<PhoneCall className="h-4 w-4" />}
          >
            Book a call
          </Button>
        </div>
      </div>
    </header>
  );
};
