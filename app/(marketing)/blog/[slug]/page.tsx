import { Boundary } from "@/components/boundary"
interface BlogPageProps {
    params: {
      slug: string
    }
}

export default function Page({ params }: BlogPageProps) {
    return (
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20 mx-20">
        <Boundary labels={[`/Blog/${params.slug}`]} size="small">
          <div className="max-w-xl mx-auto mt-10 p-6 bg-white">
            <h1 className="text-2xl font-bold text-gray-900">Warner Music Group buys concert discovery service Songkick</h1>
            <p className="text-sm text-gray-400">[Post: {params.slug}]</p>
            <p className="mt-4 text-gray-600">
              Warner Music Group announced today it&apos;s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company&apos;s trademark. Songkick has been involved in a lawsuit against the major...
              <span className="font-bold text-gray-900"> READ MORE</span>
            </p>
            <p className="mt-6 text-gray-500">
              <span className="font-bold text-gray-900">by Millie Borough,</span> 10 days ago
            </p>
          </div>
        </Boundary>
      </section>
    );
}