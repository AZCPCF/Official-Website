import { useLocale } from "next-intl";

export function useLocaleInfo() {
  const locale = useLocale();

  return {
    locale,
    isPersian: locale === "fa",
    isRTL: locale === "fa",
    fontFamily: locale === "fa" ? "font-fa" : "font-sans",
  };
}
