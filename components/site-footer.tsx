import * as React from "react"

import { cn } from "@/lib/utils"
import { SiteLogo} from "@/components/icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <SiteLogo className="h-6 w-6"/>
          <p className="text-center text-sm leading-loose md:text-left">
            Copyright © 2024 Teachnique
            <a href={""} className="pl-6">Help center</a>
            <a href={""} className="pl-6">Terms</a>
            <a href={""} className="pl-6">Privacy policy</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
