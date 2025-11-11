import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "MyUI Design System - Home",
  description: "A dark, minimalist design system built on the Quintet palette",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
      <main className="flex flex-col gap-16 max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            myui design system
          </h1>
          <p className="text-fineshyt/80 max-w-2xl text-lg">
            A dark, minimalist design system built on the Quintet palette. Mysterious, elegant, and intentional.
          </p>
          <p className="text-fineshyt/60 text-sm">
            v1.0.0-beta.1 • Built with shadcn/ui, Next.js 16, and Tailwind CSS v4
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <Link href="/showcase">
            <Button size="lg">Explore Components</Button>
          </Link>
          <Link href="/containers">
            <Button variant="outline" size="lg">Containers</Button>
          </Link>
          <Link href="/navigation">
            <Button variant="secondary" size="lg">Navigation</Button>
          </Link>
        </div>

        {/* Color Palette */}
        <div className="space-y-8 pt-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              the quintet palette
            </h2>
            <p className="text-fineshyt/60 text-sm">
              Five carefully chosen colors that create a mysterious, elegant aesthetic
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="space-y-3 group">
              <div className="h-24 w-full bg-obsidian border border-fineshyt/20 rounded-md transition-all duration-300 group-hover:border-fineshyt/40 group-hover:scale-105"></div>
              <p className="text-sm font-medium">obsidian</p>
              <code className="text-xs text-fineshyt/60 font-mono">#1a1a1a</code>
              
            </div>
            
            <div className="space-y-3 group">
              <div className="h-24 w-full bg-ember rounded-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-ember/20 group-hover:scale-105"></div>
              <p className="text-sm font-medium">ember</p>
              <code className="text-xs text-fineshyt/60 font-mono">#b45f3a</code>
              
            </div>
            
            <div className="space-y-3 group">
              <div className="h-24 w-full bg-wine-dusk rounded-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-winedusk/20 group-hover:scale-105"></div>
              <p className="text-sm font-medium">wine dusk</p>
              <code className="text-xs text-fineshyt/60 font-mono">#3c2a3d</code>
           
            </div>
            
            <div className="space-y-3 group">
              <div className="h-24 w-full bg-glass rounded-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-glass/20 group-hover:scale-105"></div>
              <p className="text-sm font-medium">glass</p>
              <code className="text-xs text-fineshyt/60 font-mono">#4a9c9b</code>
            
            </div>
            
            <div className="space-y-3 group">
              <div className="h-24 w-full bg-fineshyt rounded-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-fineshyt/20 group-hover:scale-105"></div>
              <p className="text-sm font-medium">fineshyt</p>
              <code className="text-xs text-fineshyt/60 font-mono">#f4dce0</code>
        
            </div>
          </div>
        </div>

      </main>
      </div>
      <Footer />
    </div>
  );
}
