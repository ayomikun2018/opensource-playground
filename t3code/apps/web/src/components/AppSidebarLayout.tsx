import {
  Sidebar,
  SidebarProvider,
  SidebarRail,
} from "@repo/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
export default function AppSidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar
        side="left"
        collapsible="offcanvas"
        className="border-r border-border bg-card text-foreground "
      >
        <AppSidebar/>
        <SidebarRail />
      </Sidebar>
      {children}
    </SidebarProvider>
  );
}
