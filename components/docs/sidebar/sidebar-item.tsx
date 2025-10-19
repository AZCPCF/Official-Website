import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  title: string;
  href: string;
  isActive: boolean;
  onClick?: () => void;
}

export function SidebarItem({
  title,
  href,
  isActive,
  onClick,
}: SidebarItemProps) {
  return (
    <li className="mb-1 list-none">
      <Link
        href={href}
        className={cn(
          "block w-full py-1 px-2 rounded-md text-md",
          isActive
            ? "text-white font-medium bg-primary"
            : "not-dark:text-black hover:bg-gray-100 dark:hover:bg-muted"
        )}
        onClick={onClick}
      >
        {title}
      </Link>
    </li>
  );
}
