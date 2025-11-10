"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ContainersPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <main className="flex flex-col gap-12 max-w-4xl w-full">
        {/* Header */}
        <div className="space-y-4">
          <Link href="/" className="text-fineshyt/60 hover:text-fineshyt transition-all duration-300 text-sm">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">
            Structural Elements Showcase
          </h1>
          <p className="text-fineshyt/80 max-w-2xl">
            Container components for organizing and displaying content with consistent styling, smooth animations, and intuitive interactions.
          </p>
        </div>

        {/* Card / Panel */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Cards
          </h2>
          <p className="text-fineshyt/60 text-sm">Versatile content containers with multiple layout options</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Card</CardTitle>
                <CardDescription>Basic information container</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-fineshyt/70">
                  Cards provide a structured layout for displaying grouped information with consistent spacing and styling.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Action Card</CardTitle>
                <CardDescription>With interactive footer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-fineshyt/70">
                  Add footer sections with actions or additional information separated by subtle borders.
                </p>
              </CardContent>
              <CardFooter className="border-t border-wine-dusk/40">
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Dialog / Modal */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Dialogs
          </h2>
          <p className="text-fineshyt/60 text-sm">Modal overlays for important messages and confirmations</p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogDescription>
                  Dialogs appear centered on the screen with a smooth fade-in animation and backdrop blur.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-fineshyt/70">
                  Use dialogs for critical information, confirmations, or forms that require full user attention.
                </p>
              </div>
              <DialogFooter>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Drawer */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Drawers
          </h2>
          <p className="text-fineshyt/60 text-sm">Slide-in panels for secondary content</p>
          
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Drawer Panel</DrawerTitle>
                <DrawerDescription>
                  Drawers slide in from the bottom with smooth transitions and can be dismissed by dragging down.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm text-fineshyt/70">
                  Ideal for mobile-friendly interfaces and supplementary content that doesn't require full screen focus.
                </p>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Sheet */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Sheets
          </h2>
          <p className="text-fineshyt/60 text-sm">Slide-out panels from screen edges</p>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Settings Panel</SheetTitle>
                <SheetDescription>
                  Sheets slide in from the side, perfect for navigation menus, filters, or settings.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <p className="text-sm text-fineshyt/70">
                  Can be positioned on any edge of the screen with smooth slide-in animations and backdrop overlays.
                </p>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button>Done</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Tooltip */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Tooltips
          </h2>
          <p className="text-fineshyt/60 text-sm">Contextual hints on hover</p>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost">Hover for Help</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Additional context appears on hover</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Popover */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Popovers
          </h2>
          <p className="text-fineshyt/60 text-sm">Interactive floating content panels</p>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Options</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Filter Options</h4>
                <p className="text-sm text-fineshyt/70">
                  Popovers display additional content and controls positioned relative to their trigger element.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Accordion */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Accordions
          </h2>
          <p className="text-fineshyt/60 text-sm">Expandable content sections</p>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Getting Started</AccordionTrigger>
              <AccordionContent>
                Accordions allow you to display expandable content sections with smooth animations and clear visual hierarchy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Advanced Features</AccordionTrigger>
              <AccordionContent>
                Support for single or multiple open sections, with customizable transitions and indicator icons.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Best Practices</AccordionTrigger>
              <AccordionContent>
                Use accordions to organize related content into collapsible sections for better space management and user experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </main>
    </div>
  );
}
