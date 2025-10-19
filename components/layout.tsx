import Footer from "@/components/footer";
import Header, { HeaderProps } from "@/components/header";
import { getServerPathname } from "@/lib/get-server-pathname";
import { PropsWithChildren } from "react";

interface LayoutProps {
  header?: HeaderProps | boolean;
  footer?: boolean;
  className?: string;
}

export default function Layout({
  header = true,
  footer,
  className,
  children,
}: PropsWithChildren<LayoutProps>) {
  const pathname = getServerPathname();
  return (
    <main className={className}>
      {header && (
        <Header {...(typeof header !== "boolean" ? header : { pathname })} />
      )}
      {children}
      {footer && <Footer />}
    </main>
  );
}
