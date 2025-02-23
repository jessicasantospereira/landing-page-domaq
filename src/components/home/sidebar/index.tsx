
import {
    Users,
    ClipboardList,
    Wrench,
    Calculator,
  } from "lucide-react";
  import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar";
  const items = [
    {
      title: "Clientes",
      url: "/clientes",
      icon: Users,
    },
    {
      title: "Atendimentos",
      url: "/atendimentos",
      icon: ClipboardList,
    },
    {
      title: "Serviços",
      url: "/servicos",
      icon: Wrench,
    },
    {
      title: "Orçamentos",
      url: "/orcamentos",
      icon: Calculator,
    },
  ];
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    );
  }