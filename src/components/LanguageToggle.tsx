import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Languages } from "lucide-react";

export type Lang = "en" | "id" | "zh";

interface Props {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const languages: { code: Lang; label: string; native: string }[] = [
  { code: "id", label: "Bahasa", native: "Bahasa" },
  { code: "en", label: "English", native: "English" },
  { code: "zh", label: "中文", native: "中文" },
];

export const LanguageToggle = ({ lang, setLang }: Props) => {
  const current = languages.find((option) => option.code === lang);

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Button
          variant="flat"
          radius="full"
          startContent={<Languages className="h-4 w-4" />}
          className="glass-card text-sm font-semibold"
        >
          {current?.label ?? "Language"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language switcher" variant="faded">
        {languages.map((option) => (
          <DropdownItem key={option.code} onPress={() => setLang(option.code)}>
            <div className="flex items-center justify-between gap-2">
              <span>{option.label}</span>
              <span className="text-xs text-slate-500 dark:text-slate-300">{option.native}</span>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
