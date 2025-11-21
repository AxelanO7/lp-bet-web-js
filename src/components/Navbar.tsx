import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import { Lang, LanguageToggle } from "./LanguageToggle";

const copy = {
  en: {
    items: [
      { label: "Tours", href: "#tours" },
      { label: "Gallery", href: "#gallery" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  id: {
    items: [
      { label: "Tur", href: "#tours" },
      { label: "Galeri", href: "#gallery" },
      { label: "Harga", href: "#pricing" },
      { label: "Testimoni", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Kontak", href: "#contact" },
    ],
  },
  zh: {
    items: [
      { label: "行程", href: "#tours" },
      { label: "图库", href: "#gallery" },
      { label: "价格", href: "#pricing" },
      { label: "评价", href: "#testimonials" },
      { label: "常见问题", href: "#faq" },
      { label: "联系我们", href: "#contact" },
    ],
  },
};

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const Navbar = ({ lang, setLang }: Props) => {
  const t = copy[lang];
  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      w="100%"
      bg="whiteAlpha.800"
      backdropFilter="blur(6px)"
      zIndex={1000}
    >
      <Flex maxW="6xl" mx="auto" py={4} px={6} align="center" justify="space-between">
        <Box fontWeight="bold" color="teal.600">
          Balieternatours
        </Box>
        <HStack spacing={6} align="center">
          {t.items.map((item) => (
            <Link key={item.href} href={item.href} _hover={{ color: "teal.600" }}>
              {item.label}
            </Link>
          ))}
          <LanguageToggle lang={lang} setLang={setLang} />
        </HStack>
      </Flex>
    </Box>
  );
};
