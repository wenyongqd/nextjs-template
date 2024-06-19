import { Boundary } from "@/components/boundary";
import { SkeletonCard } from "@/components/skeleton-card";
import Link from "next/link"

export default async function IndexPage() {

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20 mx-20">
        <Boundary labels={["/Blog"]} size="small">
          <div className="max-w-[64rem] mx-auto items-center justify-center gap-4 py-20">
            <h1 className="text-3xl font-medium text-gray-400/80 pb-4">Blogs</h1>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Link href="/blog/1">
                <SkeletonCard isLoading={true} />
              </Link>
              <Link href="/blog/2">
                <SkeletonCard isLoading={true} />
              </Link>
              <Link href="/blog/3">
                <SkeletonCard isLoading={true} />
              </Link>
              <Link href="/blog/4">
                <SkeletonCard isLoading={true} />
              </Link>
            </div>
          </div>
        </Boundary>
      </section >
    </>
  )
}
