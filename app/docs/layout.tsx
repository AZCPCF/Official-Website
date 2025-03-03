import type React from "react";
import { Sidebar } from "@/components/docs/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/header";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <SidebarProvider>
        <div className="flex flex-col md:flex-row md:overflow-hidden flex-1">
          <div className="w-full flex-none md:w-64">
            <Sidebar />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
}
