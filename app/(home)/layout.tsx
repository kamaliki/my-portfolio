import { SiteFooter } from "./ui/site-footer"
import { SiteHeader } from "./ui/site-header"

export default function AppLayout({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <SiteHeader />
      <main className="w-full bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-black dark:via-slate-800 dark:to-black min-h-screen">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}