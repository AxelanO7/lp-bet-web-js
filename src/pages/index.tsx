import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Pricing } from "../components/Pricing";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";
import { Lang } from "../components/LanguageToggle";
import { Navbar } from "../components/Navbar";
import { PopularTours } from "../components/PopularTours";
import { Gallery } from "../components/Gallery";

const IndexPage = () => {
  const [lang, setLang] = useState<Lang>("id");

  return (
    <Container w="100%" pt="16">
      <Navbar lang={lang} setLang={setLang} />
      <HeroSection lang={lang} />
      <PopularTours lang={lang} />
      <Gallery lang={lang} />
      <Pricing lang={lang} />
      <Testimonials lang={lang} />
      <FAQ lang={lang} />
      <Contact lang={lang} />
      <Footer justifyContent="center">
        <Text>© {new Date().getFullYear()} Balieternatours</Text>
      </Footer>
    </Container>
  );
};

export default IndexPage;
