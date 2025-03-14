import { SideBar } from "../ui/sidebar";

export const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
      <SideBar />
      {children}
    </div>
  )
}