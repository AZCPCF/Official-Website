// app/components/docs/mobile/breadcrumb.tsx
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface BreadcrumbProps {
  className?: string;
  title: string;
  onOpenSidebar?: () => void; // optional client handler
}

export default function Breadcrumb({
  className = "",
  title,
  onOpenSidebar,
}: BreadcrumbProps) {
  const t = useTranslations("Docs");

  return (
    <nav
      className={`relative md:hidden flex px-4 pb-3 text-sm space-x-1 rtl:space-x-reverse ${className}`}
      aria-label={t("mobile.breadcrumb")}
    >
      <div className="flex flex-row items-center">
        {/* If onOpenSidebar is passed, render button clickable */}
        {onOpenSidebar ? (
          <button
            onClick={onOpenSidebar}
            className="bg-background/40 hover:bg-transparent flex items-center outline-none border rounded px-4.5 py-2 text-sm"
          >
            {t("mobile.breadcrumb")}
            <ChevronRight className="w-4 h-4 mx-0 text-muted-foreground ml-3" />
          </button>
        ) : (
          <Button
            className="bg-background/60 hover:bg-transparent"
            variant="outline"
            disabled
          >
            {t("mobile.breadcrumb")}
            <ChevronRight className="w-3 h-3 mx-1 text-muted-foreground" />
          </Button>
        )}

        <span className="ms-3 font-bold">{title}</span>
      </div>
    </nav>
  );
}
