import { Icons } from "@/components/icons"

export type SidebarNavItem = {
    title: string
    disabled?: boolean
    external?: boolean
    icon?: keyof typeof Icons
} & (
        | {
            href: string
            items?: never
        }
        | {
            href?: string
            items: NavItem[]
        }
    )

export type DashboardConfig = {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
}

export type MainNavItem = NavItem

export type NavItem = {
    title: string
    href: string
    disabled?: boolean
  }