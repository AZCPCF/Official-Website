import { getMDXComponents } from "@/lib/get-mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function MDXContent({ source }: { source: string }) {
  const components = await getMDXComponents();
  return <MDXRemote source={source} components={components} />;
}
