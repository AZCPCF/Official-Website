"use client";

import { Button } from "./ui/button";
import { Languages } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export function LanguageToggle() {
  const [currentLocale, setCurrentLocale] = useState("en");
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("Header");

  useEffect(() => {
    setMounted(true);
    // خواندن زبان فعلی از کوکی
    const savedLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("CYRUS_NEXT_LOCALE="))
      ?.split("=")[1];

    if (savedLocale) {
      setCurrentLocale(savedLocale);
    }
  }, []);

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "fa" : "en";

    // ذخیره زبان جدید در کوکی
    document.cookie = `CYRUS_NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`; // یک سال

    setCurrentLocale(newLocale);

    // ریلود صفحه برای اعمال تغییرات
    window.location.reload();
  };

  // جلوگیری از hydration mismatch
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="relative" disabled>
        <Languages className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      title={currentLocale === "en" ? "تغییر به فارسی" : "Switch to English"}
      className="relative"
    >
      <Languages className="h-4 w-4" />
      <span className="absolute -top-1 -right-1 text-xs bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
        {currentLocale === "en" ? "ف" : "E"}
      </span>
    </Button>
  );
}
