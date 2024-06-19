import { Boundary } from "@/components/boundary"
import { Loading } from "@/components/loading"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function SettingsPage() {

  return (
    <Boundary labels={["/dashboard/settings"]} size="small">
      <DashboardShell>
        <Loading /> 
      </DashboardShell>
    </Boundary>
  )
}


