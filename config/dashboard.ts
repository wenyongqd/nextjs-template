import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {

  mainNav: [
    {
      title: "Course",
      href: "/course",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Roadmaps",
      href: "/roadmaps",
      // disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
  ],
}
