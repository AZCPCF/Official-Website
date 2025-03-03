"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
    ],
  },
  {
    title: "Tutorial",
    items: [
      {
        title: "Basic Syntax",
        href: "/docs/tutorial/basic-syntax",
      },
      {
        title: "Variables and Types",
        href: "/docs/tutorial/variables-and-types",
      },
      {
        title: "Control Flow",
        href: "/docs/tutorial/control-flow",
      },
    ],
  },
  {
    title: "Language Reference",
    items: [
      {
        title: "Built-in Types",
        href: "/docs/reference/built-in-types",
      },
      {
        title: "Functions",
        href: "/docs/reference/functions",
      },
      {
        title: "Modules",
        href: "/docs/reference/modules",
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

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
                            pathname === subItem.href ? "text-primary font-medium" : "text-muted-foreground",
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
  )
}

