import { getServerPathname } from "@/lib/get-server-pathname";
import { DocNavItem } from "@/types/doc_nav_item";
import { Sidebar } from "./sidebar";

interface ClientSideMobileSidebarWrapperProps {
  navigationItems: DocNavItem[];
}

export default function ClientSidebarWrapper({
  navigationItems,
}: ClientSideMobileSidebarWrapperProps) {
  const pathname = getServerPathname();
  console.log("in csw:", pathname);
  return (
    <div className="[&::-webkit-scrollbar]:[width:6px] [&::-webkit-scrollbar-thumb]:bg-gray-400 overflow-y-auto [&::-webkit-scrollbar-thumb]:[border-radius:3px] min-h-[100svh] max-h-[100svh] pb-14">
      <Sidebar pathname={pathname} navigationItems={navigationItems} />
    </div>
  );
}
