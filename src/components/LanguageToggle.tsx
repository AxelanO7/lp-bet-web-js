import { Button } from "@chakra-ui/react";

export type Lang = "en" | "id";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LanguageToggle = ({ lang, setLang }: Props) => (
  <Button
    size="sm"
    colorScheme="teal"
    shadow="md"
    onClick={() => setLang(lang === "en" ? "id" : "en")}
  >
    {lang === "en" ? "ID" : "EN"}
  </Button>
);
