import { ReactNode } from "react";
import Layout from "@/components/layout";

export default function PlaygroundLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Layout header footer>
      {children}
    </Layout>
  );
}
