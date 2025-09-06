import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { Lang } from "./LanguageToggle";

const copy = {
  en: {
    title: "Best fast boat tickets to Nusa Penida & Lembongan",
    subtitle: "Flexible schedules and top service",
    cta: "Book Now",
  },
  id: {
    title: "Harga tiket boat Nusa Penida & Lembongan terbaik",
    subtitle: "Jadwal fleksibel dan pelayanan terbaik",
    cta: "Pesan Sekarang",
  },
};

export const HeroSection = ({ lang }: { lang: Lang }) => {
  const t = copy[lang];
  return (
    <Box
      as="section"
      position="relative"
      textAlign="center"
      color="white"
      py={[32, 40]}
      px={4}
      w="100%"
      minH="70vh"
      bgImage="linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
    >
      <Stack spacing={6} align="center" justify="center" h="100%">
        <Heading fontSize={["3xl", "5xl"]} maxW="3xl">
          {t.title}
        </Heading>
        <Text fontSize={["md", "xl"]} maxW="2xl">
          {t.subtitle}
        </Text>
        <Button as="a" href="#contact" colorScheme="teal" size="lg" shadow="md">
          {t.cta}
        </Button>
      </Stack>
    </Box>
  );
};
