"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import type React from "react";

export default function SupportUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
