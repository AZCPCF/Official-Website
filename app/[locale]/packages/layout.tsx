import { ReactNode } from "react";
import Layout from "@/components/layout";

export default function PackagesLayout({ children }: { children: ReactNode }) {
  return <Layout className="flex flex-col min-h-screen">{children}</Layout>;
}
