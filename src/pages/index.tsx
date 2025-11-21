import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { PopularTours } from "../components/PopularTours";
import { Gallery } from "../components/Gallery";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Lang } from "../components/LanguageToggle";

const IndexPage = () => {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
      <Navbar lang={lang} setLang={setLang} />
      <main className="flex flex-1 flex-col gap-0">
        <HeroSection lang={lang} />
        <PopularTours lang={lang} />
        <Gallery lang={lang} />
        <Pricing lang={lang} />
        <Testimonials lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
