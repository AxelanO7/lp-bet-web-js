import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Lang } from "./LanguageToggle";

const EMAIL = "Balieternatours@gmail.com";
const WHATSAPP = "6281234567890"; // placeholder

const copy = {
  en: {
    title: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    sendEmail: "Send Email",
    whatsapp: "Chat on WhatsApp",
  },
  id: {
    title: "Kontak",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    sendEmail: "Kirim Email",
    whatsapp: "Hubungi via WhatsApp",
  },
};

export const Contact = ({ lang }: { lang: Lang }) => {
  const t = copy[lang];
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Booking Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`);
  };

  return (
    <Box
      as="section"
      id="contact"
      py={24}
      px={4}
      w="100%"
      bg="gray.50"
      _dark={{ bg: "gray.900" }}
    >
      <Heading textAlign="center" mb={10}>
        {t.title}
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={10} maxW="900px" mx="auto">
        <Box p={8} shadow="md" borderRadius="xl" bg="white" _dark={{ bg: "gray.700" }}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>{t.name}</FormLabel>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t.name}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>{t.email}</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </FormControl>
            <FormControl id="message">
              <FormLabel>{t.message}</FormLabel>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t.message}
              />
            </FormControl>
            <Stack direction={["column", "row"]} spacing={4} pt={2}>
              <Button colorScheme="teal" onClick={handleEmail}>
                {t.sendEmail}
              </Button>
              <Button colorScheme="green" onClick={handleWhatsApp}>
                {t.whatsapp}
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Stack spacing={6} p={8} shadow="md" borderRadius="xl" bg="white" _dark={{ bg: "gray.700" }}>
          <Stack direction="row" align="center">
            <EmailIcon />
            <Text>{EMAIL}</Text>
          </Stack>
          <Stack direction="row" align="center">
            <PhoneIcon />
            <Text>+62 812-3456-7890</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
