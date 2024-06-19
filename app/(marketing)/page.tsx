import { Boundary } from "@/components/boundary";
import { buttonVariants } from "@/components/button";
import { cn } from "@/lib/utils";
import Link from "next/link"

export default async function IndexPage() {

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20 mx-20">
        <Boundary labels={["Home"]} size="small">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center py-28">
            <Link
              href={""}
              className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
            >
              Follow along on Twitter
            </Link>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              An example app built using Next.js 14 app rounter.
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              I&apos;m building a web app with Next.js 14 and open sourcing
              everything. Follow along as we figure this out together.
            </p>
            <div className="space-x-4">
              <Link href={""} className={cn(buttonVariants({ size: "lg" }), "rounded-full")}>
                Get Started
              </Link>
              <Link
                href={""}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full")}
              >
                GitHub
              </Link>
            </div>
          </div>
        </Boundary>
      </section>
    </>
  )
}
