# WhatsApp CRM Dashboard Theming Guide

This document provides comprehensive guidance on using the WhatsApp-themed design system for the CRM dashboard.

## Overview

The theming system is built with **Tailwind CSS v4** and uses WhatsApp's official brand colors to create a cohesive, professional dashboard experience. All theme configurations are defined in `app/globals.css` using the modern `@theme` directive.

## Color System

### WhatsApp Brand Colors

The theme is based on WhatsApp's official color palette:

- **Primary Green**: `#25D366` - WhatsApp's signature logo green
- **Teal Dark**: `#075E54` - Deep teal for headers and navigation
- **Teal Medium**: `#128C7E` - Medium teal for accents
- **Light Green**: `#DCF8C6` - Chat bubble green for highlights
- **Accent Blue**: `#34B7F1` - Checkmark blue for info states
- **Neutral Beige**: `#ECE5DD` - Chat background for subtle backgrounds

### Color Scales

Each brand color has a full scale from 50 (lightest) to 950 (darkest):

```tsx
// Primary Green Scale
bg-primary-50   // Lightest
bg-primary-100
bg-primary-200
bg-primary-300
bg-primary-400
bg-primary-500  // Base WhatsApp green (#25D366)
bg-primary-600
bg-primary-700
bg-primary-800
bg-primary-900
bg-primary-950  // Darkest
```

Available color scales:
- `primary-{50-950}` - Primary green
- `teal-{50-950}` - Teal variants
- `accent-{50-950}` - Accent green
- `blue-{50-950}` - Blue accents
- `neutral-{50-950}` - Neutral grays

### Semantic Colors

Use semantic color names for context-aware styling:

```tsx
// Backgrounds and Surfaces
bg-background        // Main background
bg-card             // Card backgrounds
bg-muted            // Subtle backgrounds
bg-popover          // Popover/dropdown backgrounds

// Text Colors
text-foreground          // Primary text
text-muted-foreground    // Secondary text
text-card-foreground     // Text on cards

// Interactive Elements
bg-primary              // Primary actions
bg-secondary            // Secondary actions
bg-accent              // Accent highlights

// Status Colors
bg-success             // Success states
bg-warning             // Warning states
bg-destructive         // Error/delete actions
bg-info                // Information states

// Sidebar
bg-sidebar             // Sidebar background
bg-sidebar-accent      // Sidebar active/hover states
```

## Typography

### Font Families

```tsx
font-sans    // System UI fonts
font-mono    // Monospace fonts
```

### Font Sizes

```tsx
text-xs      // 12px - Labels, captions
text-sm      // 14px - Secondary text
text-base    // 16px - Body text (default)
text-lg      // 18px - Emphasized text
text-xl      // 20px - Small headings
text-2xl     // 24px - Section headings
text-3xl     // 30px - Page headings
text-4xl     // 36px - Large headings
text-5xl     // 48px - Hero headings
```

### Font Weights

```tsx
font-normal      // 400 - Regular text
font-medium      // 500 - Slightly emphasized
font-semibold    // 600 - Headings
font-bold        // 700 - Strong emphasis
```

## Component Patterns

### Buttons

```tsx
// Primary Button
<button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
  Primary Action
</button>

// Secondary Button
<button className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-teal-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
  Secondary Action
</button>

// Outline Button
<button className="px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-medium">
  Outline Action
</button>

// Destructive Button
<button className="px-6 py-3 rounded-lg bg-destructive text-destructive-foreground hover:bg-red-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg">
  Delete
</button>
```

### Cards

```tsx
// Basic Card
<div className="p-6 rounded-lg bg-card border border-border shadow-md hover:shadow-lg transition-all duration-200">
  <h3 className="text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-muted-foreground">Card content goes here.</p>
</div>

// Gradient Card (Primary)
<div className="p-6 rounded-lg wa-gradient-primary text-white shadow-md hover:shadow-lg transition-all duration-200">
  <h3 className="text-xl font-semibold mb-2">Featured Card</h3>
  <p className="opacity-90">Special content with gradient background.</p>
</div>

// Gradient Card (Teal)
<div className="p-6 rounded-lg wa-gradient-teal text-white shadow-md hover:shadow-lg transition-all duration-200">
  <h3 className="text-xl font-semibold mb-2">Teal Card</h3>
  <p className="opacity-90">Alternative gradient style.</p>
</div>
```

### Form Elements

```tsx
// Text Input
<input
  type="text"
  placeholder="Enter text"
  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
/>

// Textarea
<textarea
  placeholder="Enter message"
  rows={4}
  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200 resize-none"
/>

// Select
<select className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200">
  <option>Choose option</option>
</select>
```

