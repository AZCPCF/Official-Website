import Layout from "@/components/layout";

export default function SupportUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout footer header>
      {children}
    </Layout>
  );
}
