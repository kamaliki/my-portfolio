import { SiteFooter } from "./ui/site-footer"
import { SiteHeader } from "./ui/site-header"

// interface AppLayoutProps {
//   children: React.ReactNode
// }

export default function AppLayout({ children }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <SiteHeader />
      <main className="w-full bg-gradient-to-br from-blue-50 via-blue-400 to-cyan-200 dark:from-gray-800 dark:via-gray-900 dark:to-black">{children}</main>
      <SiteFooter />
    </>
  )
}