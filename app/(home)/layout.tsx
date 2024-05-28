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
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  )
}