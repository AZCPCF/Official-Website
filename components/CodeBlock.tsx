"use client";

import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";

interface CodeBlockProps {
  children: string;
  language?: string;
  disableBorder?: boolean;
}

export default function CodeBlock({
  children,
  language = "typescript",
  disableBorder = false,
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement | null>(null);
  const [isCopying, setIsCopying] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    const lightHref = "/css/hljs/panda-syntax-light.min.css";
    const darkHref = "/css/hljs/panda-syntax-dark.min.css";
    const linkId = "hljs-theme";

    let link = document.getElementById(linkId) as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    link.href = theme === "light" ? lightHref : darkHref;

    hljs.highlightAll();
  }, [theme, children]);

  const getLanguage = (lang: string) => {
    if (lang === "cyrus") return "typescript";
    return lang;
  };

  const handleCopy = async () => {
    if (!codeRef.current) return;
    try {
      setIsCopying(true);
      await navigator.clipboard.writeText(codeRef.current.innerText || "");
      toast({ title: "Copied", description: "Code copied to clipboard." });
    } catch {
      toast({ title: "Copy failed", description: "Could not copy code." });
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <div className="my-2 overflow-x-auto relative group">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button size="sm" variant="outline" onClick={handleCopy} disabled={isCopying}>
          {isCopying ? "Copying..." : "Copy"}
        </Button>
      </div>
      <pre
        className={`mt-0! mb-0! rounded-lg text-left ${disableBorder ? "" : "border"}`}
        dir="ltr"
      >
        <code
          ref={codeRef}
          className={`language-${getLanguage(language)} text-sm md:text-base text-left rounded-lg`}
          dir="ltr"
        >
          {children}
        </code>
      </pre>
    </div>
  );
}
