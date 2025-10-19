"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CaretIcon } from "./caret-icon";

interface CollapsibleNavItemClientProps {
  title: string;
  children: React.ReactNode;
  isRTL?: boolean;
  slug: string;
}

export function CollapsibleNavItemClient({
  title,
  children,
  isRTL = false,
  slug,
}: CollapsibleNavItemClientProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="mb-3">
      <div
        className={cn(
          "text-xs font-semibold uppercase not-dark:text-black flex items-center justify-between w-full cursor-pointer",
          isRTL ? "flex-row-reverse text-right" : ""
        )}
      >
        <a
          className="not-dark:text-black grow py-2 rounded-md px-2 my-1"
          onClick={toggleOpen}
        >
          {title}
        </a>
        <button
          onClick={toggleOpen}
          className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-border dark:focus:bg-border ml-2"
          aria-expanded={isOpen}
          aria-controls={`sidebar-group-content-${slug}`}
        >
          <CaretIcon isOpen={isOpen} />
        </button>
      </div>
      {isOpen && (
        <div
          id={`sidebar-group-content-${slug}`}
          className={cn("ml-2")}
          role="region"
          aria-labelledby={`sidebar-group-label-${slug}`}
        >
          <ul className={cn("space-y-1")}>{children}</ul>
        </div>
      )}
    </div>
  );
}
