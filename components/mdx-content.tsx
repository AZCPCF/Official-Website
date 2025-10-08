"use client";

import { useMDXComponents } from "@/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function MDXContent({ source }: { source: string }) {
  const components = useMDXComponents({});
  return <MDXRemote source={source} components={components} />;
}
