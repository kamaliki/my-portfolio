"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4  hidden md:flex items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.spinner className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-right gap-4 text-sm lg:gap-6">
        <Link
          href="/#about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/#" ? "text-foreground" : "text-foreground/60"
          )}
        >
          About
        </Link>
        <Link
          href="/#services"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/services")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
            Services
        </Link>
        <Link
          href="/#skills"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/skills")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
            Skills
        </Link>
        <Link
          href="/#projects"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/projects")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
            Projects
        </Link>
        <Link
          href="/#experience"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
            Experience
        </Link>
        <Link
          href="/#contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contact")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
            Contacts
        </Link>
        
        {/* <Link
          href="/#login"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
            Log in
        </Link> */}
      </nav>
    </div>
  )
}