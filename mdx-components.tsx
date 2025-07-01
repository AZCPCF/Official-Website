import React from "react";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function ErrorAlert({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  const t = useTranslations("DocsContent.introduction.errorAlert");

  const translatedTitle = title === "Under Development" ? t("title") : title;

  // Always use the translated content for the development warning
  const translatedContent = t("content");

  console.log("ErrorAlert - translatedTitle:", translatedTitle);
  console.log("ErrorAlert - translatedContent:", translatedContent);

  return (
    <div className="bg-red-50 border-t-4 border-red-500 p-4 dark:bg-red-800/20 mb-4 rounded-md" role="alert">


      <div className="flex">
        <div className="shrink-0">
          <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800 dark:border-red-950 dark:bg-red-800 dark:text-red-100">
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </span>
        </div>
        <div className="ms-4">
          <h3
            id="hs-bordered-red-style-label"
            className="text-gray-800 font-semibold dark:text-white mb-2"
          >
            {translatedTitle || "Error!"}{" "}
            {/* Use the title prop, with a fallback */}
          </h3>
          <div className="text-lg text-gray-700 dark:text-neutral-300 m-0">
            {translatedContent} {/* Render children as the body */}
          </div>
        </div>
      </div>
    </div>
  );
}

// Translated components for MDX
export function TranslatedCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <Card className={className}>{children}</Card>;
}

export function TranslatedCardHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CardHeader>{children}</CardHeader>;
}

export function TranslatedCardTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("DocsContent.introduction.cards");

  let translatedText = children;
  if (typeof children === "string") {
    if (children === "For Newcomers") {
      translatedText = t("newcomers.title");
    } else if (children === "Language Reference") {
      translatedText = t("reference.title");
    }
  }

  return (
    <CardTitle className="flex items-center gap-2">{translatedText}</CardTitle>
  );
}

export function TranslatedCardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CardContent>{children}</CardContent>;
}

export function TranslatedButton({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
}) {
  const t = useTranslations("DocsContent.introduction.cards");

  let translatedText = children;
  if (typeof children === "string") {
    if (children === "Get Started") {
      translatedText = t("newcomers.button");
    } else if (children === "Explore Reference") {
      translatedText = t("reference.button");
    }
  }

  return <Button variant={variant}>{translatedText}</Button>;
}

// Specific card components for better translation control
export function NewcomersCard() {
  const t = useTranslations("DocsContent.introduction.cards.newcomers");

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-lg text-gray-600 dark:text-muted-foreground">
            {t("description")}
          </div>
          <Link href="/docs/tutorial/basic-syntax" className="mt-2 block">
            <Button>{t("button")}</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export function ReferenceCard() {
  const t = useTranslations("DocsContent.introduction.cards.reference");

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-lg text-gray-600 dark:text-muted-foreground">
            {t("description")}
          </div>
          <Link href="/docs/langref" className="mt-2 block">
            <Button variant="outline">{t("button")}</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => {
      const t = useTranslations("DocsContent.introduction");
      const tTutorial = useTranslations("DocsContent.tutorial");

      let translatedText = children;

      if (children === "Documentation") {
        translatedText = t("documentation");
      } else if (children === "Turorial into") {
        translatedText = tTutorial("installation.description");
      }

      return <h1 className="text-4xl font-bold mb-3">{translatedText}</h1>;
    },
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-2">{children}</h3>
    ),
    p: ({ children }) => {
      const t = useTranslations("DocsContent.introduction");
      const tTutorial = useTranslations("DocsContent.tutorial");

      let translatedText = children;

      if (typeof children === "string") {
        if (children.includes("Welcome to the official documentation")) {
          translatedText = t("welcome");
        } else if (children === "This guide will help you set up.") {
          translatedText = tTutorial("basicSyntax.description");
        }
      }

      return <p className="text-lg my-2">{translatedText}</p>;
    },
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ErrorAlert,
    Button,
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
    Link,
    // Translated components
    TranslatedCard,
    TranslatedCardHeader,
    TranslatedCardTitle,
    TranslatedCardContent,
    TranslatedButton,
    // Specific card components
    NewcomersCard,
    ReferenceCard,
    ...components,
  };
}
