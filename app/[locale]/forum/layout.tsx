"use client";
import Header from "@/components/header";
import type React from "react";

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {children}
    </div>
  );
}
