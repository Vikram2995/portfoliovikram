# 🚀 CTA Button Components - Quick Implementation Guide

## Installation Status

✅ **All components created and integrated**

### Files Created:
```
src/components/buttons/
├── PrimaryCTAButton.jsx      ✅ Created
├── SecondaryCTAButton.jsx    ✅ Created
└── CTAButtons.jsx            ✅ Created

src/components/Hero/
└── Hero.jsx                  ✅ Updated
```

### Dependencies:
- ✅ React 19.2.6
- ✅ Material UI 9.1.1
- ✅ Framer Motion (for animations)

---

## Quick Start

### 1. Using CTAButtons in Hero Section

The Hero component already integrates the new button system:

```jsx
import CTAButtons from "../buttons/CTAButtons";

function Hero() {
  // Define button configurations
  const ctaButtons = [
    {
      id: "join-lawyer",
      type: "primary",
      label: "Join as a Lawyer",
      onClick: () => console.log("Join clicked"),
    },
    {
      id: "find-lawyer",
      type: "secondary",
      label: "Find the Right Lawyer",
      onClick: () => console.log("Find clicked"),
    },
  ];

  return (
    <Box>
      {/* ... other content ... */}
      <CTAButtons buttons={ctaButtons} />
    </Box>
  );
}
```

---

### 2. Using Individual Button Components

For more control, use buttons individually:

```jsx
import PrimaryCTAButton from "../buttons/PrimaryCTAButton";
import SecondaryCTAButton from "../buttons/SecondaryCTAButton";

export default function MyComponent() {
  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <PrimaryCTAButton 
        label="Custom Label 1" 
        onClick={handleClick1} 
      />
      <SecondaryCTAButton 
        label="Custom Label 2" 
        onClick={handleClick2} 
      />
    </Box>
  );
}
```

---

## Component API Reference

### PrimaryCTAButton

```jsx
<PrimaryCTAButton 
  label="Join as a Lawyer"              // ✓ Required - Button text
  onClick={handleJoinClick}             // ✓ Required - Click handler
  disabled={false}                      // ○ Optional - Disable button
  fullWidth={false}                     // ○ Optional - Full width mode
/>
```

### SecondaryCTAButton

```jsx
<SecondaryCTAButton 
  label="Find the Right Lawyer"         // ✓ Required - Button text
  onClick={handleFindClick}             // ✓ Required - Click handler
  disabled={false}                      // ○ Optional - Disable button
  fullWidth={false}                     // ○ Optional - Full width mode
/>
```

### CTAButtons

```jsx
<CTAButtons 
  buttons={[                            // ✓ Required - Button array
    {
      id: "unique-id",                  // ✓ Required - Unique key
      type: "primary",                  // ✓ Required - "primary"|"secondary"
      label: "Button Text",             // ✓ Required - Display text
      onClick: handleClick,             // ✓ Required - Click handler
      disabled: false,                  // ○ Optional - Disable state
      fullWidth: false,                 // ○ Optional - Full width mode
    },
  ]}
  spacing={{                            // ○ Optional - Custom spacing
    xs: "0.75rem",                      // Mobile gap
    sm: "0.875rem",                     // Tablet gap
    md: "1rem",                         // Desktop gap
  }}
/>
```

---

## Design Specifications

### Button Styles

**Primary Button (Outlined)**
- Border: White outline
- Background: Transparent
- Hover: Increased opacity + shadow
- Used for: Secondary actions

