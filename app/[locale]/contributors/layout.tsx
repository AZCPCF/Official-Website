import { ReactNode } from "react";
import Layout from "@/components/layout";

export default function ContributorsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Layout footer>{children}</Layout>;
}
