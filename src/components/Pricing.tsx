import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Lang } from "./LanguageToggle";

const copy = {
  en: {
    title: "Ticket Prices",
    penida: "To Nusa Penida",
    lembongan: "To Nusa Lembongan",
    price: "from IDR 150k",
  },
  id: {
    title: "Daftar Harga",
    penida: "Ke Nusa Penida",
    lembongan: "Ke Nusa Lembongan",
    price: "mulai dari Rp150k",
  },
};

export const Pricing = ({ lang }: { lang: Lang }) => {
  const t = copy[lang];
  return (
    <Box
      as="section"
      id="pricing"
      py={24}
      px={4}
      w="100%"
      bg="white"
      _dark={{ bg: "gray.800" }}
    >
      <Heading textAlign="center" mb={10} color="orange.500">
        {t.title}
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={10} maxW="800px" mx="auto">
        <Box
          p={8}
          shadow="lg"
          borderRadius="xl"
          textAlign="center"
          bg="white"
          _dark={{ bg: "gray.700" }}
        >
          <Text fontSize="3xl">🚤</Text>
          <Heading size="md" mt={2}>
            {t.penida}
          </Heading>
          <Text mt={4} fontWeight="bold">
            {t.price}
          </Text>
        </Box>
        <Box
          p={8}
          shadow="lg"
          borderRadius="xl"
          textAlign="center"
          bg="white"
          _dark={{ bg: "gray.700" }}
        >
          <Text fontSize="3xl">⛴️</Text>
          <Heading size="md" mt={2}>
            {t.lembongan}
          </Heading>
          <Text mt={4} fontWeight="bold">
            {t.price}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