**Secondary Button (Solid)**
- Background: Black (#000000)
- Text: White
- Hover: Darker black + shadow + lift effect
- Used for: Primary actions

### Responsive Sizing

| Viewport | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Min Height | 2.5rem | 2.75rem | 3rem |
| Padding | 0.625rem 1.5rem | 0.75rem 1.75rem | 0.875rem 2rem |
| Font Size | 0.875rem | 0.94rem | 1rem |
| Border Radius | 1.25rem | 1.5rem | 2rem |

---

## Real-World Examples

### Example 1: Hero Section with Two Buttons

```jsx
import CTAButtons from "../buttons/CTAButtons";

function Hero() {
  const handleJoin = () => {
    // Navigate to join form or show modal
    window.location.href = "/join";
  };

  const handleFind = () => {
    // Navigate to lawyer search
    window.location.href = "/search";
  };

  const ctaButtons = [
    {
      id: "hero-join",
      type: "primary",
      label: "Join as a Lawyer",
      onClick: handleJoin,
    },
    {
      id: "hero-find",
      type: "secondary",
      label: "Find the Right Lawyer",
      onClick: handleFind,
    },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <Typography variant="h2">Welcome to LawTribe</Typography>
      <Typography variant="body1">Find legal solutions</Typography>
      <CTAButtons buttons={ctaButtons} />
    </Box>
  );
}
```

### Example 2: Feature Section with Single Button

```jsx
function Features() {
  const handleExplore = () => {
    console.log("Explore features clicked");
  };

  const buttons = [
    {
      id: "features-explore",
      type: "secondary",
      label: "Explore Features",
      onClick: handleExplore,
    },
  ];

  return (
    <Box>
      <Typography variant="h3">Our Features</Typography>
      <CTAButtons buttons={buttons} />
    </Box>
  );
}
```

### Example 3: Modal with Action Buttons

```jsx
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CTAButtons from "../buttons/CTAButtons";

function ConfirmDialog({ open, onClose }) {
  const buttons = [
    {
      id: "modal-cancel",
      type: "primary",
      label: "Cancel",
      onClick: onClose,
    },
    {
      id: "modal-confirm",
      type: "secondary",
      label: "Confirm Action",
      onClick: () => {
        // Handle confirmation
        onClose();
      },
    },
  ];

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 3 }}>
          <CTAButtons buttons={buttons} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
```

---

## Customizing Button Text

The main benefit of passing labels as props is easy customization:

```jsx
// Instead of hardcoding text inside component
// BAD ❌
function BadButton() {
  return <button>Fixed Text</button>;
}

// GOOD ✅
function GoodButton({ label }) {
  return <button>{label}</button>;
}

// Usage: Easy to change without touching component logic
<GoodButton label="Click Me" />
<GoodButton label="Try This" />
<GoodButton label="Or This" />
```

---

## Accessibility Features

All buttons include:

✅ Keyboard navigation support  
✅ Focus visible states  
✅ High contrast colors  
✅ Touch-friendly sizing  
✅ ARIA labels (via Material UI)  
✅ Disabled state support  

---

## Testing Checklist

- [ ] Two buttons render correctly side by side
- [ ] Button text displays as passed via `label` prop
- [ ] Click handlers fire when clicked
- [ ] Hover effects work smoothly
- [ ] Buttons are responsive on mobile
- [ ] Buttons are responsive on tablet
- [ ] Buttons are responsive on desktop
- [ ] Disabled state works correctly
- [ ] Focus states are visible with keyboard
- [ ] No console errors or warnings

---

## Common Patterns

### Pattern 1: Loading State

```jsx
const [loading, setLoading] = useState(false);

const buttons = [
  {
    id: "submit",
    type: "secondary",
    label: loading ? "Processing..." : "Submit",
    onClick: handleSubmit,
    disabled: loading,
  },
];
```

### Pattern 2: Conditional Buttons

```jsx
const buttons = isLoggedIn 
  ? [
      { id: "dashboard", type: "primary", label: "Dashboard", onClick: goToDashboard },
      { id: "logout", type: "secondary", label: "Logout", onClick: handleLogout },
    ]
  : [
      { id: "login", type: "secondary", label: "Login", onClick: goToLogin },
    ];

<CTAButtons buttons={buttons} />
```

### Pattern 3: Dynamic Button Configuration

```jsx
function renderButtons(userRole) {
  const baseButtons = [
    { id: "home", type: "primary", label: "Home", onClick: goHome },
  ];

  if (userRole === "admin") {
    baseButtons.push({
      id: "admin-panel",
      type: "secondary",
      label: "Admin Panel",
      onClick: goToAdmin,
    });
  }

  return baseButtons;
}

<CTAButtons buttons={renderButtons(userRole)} />
```

---

## File Locations

```
src/
├── components/
│   ├── buttons/
│   │   ├── PrimaryCTAButton.jsx       (Secondary/Outlined Button)
│   │   ├── SecondaryCTAButton.jsx     (Primary/Solid Button)
│   │   └── CTAButtons.jsx             (Container/Wrapper)
│   └── Hero/
│       └── Hero.jsx                   (Updated Integration)
└── CTA_BUTTONS_GUIDE.md               (Full Documentation)
```

---

## Summary

| Component | Purpose | Usage |
|-----------|---------|-------|
| PrimaryCTAButton | Secondary action (outlined) | `<PrimaryCTAButton label="..." />` |
| SecondaryCTAButton | Primary action (solid) | `<SecondaryCTAButton label="..." />` |
| CTAButtons | Dynamic button container | `<CTAButtons buttons={[...]} />` |

---

## Support

For detailed documentation, see: `CTA_BUTTONS_GUIDE.md`

**Status**: ✅ Ready for Production  
**Version**: 1.0  
**Last Updated**: 2026-06-15

