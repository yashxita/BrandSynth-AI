"use client"

import { useState } from "react"
import { AppSidebar } from "./app-sidebar"
import { DashboardOverview } from "./sections/dashboard-overview"
import { BrandSetup } from "./sections/brand-setup"
import { TrendMonitor } from "./sections/trend-monitor"
import { ContentGenerator } from "./sections/content-generator"
import { BrandChecker } from "./sections/brand-checker"
import { ContentCalendar } from "./sections/content-calendar"
import { Analytics } from "./sections/analytics"
import { Automation } from "./sections/automation"

export function DashboardContent() {
  const [activeSection, setActiveSection] = useState("dashboard")

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardOverview />
      case "brand-setup":
        return <BrandSetup />
      case "trend-monitor":
        return <TrendMonitor />
      case "content-generator":
        return <ContentGenerator />
      case "brand-checker":
        return <BrandChecker />
      case "content-calendar":
        return <ContentCalendar />
      case "analytics":
        return <Analytics />
      case "automation":
        return <Automation />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="flex h-screen">
      <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 overflow-auto">{renderSection()}</div>
    </div>
  )
}
