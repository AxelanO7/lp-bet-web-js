import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Lang } from "./LanguageToggle";

const MotionBox = motion(Box);

const copy = {
  en: {
    title: "Popular Tours",
    items: [
      {
        title: "Nusa Penida Adventure",
        desc: "Cliffs, beaches, and hidden gems.",
        img: "https://images.unsplash.com/photo-1546484959-fecba6dcbf31?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Ubud Rice Terraces",
        desc: "Green landscapes and cultural vibes.",
        img: "https://images.pexels.com/photos/210134/pexels-photo-210134.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Tanah Lot Sunset",
        desc: "Iconic temple over the sea.",
        img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  id: {
    title: "Tur Populer",
    items: [
      {
        title: "Petualangan Nusa Penida",
        desc: "Tebing, pantai, dan surga tersembunyi.",
        img: "https://images.unsplash.com/photo-1546484959-fecba6dcbf31?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Sawah Ubud",
        desc: "Bentang hijau dan nuansa budaya.",
        img: "https://images.pexels.com/photos/210134/pexels-photo-210134.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Senja Tanah Lot",
        desc: "Pura ikonik di atas laut.",
        img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
};

export const PopularTours = ({ lang }: { lang: Lang }) => {
  const t = copy[lang];
  return (
    <Box as="section" id="tours" py={24} px={4} w="100%" bg="white">
      <Heading textAlign="center" mb={10} color="orange.500">
        {t.title}
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8} maxW="6xl" mx="auto">
        {t.items.map((tour, i) => (
          <MotionBox
            key={i}
            whileHover={{ y: -5 }}
            shadow="md"
            borderRadius="xl"
            overflow="hidden"
            bg="white"
          >
            <Image src={tour.img} alt={tour.title} h="200px" w="100%" objectFit="cover" />
            <Stack p={4} spacing={2}>
              <Heading size="md" color="teal.600">
                {tour.title}
              </Heading>
              <Text>{tour.desc}</Text>
            </Stack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};
