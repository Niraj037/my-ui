import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.join(__dirname, "../src/components/ui");
const OUTPUT_FILE = path.join(__dirname, "../registry.json");

// Component metadata
const componentMetadata = {
  // Core Elements
  button: {
    description: "Primary action triggers with multiple variants and loading states",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-slot", "class-variance-authority"],
  },
  input: {
    description: "Text input with icon support and error states",
    dependencies: [],
    registryDependencies: [],
  },
  textarea: {
    description: "Multi-line text input",
    dependencies: [],
    registryDependencies: [],
  },
  label: {
    description: "Form labels with accessibility support",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-label"],
  },
  switch: {
    description: "Toggle switches for binary settings",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-switch"],
  },
  checkbox: {
    description: "Multi-select checkboxes",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-checkbox"],
  },
  "radio-group": {
    description: "Single-select radio button groups",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-radio-group"],
  },
  select: {
    description: "Dropdown select menus",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-select"],
  },
  slider: {
    description: "Range sliders with single or dual handles",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-slider"],
  },

  // Structural Elements
  card: {
    description: "Content containers with multiple variants",
    dependencies: [],
    registryDependencies: [],
  },
  dialog: {
    description: "Modal dialogs for important interactions",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-dialog"],
  },
  drawer: {
    description: "Bottom-sliding panels for mobile-friendly content",
    dependencies: [],
    registryDependencies: ["vaul"],
  },
  sheet: {
    description: "Side-sliding panels for navigation and filters",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-dialog"],
  },
  tooltip: {
    description: "Contextual hints on hover",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-tooltip"],
  },
  popover: {
    description: "Floating content panels",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-popover"],
  },
  accordion: {
    description: "Expandable content sections",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-accordion"],
  },

  // Navigation
  navbar: {
    description: "Persistent top navigation bar",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-navigation-menu"],
  },
  breadcrumb: {
    description: "Hierarchical navigation trail",
    dependencies: [],
    registryDependencies: [],
  },
  tabs: {
    description: "Content organization with smooth transitions",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-tabs"],
  },
  pagination: {
    description: "Page navigation controls",
    dependencies: [],
    registryDependencies: [],
  },
  command: {
    description: "Keyboard-driven command palette",
    dependencies: [],
    registryDependencies: ["cmdk"],
  },
  dock: {
    description: "macOS-style floating navigation with magnification",
    dependencies: ["tooltip"],
    registryDependencies: ["framer-motion"],
  },

  // Additional
  separator: {
    description: "Visual divider between content",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-separator"],
  },
  footer: {
    description: "Site footer with links and copyright",
    dependencies: [],
    registryDependencies: [],
  },
  skeleton: {
    description: "Loading placeholder skeletons",
    dependencies: [],
    registryDependencies: [],
  },
  sidebar: {
    description: "Collapsible sidebar navigation",
    dependencies: [],
    registryDependencies: [],
  },
  "navigation-menu": {
    description: "Accessible navigation menu",
    dependencies: [],
    registryDependencies: ["@radix-ui/react-navigation-menu"],
  },
};

async function generateRegistry() {
  console.log("🔨 Generating registry.json...\n");

  const registry = {};
  const files = await fs.readdir(COMPONENTS_DIR);

  for (const file of files) {
    if (!file.endsWith(".tsx") && !file.endsWith(".ts")) continue;
    if (file === "index.ts") continue; // Skip index file

    const componentName = file.replace(/\.(tsx|ts)$/, "");
    const filePath = path.join(COMPONENTS_DIR, file);
    const content = await fs.readFile(filePath, "utf-8");

    const metadata = componentMetadata[componentName] || {
      description: `${componentName} component`,
      dependencies: [],
      registryDependencies: [],
    };

    registry[componentName] = {
      name: componentName,
      description: metadata.description,
      dependencies: metadata.dependencies,
      registryDependencies: metadata.registryDependencies,
      files: [
        {
          path: `components/ui/${file}`,
          type: "registry:ui",
          content: content,
        },
      ],
    };

    console.log(`✅ Added: ${componentName}`);
  }

  // Add utils
  const utilsPath = path.join(__dirname, "../src/lib/utils.ts");
  if (await fs.pathExists(utilsPath)) {
    const utilsContent = await fs.readFile(utilsPath, "utf-8");
    registry["utils"] = {
      name: "utils",
      description: "Utility functions for className merging",
      dependencies: [],
      registryDependencies: ["clsx", "tailwind-merge"],
      files: [
        {
          path: "lib/utils.ts",
          type: "registry:lib",
          content: utilsContent,
        },
      ],
    };
    console.log(`✅ Added: utils`);
  }

  // Write registry
  await fs.writeJson(OUTPUT_FILE, registry, { spaces: 2 });

  console.log(`\n✨ Registry generated successfully!`);
  console.log(`📁 Output: ${OUTPUT_FILE}`);
  console.log(`📦 Total components: ${Object.keys(registry).length}`);
}

generateRegistry().catch(console.error);
