"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

import LogoDark from "@/app/assets/logo-dark.png";
import LogoLight from "@/app/assets/logo-light.png";

interface SplashScreenProps {
  duration?: number;
  fadeOutDuration?: number;
}
export function Logo() {
  const t = useTranslations("Header.logo");

  return (
    <>
      <Image src={LogoDark} className="dark:block hidden w-24" alt={t("alt")} />
      <Image
        src={LogoLight}
        className="dark:hidden block w-24"
        alt={t("altLight")}
      />
    </>
  );
}
export default function SplashScreen({
  duration = 2000,
  fadeOutDuration = 500,
}: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (percentage >= 100) {
        clearInterval(interval);
        setFadeOut(true);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      className={cn(
        "fixed inset-0 flex flex-col items-center justify-center transition-opacity z-999999! bg-background",
        fadeOut
          ? "opacity-0 pointer-events-none"
          : "opacity-100 pointer-events-auto splash-screen",
        `[transition-duration:${fadeOutDuration}ms]`
      )}
    >
      <div className="mb-4">
        <Logo />
      </div>
      <div className="w-32 h-1 bg-gray-400 rounded overflow-hidden">
        <div
          className="h-full bg-gray-100 transition-all duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
