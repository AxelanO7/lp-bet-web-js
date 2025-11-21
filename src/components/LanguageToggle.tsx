import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export type Lang = "en" | "id" | "zh";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const languages: { code: Lang; label: string }[] = [
  { code: "id", label: "Bahasa" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
];

export const LanguageToggle = ({ lang, setLang }: Props) => {
  const current = languages.find((option) => option.code === lang);

  return (
    <Menu>
      <MenuButton
        as={Button}
        size="sm"
        colorScheme="teal"
        shadow="md"
        rightIcon={<ChevronDownIcon />}
      >
        {current?.label || "Language"}
      </MenuButton>
      <MenuList>
        {languages.map((option) => (
          <MenuItem key={option.code} onClick={() => setLang(option.code)}>
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
