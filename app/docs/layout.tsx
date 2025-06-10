"use client";
import MobileSidebar from "@/components/docs/mobile/MobileSidebar";
import { Sidebar } from "@/components/docs/sidebar";
import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import type React from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Show MobileSidebar on /docs and all nested routes */}
      {pathname.startsWith("/docs") && <MobileSidebar />}

      <SidebarProvider>
        <div className="flex flex-col md:flex-row md:overflow-hidden flex-1">
          <div className="w-full flex-none md:w-64">
            <Sidebar />
          </div>
          <div className="flex-grow pt-24 md:pt-12 pb-6 px-6 md:px-12 md:overflow-y-auto">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
