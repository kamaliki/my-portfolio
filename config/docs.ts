import { MainNavItem} from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "About",
      href: "/#about"
    },
    {
      title: "Services",
      href: "/#services"
    },
    {
      title: "Skills",
      href: "/#skills"
    },
    {
      title: "Projects",
      href: "/#projects"
    },
    {
      title: "Experience",
      href: "/#experience"
    },
    {
      title: "Contacts",
      href: "/#contact"
    },
    // {
    //   title: "Log in",
    //   href: "/#login",
    // }

  ]
}