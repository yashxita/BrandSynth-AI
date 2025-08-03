"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Palette, TrendingUp, Sparkles, Shield, Calendar, BarChart3, Settings, Home, Eye, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    id: "dashboard",
  },
  {
    title: "Brand Setup",
    icon: Palette,
    id: "brand-setup",
  },
  {
    title: "Trend Monitor",
    icon: TrendingUp,
    id: "trend-monitor",
  },
  {
    title: "Content Generator",
    icon: Sparkles,
    id: "content-generator",
  },
  {
    title: "Brand Checker",
    icon: Shield,
    id: "brand-checker",
  },
  {
    title: "Content Calendar",
    icon: Calendar,
    id: "content-calendar",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    id: "analytics",
  },
  {
    title: "Automation",
    icon: Zap,
    id: "automation",
  },
]

interface AppSidebarProps {
  activeSection?: string
  onSectionChange?: (section: string) => void
}

export function AppSidebar({ activeSection = "dashboard", onSectionChange }: AppSidebarProps) {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
            <Eye className="h-4 w-4 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Brand Curator</h1>
            <p className="text-xs text-muted-foreground">AI-Powered Aesthetics</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange?.(item.id)}
                    className={cn(
                      "w-full justify-start",
                      activeSection === item.id && "bg-accent text-accent-foreground",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
