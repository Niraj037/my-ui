# MyUI Core Elements (The Heartbeat)

All components follow the **Quintet palette** with **slow, smooth animations (300-500ms)** and **no drop shadows**.

## ✅ Completed Components

### 1. **Button** - Minimal Copper Plate
- **Location**: `src/components/ui/button.tsx`
- **Default Style**: Ember background with Obsidian text
- **Variants**: outline, secondary, ghost, link
- **Sizes**: sm, default, lg
- **Animation**: 300ms smooth transitions
- **Focus**: Glass (aqua) ring on focus

### 2. **Input** - Obsidian Field, Aqua Focus Halo
- **Location**: `src/components/ui/input.tsx`
- **Style**: Wine Dusk background with FineShyt text
- **Focus**: Glass (aqua) ring on focus (2px)
- **Animation**: 300ms smooth transitions

### 3. **Textarea** - Same as Input, More Room
- **Location**: `src/components/ui/textarea.tsx`
- **Style**: Same as Input with multi-line support
- **Focus**: Glass (aqua) ring on focus
- **Resize**: Vertical only

### 4. **Switch** - Flat Toggle (Muted Copper / Aqua)
- **Location**: `src/components/ui/switch.tsx`
- **Unchecked**: Ember/30 (muted copper)
- **Checked**: Glass (aqua)
- **Animation**: 500ms smooth slide

### 5. **Checkbox** - Square, Slow Matte Fill
- **Location**: `src/components/ui/checkbox.tsx`
- **Style**: Square with Wine Dusk border
- **Checked**: Glass (aqua) background with slow 400ms fill
- **Icon**: White checkmark

### 6. **Radio** - Aqua Pulse Ring When Selected
- **Location**: `src/components/ui/radio-group.tsx`
- **Selected**: Glass (aqua) ring with inner dot
- **Animation**: 400ms smooth pulse
- **Focus**: Glass ring on focus

### 7. **Select / Dropdown** - Expands Like a Curtain
- **Location**: `src/components/ui/select.tsx`
- **Trigger**: Wine Dusk background with Glass focus ring
- **Content**: Wine Dusk/95 with backdrop blur (curtain effect)
- **Animation**: 500ms slide-in from top (curtain expansion)
- **Item Hover**: Glass/20 background
- **Selected**: Glass checkmark

### 8. **Slider** - Copper Track, Aqua Handle Glow
- **Location**: `src/components/ui/slider.tsx`
- **Track**: Ember (copper) background
- **Thumb**: Glass (aqua) with glow effect
- **Animation**: Smooth transitions
- **Focus**: Glass ring on thumb focus

### 9. **Range** - Dual-Handle Slider
- **Location**: `src/components/ui/slider.tsx`
- **Same component as Slider**
- **Support**: Multiple thumbs for range selection
- **Min Steps**: Configurable minimum steps between thumbs

---

## Color Reference (The Quintet)

| Color | Hex | Usage |
|-------|-----|-------|
| **Obsidian** | `#1a1a1a` | Main background, button text |
| **Ember** | `#b45f3a` | Buttons, links, slider track |
| **Wine Dusk** | `#3c2a3d` | Cards, inputs, borders |
| **Glass** | `#4a9c9b` | Focus states, active elements, checkboxes |
| **FineShyt** | `#f4dce0` | Text, premium matte pink accents |

---

## Design Rules

1. **Animations**: All transitions are 300-500ms
2. **Focus States**: Always use Glass (aqua) for focus rings
3. **No Shadows**: Use color separation instead (Wine Dusk backgrounds)
4. **Typography**: JetBrains Mono, lowercase headings
5. **Spacing**: Generous negative space throughout

---

## Pages

- **Home** (`/`): Introduction, color palette, design principles
- **Showcase** (`/showcase`): All components with interactive examples

---

Built with intention. 🎨
