"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "./sidebarItems";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarComponent>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-3.5rem)]">
          {sidebarItems.map((item, index) => (
            <SidebarGroup key={index}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((subItem, subIndex) => (
                    <SidebarMenuItem key={subIndex}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "block w-full",
                            pathname === subItem.href
                              ? "text-primary font-medium"
                              : "text-muted-foreground"
                          )}
                        >
                          {subItem.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </ScrollArea>
      </SidebarContent>
    </SidebarComponent>
  );
}
