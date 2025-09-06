import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Lang } from "./LanguageToggle";

const copy = {
  en: {
    title: "FAQ",
    items: [
      {
        q: "How do I book?",
        a: "Use the form below or contact us via WhatsApp.",
      },
      { q: "Is the schedule flexible?", a: "Yes, we offer flexible departure times." },
    ],
  },
  id: {
    title: "FAQ",
    items: [
      {
        q: "Bagaimana cara memesan?",
        a: "Gunakan form di bawah atau hubungi kami via WhatsApp.",
      },
      {
        q: "Apakah jadwal fleksibel?",
        a: "Ya, kami menawarkan waktu keberangkatan fleksibel.",
      },
    ],
  },
};

export const FAQ = ({ lang }: { lang: Lang }) => {
  const t = copy[lang];
  return (
    <Box as="section" id="faq" py={24} px={4} w="100%">
      <Heading textAlign="center" mb={10}>
        {t.title}
      </Heading>
      <Accordion allowToggle maxW="800px" mx="auto">
        {t.items.map((item, idx) => (
          <AccordionItem key={idx}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {item.q}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{item.a}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
