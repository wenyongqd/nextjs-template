import { Boundary } from "@/components/boundary"
import { Loading } from "@/components/loading"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {

  return (
    <Boundary labels={["/dashboard"]} size="small">
      <DashboardShell className="flex w-full flex-1">
        <Loading />
      </DashboardShell>
    </Boundary >
  )
}
