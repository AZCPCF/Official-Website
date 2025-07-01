"use client";

import type React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContributorsLayout({
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
