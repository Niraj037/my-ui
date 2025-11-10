"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ComponentsPage() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchState, setSwitchState] = useState(false);

  return (
    <div className="min-h-screen p-16 md:p-24 lg:p-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-32">
          <div className="w-12 h-[2px] bg-ember mb-8"></div>
          <h1 className="text-5xl font-light tracking-tighter mb-4">
            components
          </h1>
          <p className="text-veil/40 text-sm tracking-wide">
            minimal forms for elegant interfaces
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-12 gap-16">
          {/* Left Column - 2 cols empty */}
          <div className="col-span-2"></div>

          {/* Main Content - 8 cols */}
          <div className="col-span-8 space-y-24">
            {/* Input */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-[1px] bg-veil/20"></div>
                <h2 className="text-2xl font-light tracking-wide">
                  input field
                </h2>
              </div>
              <div className="space-y-4 pl-10">
                <Input placeholder="obsidian field, glass focus halo..." />
                <Input type="email" placeholder="enter your email" />
                <Input type="password" placeholder="secret phrase" />
              </div>
            </div>

            {/* Textarea */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-[1px] bg-veil/20"></div>
                <h2 className="text-2xl font-light tracking-wide">
                  textarea
                </h2>
              </div>
              <div className="space-y-4 pl-10">
                <Textarea placeholder="more room for your thoughts..." rows={4} />
              </div>
            </div>

            {/* Switch */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-[1px] bg-veil/20"></div>
                <h2 className="text-2xl font-light tracking-wide">
                  switch
                </h2>
              </div>
              <div className="space-y-6 pl-10">
                <div className="flex items-center gap-4">
                  <Switch checked={switchState} onCheckedChange={setSwitchState} />
                  <span className="text-sm text-veil/60">flat toggle, muted copper / aqua</span>
                </div>
                <div className="flex items-center gap-4">
                  <Switch defaultChecked />
                  <span className="text-sm text-veil/60">enabled by default</span>
                </div>
                <div className="flex items-center gap-4">
                  <Switch disabled />
                  <span className="text-sm text-veil/60">disabled state</span>
                </div>
              </div>
            </div>

            {/* Checkbox */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-[1px] bg-veil/20"></div>
                <h2 className="text-2xl font-light tracking-wide">
                  checkbox
                </h2>
              </div>
              <div className="space-y-4 pl-10">
                <div className="flex items-center gap-4">
                  <Checkbox id="terms1" />
                  <label htmlFor="terms1" className="text-sm text-veil/80 cursor-pointer">
                    square, slow matte fill
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <Checkbox id="terms2" defaultChecked />
                  <label htmlFor="terms2" className="text-sm text-veil/80 cursor-pointer">
                    accept the terms and conditions
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <Checkbox id="terms3" disabled />
                  <label htmlFor="terms3" className="text-sm text-veil/60 cursor-not-allowed">
                    disabled option
                  </label>
                </div>
              </div>
            </div>

            {/* Radio */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-[1px] bg-veil/20"></div>
                <h2 className="text-2xl font-light tracking-wide">
                  radio
                </h2>
              </div>
              <div className="pl-10">
                <RadioGroup defaultValue="option1">
                  <div className="flex items-center gap-4 mb-4">
                    <RadioGroupItem value="option1" id="option1" />
                    <label htmlFor="option1" className="text-sm text-veil/80 cursor-pointer">
                      aqua pulse ring when selected
                    </label>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <RadioGroupItem value="option2" id="option2" />
                    <label htmlFor="option2" className="text-sm text-veil/80 cursor-pointer">
                      second option
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="option3" id="option3" />
                    <label htmlFor="option3" className="text-sm text-veil/80 cursor-pointer">
                      third choice
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-[1px] bg-veil/20"></div>
                <h2 className="text-2xl font-light tracking-wide">
                  slider
                </h2>
              </div>
              <div className="space-y-8 pl-10">
                <div className="space-y-2">
                  <Slider value={sliderValue} onValueChange={setSliderValue} />
                  <p className="text-xs text-veil/40">copper track, glass handle glow - value: {sliderValue[0]}</p>
                </div>
                <div className="space-y-2">
                  <Slider defaultValue={[30]} />
                  <p className="text-xs text-veil/40">single handle at 30</p>
                </div>
                <div className="space-y-2">
                  <Slider defaultValue={[20, 80]} />
                  <p className="text-xs text-veil/40">dual-handle range slider</p>
                </div>
              </div>
            </div>

            {/* Button Reminder */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-6 h-[1px] bg-veil/20"></div>
                <h2 className="text-2xl font-light tracking-wide">
                  trigger
                </h2>
              </div>
              <div className="flex flex-wrap gap-4 pl-10">
                <Button>default ember</Button>
                <Button variant="ghost">ghost</Button>
                <Button variant="link">link</Button>
              </div>
            </div>
          </div>

          {/* Right Column - 2 cols empty */}
          <div className="col-span-2"></div>
        </div>

        {/* Footer Accent */}
        <div className="mt-32 flex justify-center">
          <div className="text-center space-y-2">
            <div className="w-32 h-[1px] bg-veil/20 mx-auto mb-4"></div>
            <p className="text-xs text-veil/30 tracking-widest uppercase">
              fine shyt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
