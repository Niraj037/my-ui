# Contributing to MyUI Design System

First off, thank you for considering contributing to MyUI! This is currently a beta release, and community feedback helps make it better.

## 🎯 Ways to Contribute

- **Report bugs** - Found something broken? Let us know!
- **Request features** - Have ideas for new components or improvements?
- **Improve documentation** - Help make the docs clearer
- **Submit code** - Fix bugs or implement new features
- **Share feedback** - Tell us what you think about the design system

## 🐛 Reporting Bugs

Before creating a bug report, please check existing issues to avoid duplicates.

**When reporting bugs, include:**
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

## 💡 Suggesting Features

We love new ideas! When suggesting features:
- Explain the problem you're trying to solve
- Describe your proposed solution
- Consider how it fits with the MyUI design philosophy:
  - Dark, mysterious aesthetic
  - Minimal with intentional animations
  - Quintet color palette consistency
  - 300-500ms transition timing

## 🔧 Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/my-ui.git
cd my-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📋 Pull Request Process

1. **Fork** the repository
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following our coding standards
4. **Test thoroughly** - ensure nothing breaks
5. **Commit** with clear, descriptive messages:
   ```bash
   git commit -m "feat: add new button variant"
   git commit -m "fix: resolve tooltip positioning issue"
   ```
6. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request** with a clear description

## 🎨 Design Guidelines

When contributing components or styles:

### Color Usage
- **Ember** (#b45f3a) - Active states, focus rings, accents
- **Wine Dusk** (#3c2a3d) - Containers, borders, hover states
- **Obsidian** (#1a1a1a) - Backgrounds
- **FineShyt** (#f4dce0) - Text (with opacity variants)
- **Glass** (#4a9c9b) - Legacy only

### Animation Standards
- Use 300-500ms duration for transitions
- `transition-all duration-300` or `duration-500`
- Smooth, ceremonial feel - nothing abrupt
- Spring physics for interactive elements (via Framer Motion)

### Typography
- Lowercase headings throughout
- JetBrains Mono font
- Text hierarchy via FineShyt opacity (100%, 80%, 60%, 50%)

### Component Standards
- **TypeScript** - All components must be typed
- **Accessible** - Follow ARIA best practices
- **Responsive** - Mobile-first approach
- **Flexible** - Accept className for customization
- **Documented** - Add JSDoc comments for props

## 📝 Coding Standards

```tsx
// ✅ Good
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive";
  /** Size preset */
  size?: "default" | "sm" | "lg" | "icon";
  /** Loading state with spinner */
  loading?: boolean;
}

// ✅ Good - Consistent naming
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", loading, ...props }, ref) => {
    // Implementation
  }
);
Button.displayName = "Button";

// ✅ Good - Tailwind classes organized
className={cn(
  "base-styles",
  "color-styles",
  "state-styles",
  variant === "default" && "variant-specific",
  className
)}
```

## 🧪 Testing

Before submitting:
- [ ] Components render correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Dark theme is maintained
- [ ] Animations are smooth (300-500ms)
- [ ] TypeScript types are correct
- [ ] No console errors/warnings
- [ ] Accessibility is maintained

## 📖 Documentation

If you add new components:
- Add usage examples to README.md
- Create showcase page examples
- Add TypeScript interface documentation
- Include real-world use cases

## ⚡ Quick Tips

- **Stay consistent** with existing patterns
- **Keep it minimal** - less is more
- **Maintain the vibe** - mysterious, elegant, intentional
- **No drop shadows** - use Wine Dusk borders for separation
- **Test in the showcase pages** - they're your playground

## 🎯 Component Checklist

When creating/updating components:

- [ ] TypeScript interface with JSDoc
- [ ] Accepts `className` prop
- [ ] Uses Quintet color palette
- [ ] 300-500ms transitions
- [ ] Lowercase naming in examples
- [ ] Responsive design
- [ ] ARIA attributes
- [ ] Forwarded refs
- [ ] Added to component index (`src/components/ui/index.ts`)
- [ ] Example in appropriate showcase page

## 🙏 Recognition

Contributors will be recognized in the project! Thank you for helping make MyUI better.

---

**Questions?** Open an issue or discussion on GitHub.

**Made by Niraj** • For WithinBrackets & other projects
