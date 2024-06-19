import Link from "next/link";
import { UserAccountNav } from "./user-account-nav";
import { SiteLogo } from "./icons";

export function Header() {
  return <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
    <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center justify-between px-8 py-4">
      <div className="flex gap-6 md:gap-10">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <SiteLogo />
          <span className="hidden font-bold sm:inline-block">
            Teachnique
          </span>
        </Link>
        <Link
          href="/blog"
          className="ml-6 text-[14px] rounded-full"
        >
          Blog
        </Link>
      </div>
      <nav className="flex items-center">
        <UserAccountNav
          user={{
            name: "yosh",
            image: "/avatars/01.png",
            email: "yosh@gmail.com",
          }} />
      </nav>
    </div>
  </header>;
}

