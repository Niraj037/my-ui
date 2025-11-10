/**
 * MyUI Color System - The Quintet Palette
 * 
 * This file provides easy access to all MyUI colors and their shades.
 * Use these utilities for programmatic color manipulation and theming.
 */

export const myuiColors = {
  // Obsidian (Black) - Main background
  obsidian: {
    DEFAULT: '#1a1a1a',
    50: '#2a2a2a',
    100: '#252525',
    200: '#202020',
    300: '#1a1a1a',
    400: '#151515',
    500: '#101010',
    600: '#0c0c0c',
    700: '#080808',
    800: '#050505',
    900: '#000000',
  },
  
  // Ember (Copper) - Primary action color
  ember: {
    DEFAULT: '#b45f3a',
    50: '#fef7f4',
    100: '#fdeee8',
    200: '#fad5c5',
    300: '#f7bca2',
    400: '#f18a5c',
    500: '#b45f3a',
    600: '#a24f2e',
    700: '#884225',
    800: '#6e351e',
    900: '#5a2c19',
  },
  
  // Wine Dusk (Velvet Purple) - Cards/Panels
  wineDusk: {
    DEFAULT: '#3c2a3d',
    50: '#f7f5f7',
    100: '#eee9ee',
    200: '#d5c8d5',
    300: '#bca7bc',
    400: '#8a658b',
    500: '#3c2a3d',
    600: '#362637',
    700: '#2d202e',
    800: '#241a25',
    900: '#1d151e',
  },
  
  // Glass (Aqua) - Focus/Active states
  glass: {
    DEFAULT: '#4a9c9b',
    50: '#f3fafa',
    100: '#e6f5f5',
    200: '#c1e7e6',
    300: '#9bd8d7',
    400: '#50bbb9',
    500: '#4a9c9b',
    600: '#428c8b',
    700: '#377574',
    800: '#2c5e5d',
    900: '#244d4c',
  },
  
  // Veil (Pale Pink) - Text/Highlights
  veil: {
    DEFAULT: '#f4dce0',
    50: '#fefcfc',
    100: '#fdf9fa',
    200: '#fbf1f3',
    300: '#f8e9ec',
    400: '#f4dce0',
    500: '#f0cfd4',
    600: '#d8babf',
    700: '#b49ba0',
    800: '#907c80',
    900: '#766569',
  },
} as const;

/**
 * Get a specific color shade
 * @param color - The color name (obsidian, ember, wineDusk, glass, veil)
 * @param shade - The shade number (50-900) or 'DEFAULT'
 */
export function getColor(
  color: keyof typeof myuiColors,
  shade: keyof typeof myuiColors.obsidian = 'DEFAULT'
): string {
  return myuiColors[color][shade];
}

/**
 * Color usage recommendations based on MyUI design principles
 */
export const colorUsage = {
  background: {
    primary: myuiColors.obsidian.DEFAULT,
    secondary: myuiColors.wineDusk.DEFAULT,
    elevated: myuiColors.wineDusk[500],
  },
  text: {
    primary: myuiColors.veil.DEFAULT,
    secondary: myuiColors.veil[500],
    muted: myuiColors.veil[700],
    accent: myuiColors.ember.DEFAULT,
  },
  action: {
    primary: myuiColors.ember.DEFAULT,
    primaryHover: myuiColors.ember[600],
    secondary: myuiColors.glass.DEFAULT,
    secondaryHover: myuiColors.glass[600],
  },
  border: {
    default: myuiColors.wineDusk.DEFAULT,
    subtle: myuiColors.wineDusk[600],
    emphasis: myuiColors.ember.DEFAULT,
  },
  state: {
    focus: myuiColors.glass.DEFAULT,
    active: myuiColors.glass[600],
    hover: myuiColors.wineDusk[400],
    disabled: myuiColors.obsidian[200],
  },
} as const;

/**
 * Generate Tailwind color classes
 */
export const tw = {
  bg: (color: keyof typeof myuiColors, shade?: keyof typeof myuiColors.obsidian) =>
    shade ? `bg-${color}-${shade}` : `bg-${color}`,
  text: (color: keyof typeof myuiColors, shade?: keyof typeof myuiColors.obsidian) =>
    shade ? `text-${color}-${shade}` : `text-${color}`,
  border: (color: keyof typeof myuiColors, shade?: keyof typeof myuiColors.obsidian) =>
    shade ? `border-${color}-${shade}` : `border-${color}`,
  ring: (color: keyof typeof myuiColors, shade?: keyof typeof myuiColors.obsidian) =>
    shade ? `ring-${color}-${shade}` : `ring-${color}`,
} as const;

export default myuiColors;
