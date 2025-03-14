import { Layout } from "@/components/layout/layout";
import { SideBar } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>{children}</Layout>
  );
}
