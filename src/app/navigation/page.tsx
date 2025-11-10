"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar, NavbarContent, NavbarBrand, NavbarMenu, NavbarMenuItem, NavbarLink } from "@/components/ui/navbar";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut } from "@/components/ui/command";
import { CommandDialog } from "@/components/ui/command";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Calculator, Calendar, CreditCard, Settings, Smile, User, Home, Package, Palette, Navigation, Layers, Sparkles } from "lucide-react";

export default function NavigationPage() {
  const [open, setOpen] = useState(false);
  const [activeDockItem, setActiveDockItem] = useState("home");

  return (
    <div className="min-h-screen">
      {/* Navbar Example - Live at top */}
      <Navbar>
        <NavbarContent>
          <NavbarBrand>
            <span className="text-ember">my</span>ui
          </NavbarBrand>
          <NavbarMenu>
            <NavbarMenuItem>
              <NavbarLink href="/" active>home</NavbarLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NavbarLink href="/showcase">core</NavbarLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NavbarLink href="/containers">containers</NavbarLink>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NavbarLink href="/navigation">navigation</NavbarLink>
            </NavbarMenuItem>
          </NavbarMenu>
        </NavbarContent>
      </Navbar>

      <div className="flex min-h-screen items-center justify-center p-8">
        <main className="flex flex-col gap-12 max-w-4xl w-full">
          {/* Header */}
          <div className="space-y-4">
            <Link href="/" className="text-fineshyt/60 hover:text-fineshyt transition-all duration-300 text-sm">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tight">
              Navigation Elements Showcase
            </h1>
            <p className="text-fineshyt/80 max-w-2xl">
              Intuitive navigation components for guiding users through your application with smooth transitions and clear visual feedback.
            </p>
          </div>

          {/* Navbar */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Navigation Bar
            </h2>
            <p className="text-fineshyt/60 text-sm">Persistent top navigation with minimal styling</p>
            <div className="space-y-4">
              <p className="text-sm text-fineshyt/70">
                The navigation bar is visible at the top of this page, providing consistent site-wide navigation.
              </p>
              
              <div className="text-sm text-fineshyt/70 space-y-2">
                <p className="font-semibold text-fineshyt">Features:</p>
                <ul className="list-disc list-inside space-y-1 text-fineshyt/60">
                  <li>Fixed positioning with minimal transparency</li>
                  <li>Subtle backdrop blur effect</li>
                  <li>Active state highlighting</li>
                  <li>Clean, unobtrusive design</li>
                  <li>Responsive layout support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px bg-winedusk/40 w-full" />

          {/* Breadcrumbs */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Breadcrumbs
            </h2>
            <p className="text-fineshyt/60 text-sm">Hierarchical navigation trail</p>
            
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Navigation</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="h-px bg-winedusk/40 w-full" />

          {/* Tabs */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Tabs
            </h2>
            <p className="text-fineshyt/60 text-sm">Content organization with smooth transitions</p>
            
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="py-4">
                <p className="text-sm text-fineshyt/70">
                  Tabs provide an intuitive way to organize related content into separate views with clear visual indicators for the active tab.
                </p>
              </TabsContent>
              <TabsContent value="password" className="py-4">
                <p className="text-sm text-fineshyt/70">
                  Smooth transitions between tabs with animated underline indicators that follow user interactions.
                </p>
              </TabsContent>
              <TabsContent value="settings" className="py-4">
                <p className="text-sm text-fineshyt/70">
                  Consistent styling with subtle borders and spacing for a clean, professional appearance.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="h-px bg-winedusk/40 w-full" />

          {/* Pagination */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Pagination
            </h2>
            <p className="text-fineshyt/60 text-sm">Page navigation controls</p>
            
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">10</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
            
            <p className="text-sm text-fineshyt/70">
              Clear visual indicators for the current page with interactive navigation controls for moving between pages.
            </p>
          </div>

          <div className="h-px bg-winedusk/40 w-full" />

          {/* Command Palette */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Command Palette
            </h2>
            <p className="text-fineshyt/60 text-sm">Quick action and search interface</p>
            
            <div className="space-y-4">
              <Button onClick={() => setOpen(true)} variant="outline">
                Open Command Palette
                <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-winedusk/40 bg-winedusk/20 px-1.5 font-mono text-[10px] font-medium text-fineshyt/70">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>

              <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Calendar className="mr-2" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className="mr-2" />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator className="mr-2" />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2" />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className="mr-2" />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2" />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </CommandDialog>

              <p className="text-sm text-fineshyt/70">
                A powerful keyboard-driven interface for quick access to commands and features with fuzzy search and keyboard shortcuts.
              </p>
            </div>
          </div>

          <div className="h-px bg-winedusk/40 w-full" />

          {/* The Dock */}
          <div className="space-y-6 pb-32">
            <h2 className="text-2xl font-semibold">
              Dock
            </h2>
            <p className="text-fineshyt/60 text-sm">Floating navigation with magnification effects</p>
            
            <div className="space-y-4">
              <p className="text-sm text-fineshyt/70">
                A macOS-inspired floating navigation component with interactive magnification effects and smooth animations.
              </p>
              
              <div className="bg-winedusk/30 border-2 border-glass/10 rounded-xl p-8 min-h-[300px] relative">
                <p className="text-xs text-fineshyt/50 text-center mb-4">
                  Interactive Demo - Hover over the dock icons
                </p>
                
                <Dock direction="bottom">
                  <DockIcon 
                    label="home" 
                    isActive={activeDockItem === "home"}
                    onClick={() => setActiveDockItem("home")}
                  >
                    <Home className="h-5 w-5" />
                  </DockIcon>
                  <DockIcon 
                    label="showcase" 
                    isActive={activeDockItem === "showcase"}
                    onClick={() => setActiveDockItem("showcase")}
                  >
                    <Sparkles className="h-5 w-5" />
                  </DockIcon>
                  <DockIcon 
                    label="containers" 
                    isActive={activeDockItem === "containers"}
                    onClick={() => setActiveDockItem("containers")}
                  >
                    <Package className="h-5 w-5" />
                  </DockIcon>
                  <DockIcon 
                    label="navigation" 
                    isActive={activeDockItem === "navigation"}
                    onClick={() => setActiveDockItem("navigation")}
                  >
                    <Navigation className="h-5 w-5" />
                  </DockIcon>
                  <DockIcon 
                    label="layers" 
                    isActive={activeDockItem === "layers"}
                    onClick={() => setActiveDockItem("layers")}
                  >
                    <Layers className="h-5 w-5" />
                  </DockIcon>
                  <DockIcon 
                    label="palette" 
                    isActive={activeDockItem === "palette"}
                    onClick={() => setActiveDockItem("palette")}
                  >
                    <Palette className="h-5 w-5" />
                  </DockIcon>
                </Dock>
              </div>

              <div className="text-sm text-fineshyt/70 space-y-2">
                <p className="font-semibold text-fineshyt">Features:</p>
                <ul className="list-disc list-inside space-y-1 text-fineshyt/60">
                  <li>Frosted glass effect with backdrop blur</li>
                  <li>Spring-based magnification physics on hover</li>
                  <li>Active state indicators</li>
                  <li>Tooltips for improved accessibility</li>
                  <li>Flexible positioning (bottom, top, left, right)</li>
                  <li>Smooth animations powered by Framer Motion</li>
                </ul>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
