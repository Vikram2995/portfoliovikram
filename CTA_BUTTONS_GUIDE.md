# 🎯 CTA Buttons Component Guide

## Overview

A production-ready, reusable CTA (Call-To-Action) button system built with React and Material UI. This system provides three main components:

1. **PrimaryCTAButton** - White outlined secondary action buttons
2. **SecondaryCTAButton** - Dark solid primary action buttons
3. **CTAButtons** - Container component for rendering multiple buttons dynamically

---

## Folder Structure

```
src/components/
├── buttons/
│   ├── PrimaryCTAButton.jsx      # Secondary (outlined) button
│   ├── SecondaryCTAButton.jsx    # Primary (solid dark) button
│   └── CTAButtons.jsx            # Container wrapper component
└── Hero/
    └── Hero.jsx                   # Updated to use CTAButtons
```

---

## Component Details

### 1. PrimaryCTAButton.jsx

**Purpose**: Secondary call-to-action button with white outline style

**Props**:
- `label` (string): Button text - **REQUIRED, NOT HARDCODED**
- `onClick` (function): Click handler
- `disabled` (boolean): Disable button state (default: false)
- `fullWidth` (boolean): Make button full width (default: false)

**Features**:
- White border with transparent background
- Pill-shaped design (responsive border radius)
- Smooth hover effects with increased opacity
- Focus states for keyboard navigation
- Active state with scale animation
- Disabled state styling

**Usage Example**:
```jsx
<PrimaryCTAButton 
  label="Join as a Lawyer" 
  onClick={handleJoinClick}
/>
```

---

### 2. SecondaryCTAButton.jsx

**Purpose**: Primary call-to-action button with dark solid style

**Props**:
- `label` (string): Button text - **REQUIRED, NOT HARDCODED**
- `onClick` (function): Click handler
- `disabled` (boolean): Disable button state (default: false)
- `fullWidth` (boolean): Make button full width (default: false)

**Features**:
- Black background with white text
- Pill-shaped design (responsive border radius)
- Smooth hover effects with elevation
- Focus states for keyboard navigation
- Active state with scale animation
- Disabled state styling

**Usage Example**:
```jsx
<SecondaryCTAButton 
  label="Find the Right Lawyer" 
  onClick={handleFindClick}
/>
```

---

### 3. CTAButtons.jsx

**Purpose**: Container component that renders multiple CTA buttons dynamically

**Props**:
- `buttons` (array): Configuration array for buttons
- `spacing` (object, optional): Custom gap values

**Button Configuration Object**:
```javascript
{
  id: "unique-identifier",           // Required: Unique key
  type: "primary" | "secondary",     // Required: Button type
  label: "Button Text",              // Required: Display text
  onClick: handleFunction,           // Required: Click handler
  disabled: false,                   // Optional: Default false
  fullWidth: false                   // Optional: Default false
}
```

**Features**:
- Dynamic button rendering via map()
- Validates button configuration
- Responsive spacing
- Easy to add/remove buttons
- Centered layout with flex

**Usage Example**:
```jsx
const ctaButtons = [
  {
    id: "join-lawyer",
    type: "primary",
    label: "Join as a Lawyer",
    onClick: () => handleJoin(),
  },
  {
    id: "find-lawyer",
    type: "secondary",
    label: "Find the Right Lawyer",
    onClick: () => handleFind(),
  },
];

<CTAButtons buttons={ctaButtons} />
```

---

## Updated Hero.jsx Integration

The Hero component now uses the new CTAButtons system:

```jsx
// Import the CTAButtons component
import CTAButtons from "../buttons/CTAButtons";

// Inside Hero function
const ctaButtons = [
  {
    id: "join-lawyer",
    type: "primary",
    label: "Join as a Lawyer",
    onClick: () => console.log("Join as Lawyer clicked"),
  },
  {
    id: "find-lawyer",
    type: "secondary",
    label: "Find the Right Lawyer",
    onClick: () => console.log("Find Lawyer clicked"),
  },
];

// In JSX
<CTAButtons buttons={ctaButtons} />
```

---

## Design Specifications

### Button Sizing (Responsive)

| Device | Padding | Min Height | Font Size | Border Radius |
|--------|---------|-----------|-----------|---------------|
| Mobile | 0.625rem 1.5rem | 2.5rem | 0.875rem | 1.25rem |
| Tablet | 0.75rem 1.75rem | 2.75rem | 0.94rem | 1.5rem |
| Desktop | 0.875rem 2rem | 3rem | 1rem | 2rem |

### Color Scheme

**Primary Button (Secondary CTA)**:
- Border: `rgba(255, 255, 255, 0.9)`
- Text: `rgba(255, 255, 255, 0.95)`
- Background: `transparent`
- Hover Background: `rgba(255, 255, 255, 0.08)`

**Secondary Button (Primary CTA)**:
- Background: `#000000`
- Text: `#ffffff`
- Hover Background: `#1a1a1a`

### Typography

- Font Weight: 600 (Semi-bold)
- Font Size: Responsive (0.875rem - 1rem)
- Line Height: 1.5
- Letter Spacing: 0.3px
- Text Transform: none (preserves case)

### States

1. **Default**: Normal button state
2. **Hover**: 
   - Increased opacity/darker color
   - Box shadow
   - Smooth transition (300ms)
3. **Focus**: 
   - Outline visible
   - Keyboard navigation support
