import * as React from "react"
import { cn } from "@/lib/utils"

function Navbar({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b border-obsidian bg-obsidian/90 backdrop-blur-sm transition-all duration-300",
        className
      )}
      {...props}
    />
  )
}

function NavbarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-14 items-center justify-between px-4 md:px-6",
        className
      )}
      {...props}
    />
  )
}

function NavbarBrand({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-semibold text-fineshyt",
        className
      )}
      {...props}
    />
  )
}

function NavbarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "flex items-center gap-6",
        className
      )}
      {...props}
    />
  )
}

function NavbarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "list-none",
        className
      )}
      {...props}
    />
  )
}

function NavbarLink({ className, active, ...props }: React.ComponentProps<"a"> & { active?: boolean }) {
  return (
    <a
      className={cn(
        "text-sm font-medium transition-all duration-300 outline-none lowercase",
        active 
          ? "text-ember" 
          : "text-fineshyt/60 hover:text-fineshyt/90",
        "focus-visible:ring-1 focus-visible:ring-winedusk/50 rounded-sm px-2 py-1",
        className
      )}
      {...props}
    />
  )
}

export {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarLink,
}
