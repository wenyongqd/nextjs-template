import { dashboardConfig } from "@/config/dashboard"
import { DashboardNav } from "@/components/nav"
import { Header } from "@/components/header"
import { Boundary } from "@/components/boundary"
import { SiteFooter } from "@/components/site-footer"

interface DashboardLayoutProps {
    children?: React.ReactNode
}

export default async function DashboardLayout({
    children,
}: DashboardLayoutProps) {

    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <Header />
            <div className="container grid flex-1 gap-6 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[200px] flex-col justify-between rounded-lg border p-4 backdrop-blur-[1.5px] md:flex">
                    <DashboardNav items={dashboardConfig.sidebarNav} />
                </aside>
                <main className="flex w-full flex-1 flex-col">
                    {children}
                </main>
            </div>
            <SiteFooter />
        </div>
    )
}
