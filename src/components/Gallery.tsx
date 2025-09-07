import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Lang } from "./LanguageToggle";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
  "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=800&q=80",
];

const copy = {
  en: { title: "Gallery" },
  id: { title: "Galeri" },
};

export const Gallery = ({ lang }: { lang: Lang }) => {
  const t = copy[lang];
  return (
    <Box as="section" id="gallery" py={24} px={4} w="100%" bg="gray.50">
      <Heading textAlign="center" mb={10} color="teal.600">
        {t.title}
      </Heading>
      <SimpleGrid columns={[2, 3]} spacing={4} maxW="6xl" mx="auto">
        {images.map((url, i) => (
          <Image key={i} src={url} alt="Bali scenery" objectFit="cover" h="150px" w="100%" borderRadius="lg" />
        ))}
      </SimpleGrid>
    </Box>
  );
};