4. **Active**: 
   - Scale 0.98 (pressed effect)
   - Adjusted colors
5. **Disabled**: 
   - Reduced opacity
   - Cursor not-allowed
   - No hover effects

---

## Customization Guide

### Changing Button Text

**Why the label is a prop**: Allows developers to use the same button component with different text without modifying the component logic.

```jsx
// Easy to change text
<PrimaryCTAButton label="Custom Text Here" />
<SecondaryCTAButton label="Another Custom Text" />
```

### Changing Spacing Between Buttons

```jsx
<CTAButtons 
  buttons={ctaButtons} 
  spacing={{ xs: "1rem", sm: "1.25rem", md: "1.5rem" }}
/>
```

### Changing Button Colors

Edit the button component's `sx` prop:

```jsx
// In PrimaryCTAButton.jsx
backgroundColor: "#yourColor",
borderColor: "#yourBorderColor",
// In SecondaryCTAButton.jsx
backgroundColor: "#yourColor",
```

### Adding More Buttons

Simply add to the `ctaButtons` array:

```jsx
const ctaButtons = [
  { id: "btn-1", type: "primary", label: "Button 1", onClick: handler1 },
  { id: "btn-2", type: "secondary", label: "Button 2", onClick: handler2 },
  { id: "btn-3", type: "primary", label: "Button 3", onClick: handler3 },  // NEW
];

<CTAButtons buttons={ctaButtons} />
```

---

## Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ | Full support |
| Firefox | ✅ | Full support |
| Safari | ✅ | Full support |
| Edge | ✅ | Full support |
| Mobile | ✅ | Touch-friendly |

---

## Accessibility Features

- ✅ Keyboard navigation support
- ✅ Focus states visible
- ✅ Proper ARIA labels (via Material UI)
- ✅ Touch-friendly spacing
- ✅ High contrast colors
- ✅ Disabled state properly communicated

---

## Performance Considerations

- Minimal re-renders: Only parent state updates trigger changes
- Smooth animations: Using `cubic-bezier` for natural motion
- GPU acceleration: Transform and opacity changes
- No unnecessary DOM nodes

---

## Common Use Cases

### 1. Two-Button Hero Section
```jsx
const ctaButtons = [
  {
    id: "primary-action",
    type: "primary",
    label: "Get Started",
    onClick: handleGetStarted,
  },
  {
    id: "secondary-action",
    type: "secondary",
    label: "Learn More",
    onClick: handleLearnMore,
  },
];
```

### 2. Single Button
```jsx
const ctaButtons = [
  {
    id: "action",
    type: "secondary",
    label: "Take Action Now",
    onClick: handleAction,
  },
];
```

### 3. Three Buttons
```jsx
const ctaButtons = [
  { id: "btn-1", type: "primary", label: "Option 1", onClick: h1 },
  { id: "btn-2", type: "secondary", label: "Option 2", onClick: h2 },
  { id: "btn-3", type: "primary", label: "Option 3", onClick: h3 },
];
```

### 4. Conditional Rendering
```jsx
const ctaButtons = [
  {
    id: "action",
    type: "secondary",
    label: "Submit",
    onClick: handleSubmit,
    disabled: isLoading,  // Disable while loading
  },
];
```

---

## Best Practices

1. **Always use unique IDs**: Required for proper React key management
2. **Use meaningful labels**: Clear action text helps user understanding
3. **Provide click handlers**: Each button should have a purpose
4. **Test responsiveness**: Verify buttons look good on all devices
5. **Keep label text concise**: Avoid overly long button text
6. **Use semantic button types**: Primary for main action, secondary for alternative

---

## Example: Complete Implementation

```jsx
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import CTAButtons from "./components/buttons/CTAButtons";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleJoin = () => {
    console.log("User wants to join as lawyer");
    // Navigate or open form
  };

  const handleFind = () => {
    console.log("User wants to find a lawyer");
    // Navigate or open search
  };

  const ctaButtons = [
    {
      id: "join-action",
      type: "primary",
      label: "Join as a Lawyer",
      onClick: handleJoin,
    },
    {
      id: "find-action",
      type: "secondary",
      label: "Find the Right Lawyer",
      onClick: handleFind,
    },
  ];

  return (
    <div>
      <Hero /> {/* Uses CTAButtons internally */}
      {/* Or use CTAButtons elsewhere */}
      <CTAButtons buttons={ctaButtons} />
    </div>
  );
}
```

---

## Troubleshooting

**Issue**: Buttons not appearing
- **Solution**: Check that `buttons` array is provided and not empty

**Issue**: Text not changing
- **Solution**: Ensure `label` prop is being passed correctly to each button

**Issue**: Click handler not working
- **Solution**: Verify `onClick` function is properly defined and passed

**Issue**: Styling looks off
- **Solution**: Check Material UI theme is properly configured

---

## File Summary

| File | Purpose | Lines | Type |
|------|---------|-------|------|
| PrimaryCTAButton.jsx | Secondary button component | ~80 | Component |
| SecondaryCTAButton.jsx | Primary button component | ~80 | Component |
| CTAButtons.jsx | Container wrapper | ~120 | Container |
| Hero.jsx | Updated to use CTAButtons | ~180 | Page Component |

---

**Status**: ✅ Production Ready  
**Last Updated**: 2026-06-15  
**Version**: 1.0

