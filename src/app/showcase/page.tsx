"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";

export default function ShowcasePage() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [rangeValue, setRangeValue] = useState([25, 75]);

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <main className="flex flex-col gap-12 max-w-4xl w-full">
        {/* Header */}
        <div className="space-y-4">
          <Link href="/" className="text-fineshyt/60 hover:text-fineshyt transition-all duration-300 text-sm">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight lowercase">
            Core Elements Showcase
          </h1>
          <p className="text-fineshyt/80 max-w-2xl">
            Essential input and form components designed for seamless user interaction. Each component follows the Quintet color palette with intentional 300ms transitions.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold lowercase mb-2">
              Buttons
            </h2>
            <p className="text-fineshyt/60 text-sm">
              Primary action triggers with multiple variants for different contexts.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Input Fields */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold lowercase mb-2">
              Input Fields
            </h2>
            <p className="text-fineshyt/60 text-sm">
              Text input fields with Ember focus states and Wine Dusk backgrounds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-fineshyt/80 text-sm">Email Address</Label>
              <Input type="email" placeholder="Enter your email..." />
            </div>
            
            <div className="space-y-2">
              <Label className="text-fineshyt/80 text-sm">With Default Value</Label>
              <Input defaultValue="hello@myui.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-fineshyt/80 text-sm">Message</Label>
            <Textarea placeholder="Type your message here..." rows={4} />
          </div>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Switches & Checkboxes */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold lowercase mb-2">
              Switches & Checkboxes
            </h2>
            <p className="text-fineshyt/60 text-sm">
              Toggle controls with smooth 400ms state transitions and Ember accents.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Switch />
              <Label className="text-fineshyt/80 text-sm">Enable notifications</Label>
            </div>

            <div className="flex items-center gap-4">
              <Checkbox id="check1" />
              <Label htmlFor="check1" className="text-fineshyt/80 text-sm">Accept terms and conditions</Label>
            </div>
            
            <div className="flex items-center gap-4">
              <Checkbox id="check2" defaultChecked />
              <Label htmlFor="check2" className="text-fineshyt/80 text-sm">Subscribe to newsletter</Label>
            </div>
          </div>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Radio Buttons */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold lowercase mb-2">
              Radio Groups
            </h2>
            <p className="text-fineshyt/60 text-sm">
              Single-selection controls with pulsing Ember indicator.
            </p>
          </div>
          
          <RadioGroup defaultValue="option1">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <RadioGroupItem value="option1" id="r1" />
                <Label htmlFor="r1" className="text-fineshyt/80 text-sm">Standard shipping (5-7 days)</Label>
              </div>
              <div className="flex items-center gap-4">
                <RadioGroupItem value="option2" id="r2" />
                <Label htmlFor="r2" className="text-fineshyt/80 text-sm">Express shipping (2-3 days)</Label>
              </div>
              <div className="flex items-center gap-4">
                <RadioGroupItem value="option3" id="r3" />
                <Label htmlFor="r3" className="text-fineshyt/80 text-sm">Overnight delivery (1 day)</Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Select / Dropdown */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold lowercase mb-2">
              Select Dropdowns
            </h2>
            <p className="text-fineshyt/60 text-sm">
              Dropdown menus with 500ms curtain expansion and Wine Dusk backdrop.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-fineshyt/80 text-sm">Color Theme</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a color..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="obsidian">Obsidian</SelectItem>
                  <SelectItem value="ember">Ember</SelectItem>
                  <SelectItem value="winedusk">Wine Dusk</SelectItem>
                  <SelectItem value="glass">Glass</SelectItem>
                  <SelectItem value="fineshyt">FineShyt</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-fineshyt/80 text-sm">Preset Selection</Label>
              <Select defaultValue="ember">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="obsidian">Obsidian</SelectItem>
                  <SelectItem value="ember">Ember</SelectItem>
                  <SelectItem value="winedusk">Wine Dusk</SelectItem>
                  <SelectItem value="glass">Glass</SelectItem>
                  <SelectItem value="fineshyt">FineShyt</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="h-px bg-winedusk/40 w-full" />

        {/* Sliders */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold lowercase mb-2">
              Sliders
            </h2>
            <p className="text-fineshyt/60 text-sm">
              Range controls with Ember handles and smooth tracking.
            </p>
          </div>
          
          <div className="space-y-4">
            <Label className="text-fineshyt/80 text-sm">
              Volume Control
            </Label>
            <Slider 
              value={sliderValue} 
              onValueChange={setSliderValue}
              max={100}
              step={1}
            />
            <p className="text-fineshyt/60 text-sm">Current value: {sliderValue[0]}%</p>
          </div>

          <div className="space-y-4">
            <Label className="text-fineshyt/80 text-sm">
              Price Range Filter
            </Label>
            <Slider 
              value={rangeValue} 
              onValueChange={setRangeValue}
              max={100}
              step={1}
              minStepsBetweenThumbs={1}
            />
            <p className="text-fineshyt/60 text-sm">Range: ${rangeValue[0]} - ${rangeValue[1]}</p>
          </div>
        </div>

      </main>
    </div>
  );
}
