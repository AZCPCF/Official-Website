"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/base16/bright.css";
// import 'highlight.js/styles/base16/default-dark.css';

export default function CodeBlock({ children, language = "typescript" }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre className="!mt-0 !mb-0 rounded-lg">
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}
