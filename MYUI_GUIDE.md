# MyUI Design System

A dark, minimalist design system built on the **Quintet** color palette using shadcn/ui components.

## The Quintet Color Palette

MyUI is built around 5 main colors, each with a specific purpose:

### 1. **Obsidian** (`#1a1a1a`)
- **Purpose:** Main background color
- **Usage:** Page backgrounds, base layers
- **Shades:** `obsidian-50` to `obsidian-900`

### 2. **Ember** (`#b45f3a`)
- **Purpose:** Primary action color (copper/orange)
- **Usage:** Buttons, links, primary actions, CTAs
- **Shades:** `ember-50` to `ember-900`
- **Default variant color**

### 3. **Wine Dusk** (`#3c2a3d`)
- **Purpose:** Secondary surfaces (velvet purple)
- **Usage:** Cards, panels, elevated surfaces, borders
- **Shades:** `wine-dusk-50` to `wine-dusk-900`
- **Creates depth without drop shadows**

### 4. **Glass** (`#4a9c9b`)
- **Purpose:** Focus and active states (aqua/teal)
- **Usage:** Focus rings, active elements, hover states
- **Shades:** `glass-50` to `glass-900`
- **Accent color**

### 5. **Veil** (`#f4dce0`)
- **Purpose:** Text and subtle highlights (pale pink)
- **Usage:** Primary text, subtle highlights, loading states
- **Shades:** `veil-50` to `veil-900`

## Design Principles

1. **Dark & Minimalist:** Deep black backgrounds with generous negative space
2. **No Drop Shadows:** Use color separation (Wine Dusk backgrounds) instead
3. **Smooth Animations:** All transitions are 300-500ms for a luxurious feel
4. **Lowercase Typography:** All headings use lowercase with JetBrains Mono
5. **Off-Center Layouts:** Artistic, asymmetric compositions
6. **Expensive Feel:** Clean, simple, high-end aesthetic

## Using the Color System

### Predefined Component Variants

All components come with Quintet-based variants:

```tsx
// Ember (default) - Primary action
<Button>Click me</Button>
<Button variant="default">Click me</Button>

// Other Quintet colors
<Button variant="obsidian">Obsidian Button</Button>
<Button variant="wineDusk">Wine Dusk Button</Button>
<Button variant="glass">Glass Button</Button>
<Button variant="veil">Veil Button</Button>

// Outline variants
<Button variant="outline">Default Outline</Button>
<Button variant="outlineEmber">Ember Outline</Button>
<Button variant="outlineGlass">Glass Outline</Button>

// Ghost variants
<Button variant="ghost">Default Ghost</Button>
<Button variant="ghostEmber">Ember Ghost</Button>
<Button variant="ghostGlass">Glass Ghost</Button>
```

### Custom Color Classes

Use Tailwind utilities with any Quintet color:

```tsx
// Background colors
<div className="bg-ember">...</div>
<div className="bg-ember-600">...</div>
<div className="bg-glass-300">...</div>

// Text colors
<p className="text-veil">...</p>
<p className="text-ember-700">...</p>

// Borders
<div className="border border-wine-dusk">...</div>
<div className="border-2 border-glass-500">...</div>

// With opacity
<div className="bg-ember/50">...</div>
<p className="text-veil/80">...</p>

// Hover states
<button className="bg-ember hover:bg-ember-700">...</button>
```

### Programmatic Access

Import the color utilities for JavaScript/TypeScript:

```typescript
import { myuiColors, getColor, colorUsage } from '@/lib/colors';

// Direct access
const emberColor = myuiColors.ember.DEFAULT; // '#b45f3a'
const darkEmber = myuiColors.ember[700]; // '#884225'

// Using the helper function
const color = getColor('glass', 500); // '#4a9c9b'

// Recommended usage patterns
const bgColor = colorUsage.background.primary; // '#1a1a1a'
const actionColor = colorUsage.action.primary; // '#b45f3a'
```

## Color Shades

Each color has 10 shades (50, 100, 200, 300, 400, 500, 600, 700, 800, 900) plus a DEFAULT value:

- **50-300:** Lighter variations
- **400-500:** Mid-range (DEFAULT is usually 500 or close to it)
- **600-900:** Darker variations

## Component Customization

### Button Examples

```tsx
// Size variants
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// Combining variant + size
<Button variant="glass" size="lg">Large Glass Button</Button>

// Custom styling
<Button className="bg-ember-700 hover:bg-ember-800">
  Dark Ember
</Button>

// With Tailwind utilities
<Button variant="ghost" className="text-glass hover:bg-glass/10">
  Custom Ghost
</Button>
```

## Creating New Components

When creating new components, follow these guidelines:

1. **Default to Ember + Obsidian:** Primary actions use Ember background with Obsidian text
2. **Focus states use Glass:** All focus rings should be Glass (aqua)
3. **Surfaces use Wine Dusk:** Cards, panels, and elevated surfaces use Wine Dusk
4. **Text uses Veil:** Primary text is Veil (pale pink)
5. **Smooth transitions:** Always use `transition-all duration-300` or `duration-500`
6. **No shadows:** Use `bg-wine-dusk` for depth instead of `shadow-*`

### Example Component Pattern

```tsx
<div className="bg-wine-dusk p-6 rounded-lg transition-all duration-300">
  <h2 className="text-veil text-xl mb-4">My Panel</h2>
  <p className="text-veil/80">Content goes here</p>
  <Button variant="ember" className="mt-4">Take Action</Button>
</div>
```

## Accessibility

- Ensure text has sufficient contrast against backgrounds
- Use Veil (#f4dce0) for primary text on dark backgrounds (Obsidian/Wine Dusk)
- Use Obsidian (#1a1a1a) for text on light backgrounds (Ember/Glass/Veil)
- Glass focus rings provide clear focus indicators

## Animation Timing

```css
/* Buttons, links, small interactions */
transition-all duration-300

/* Modals, panels, larger elements */
transition-all duration-500

/* Subtle hover effects */
transition-colors duration-300
```

## Typography

- **Font:** JetBrains Mono (monospace)
- **Headings:** Always lowercase
- **Body text:** Normal casing

```tsx
<h1 className="text-4xl">this is a heading</h1>
<p className="text-veil/80">This is body text with normal casing.</p>
```

## Examples

### Card Component

```tsx
<div className="bg-wine-dusk p-6 rounded-lg space-y-4">
  <h3 className="text-xl text-veil">card title</h3>
  <p className="text-veil/80">Card description text</p>
  <Button variant="ember">Take Action</Button>
</div>
```

### Input Field

```tsx
<input 
  className="bg-wine-dusk border border-wine-dusk-400 text-veil 
             focus:border-glass focus:ring-2 focus:ring-glass 
             px-4 py-2 rounded-md transition-all duration-300
             placeholder:text-veil/40"
  placeholder="Enter text..."
/>
```

### Navigation

```tsx
<nav className="bg-obsidian border-b border-wine-dusk">
  <a href="#" className="text-veil hover:text-ember transition-colors duration-300">
    Home
  </a>
  <a href="#" className="text-ember">Active Link</a>
</nav>
```

## Getting Started

1. All colors are available as Tailwind utilities
2. Import components from `@/components/ui`
3. Use predefined variants for consistency
4. Customize with `className` when needed
5. Reference `@/lib/colors` for programmatic access

## Resources

- **Demo Page:** See `src/app/page.tsx` for live examples
- **Color Utilities:** `src/lib/colors.ts`
- **Button Component:** `src/components/ui/button.tsx`
- **Global Styles:** `src/app/globals.css`