### Badges

```tsx
// Status Badges
<span className="px-3 py-1 rounded-full bg-success text-success-foreground text-sm font-medium">
  Active
</span>

<span className="px-3 py-1 rounded-full bg-warning text-warning-foreground text-sm font-medium">
  Pending
</span>

<span className="px-3 py-1 rounded-full bg-destructive text-destructive-foreground text-sm font-medium">
  Inactive
</span>

<span className="px-3 py-1 rounded-full bg-info text-info-foreground text-sm font-medium">
  New
</span>
```

### Sidebar Navigation

```tsx
<div className="w-64 bg-sidebar text-sidebar-foreground p-4 space-y-2">
  {/* Active Item */}
  <button className="w-full px-4 py-2 rounded-lg bg-sidebar-accent text-sidebar-accent-foreground hover:bg-teal-700 transition-all duration-200 text-left font-medium">
    Dashboard
  </button>
  
  {/* Inactive Items */}
  <button className="w-full px-4 py-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 text-left">
    Messages
  </button>
</div>
```

## Custom Gradients

Three pre-defined gradient utilities are available:

```tsx
// Primary gradient (Green to Teal)
<div className="wa-gradient-primary">...</div>

// Teal gradient (Medium to Dark)
<div className="wa-gradient-teal">...</div>

// Accent gradient (Light Green to Primary)
<div className="wa-gradient-accent">...</div>
```

## Dark Mode

The theme automatically supports dark mode based on system preferences. To manually toggle dark mode:

```tsx
// Add 'dark' class to html element
document.documentElement.classList.toggle('dark');
```

Dark mode colors are automatically applied when the `dark` class is present or when `prefers-color-scheme: dark` is detected.

## Spacing

Use Tailwind's spacing scale for consistent layouts:

```tsx
p-4      // Padding: 16px
m-6      // Margin: 24px
gap-4    // Gap: 16px
space-y-6  // Vertical spacing: 24px
```

## Border Radius

```tsx
rounded-lg    // 8px - Standard rounded corners
rounded-xl    // 12px - More rounded
rounded-2xl   // 16px - Very rounded
rounded-full  // Fully rounded (pills, circles)
```

## Shadows

```tsx
shadow-sm     // Subtle shadow
shadow-md     // Medium shadow (default for cards)
shadow-lg     // Large shadow (hover states)
shadow-xl     // Extra large shadow
shadow-2xl    // Maximum shadow
```

## Transitions

Add smooth transitions to interactive elements:

```tsx
transition-all duration-200    // Standard transition
smooth-transition              // Custom utility class
```

## Best Practices

### 1. **Use Semantic Colors**
Prefer semantic color names (`bg-primary`, `bg-success`) over specific shades when possible. This ensures proper dark mode support.

```tsx
// ✅ Good
<button className="bg-primary text-primary-foreground">Click</button>

// ❌ Avoid (unless you need a specific shade)
<button className="bg-primary-500 text-white">Click</button>
```

### 2. **Maintain Consistency**
Use the same spacing, border radius, and shadow values across similar components.

```tsx
// Consistent card styling
<div className="p-6 rounded-lg bg-card border border-border shadow-md">
  ...
</div>
```

### 3. **Accessible Contrast**
Always pair colors with their corresponding foreground colors for proper contrast:

```tsx
// ✅ Good - Proper contrast
<div className="bg-primary text-primary-foreground">...</div>

// ❌ Bad - Poor contrast
<div className="bg-primary text-primary">...</div>
```

### 4. **Responsive Design**
Use Tailwind's responsive prefixes for mobile-first design:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  ...
</div>
```

### 5. **Hover States**
Add hover effects to interactive elements:

```tsx
<button className="bg-primary hover:bg-primary-600 transition-all duration-200">
  Hover Me
</button>
```

## Theme Demo

Visit `/theme-demo` to see all theme elements in action, including:
- Complete color palettes with all variants
- Typography examples
- Button styles
- Card layouts
- Form elements
- Badges and status indicators
- Sidebar navigation preview
- Dark mode toggle

## Customization

To customize the theme, edit `app/globals.css`:

1. **Modify colors**: Update the CSS custom properties in `:root`
2. **Add new colors**: Define new color scales in the `@theme` block
3. **Adjust spacing**: Modify spacing variables
4. **Change typography**: Update font families and sizes

## Support

For questions or issues with the theming system, refer to:
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- Theme demo page at `/theme-demo`
- This documentation

---

**Version**: 1.0  
**Last Updated**: January 2026  
**Framework**: Tailwind CSS v4
