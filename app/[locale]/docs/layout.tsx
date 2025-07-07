import Header from "@/components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import type React from "react";
import { getDocsNavigation } from "./collector";
import { DocNavItem } from "@/app/types/doc_nav_item";
import ClientSidebarWrapper from "@/components/docs/client_sidebar_wrapper";
import { HEADER_HEIGHT } from "@/components/header"; // Assuming HEADER_HEIGHT is a string like "64px" or "4rem"
import { getLocale } from "next-intl/server";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const navigationItems: DocNavItem[] = await getDocsNavigation(
    undefined,
    undefined,
    locale
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <SidebarProvider>
        <div className="flex flex-1">
          <div
            className="fixed top-0 bottom-0 w-64 xl:w-80 border-r z-10 hidden md:flex flex-col rounded-lg shadow-md"
            style={{ top: HEADER_HEIGHT }}
          >
            {/* Scrollable content inside the fixed sidebar:
                - `overflow-y-auto`: Allows vertical scrolling if content overflows.
                - `h-full`: Ensures this div takes the full height of its parent (the fixed sidebar).
                - `p-4`: Adds some padding for better aesthetics. */}
            <div className="overflow-y-auto h-full">
              <ClientSidebarWrapper navigationItems={navigationItems} />
            </div>
          </div>

          <div
            className="flex-grow pb-6 overflow-y-auto md:ml-64 xl:ml-80 p-4"
          >
            {children}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
