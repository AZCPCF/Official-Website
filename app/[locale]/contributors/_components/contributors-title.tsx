import { TranslationProps } from "@/types/translation";

export const ContributorsTitle = ({ t }: TranslationProps) => (
  <div className="flex flex-col gap-2">
    <div className=" text-4xl font-bold">{t("title")}</div>
    <div className="text-lg">{t("subtitle")}</div>
  </div>
);
