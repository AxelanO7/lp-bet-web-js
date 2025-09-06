import {
  Avatar,
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Lang } from "./LanguageToggle";

const copy = {
  en: {
    title: "Testimonials",
    quotes: [
      {
        name: "John",
        text: "Great service!",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      {
        name: "Maria",
        text: "Easy booking and friendly staff.",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
    ],
  },
  id: {
    title: "Testimoni",
    quotes: [
      {
        name: "Budi",
        text: "Pelayanan mantap!",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      {
        name: "Sari",
        text: "Mudah memesan dan staf ramah.",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
    ],
  },
};

export const Testimonials = ({ lang }: { lang: Lang }) => {
  const t = copy[lang];
  return (
    <Box
      as="section"
      id="testimonials"
      py={24}
      px={4}
      w="100%"
      bg="gray.50"
      _dark={{ bg: "gray.800" }}
    >
      <Heading textAlign="center" mb={10}>
        {t.title}
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={8} maxW="800px" mx="auto">
        {t.quotes.map((q, i) => (
          <Box
            key={i}
            p={8}
            shadow="md"
            borderRadius="xl"
            bg="white"
            _dark={{ bg: "gray.700" }}
          >
            <Stack direction="row" spacing={4} align="center">
              <Avatar name={q.name} src={q.avatar} />
              <Stack spacing={1}>
                <Text fontWeight="bold">{q.name}</Text>
                <HStack spacing={1}>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <StarIcon key={i} color="teal.400" />
                    ))}
                </HStack>
              </Stack>
            </Stack>
            <Text mt={4} fontStyle="italic">
              "{q.text}"
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
