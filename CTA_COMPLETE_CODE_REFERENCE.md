# 📋 CTA Button Components - Complete Code Reference

## Component 1: PrimaryCTAButton.jsx

```jsx
import { Button } from "@mui/material";

/**
 * PrimaryCTAButton - Secondary/White outlined button component
 * Used for secondary call-to-action buttons (e.g., "Join as a Lawyer")
 *
 * Props:
 * - label (string): The text displayed on the button (NOT hardcoded)
 * - onClick (function): Click handler function
 * - disabled (boolean): Disables the button when true
 * - fullWidth (boolean): Makes button full width when true
 *
 * Styling:
 * - White/transparent background with border
 * - Pill-shaped design (high border radius)
 * - Responsive sizing for mobile, tablet, desktop
 * - Smooth hover and focus effects
 */

function PrimaryCTAButton({ label = "Join as a Lawyer", onClick, disabled = false, fullWidth = false }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      variant="outlined"
      sx={{
        // Typography styling
        fontSize: { xs: "0.875rem", sm: "0.94rem", md: "1rem" },
        fontWeight: 600,
        textTransform: "none",
        letterSpacing: "0.3px",
        lineHeight: 1.5,

        // Padding and sizing
        padding: { xs: "0.625rem 1.5rem", sm: "0.75rem 1.75rem", md: "0.875rem 2rem" },
        minHeight: { xs: "2.5rem", sm: "2.75rem", md: "3rem" },

        // Shape and borders
        borderRadius: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
        border: "1.5px solid rgba(255, 255, 255, 0.9)",

        // Colors
        color: "rgba(255, 255, 255, 0.95)",
        backgroundColor: "transparent",

        // Transitions
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

        // Hover state
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderColor: "rgba(255, 255, 255, 1)",
          color: "rgba(255, 255, 255, 1)",
          boxShadow: "0 4px 12px rgba(255, 255, 255, 0.15)",
        },

        // Focus state (keyboard navigation)
        "&:focus-visible": {
          outline: "2px solid rgba(255, 255, 255, 0.8)",
          outlineOffset: "2px",
        },

        // Active state (pressed)
        "&:active": {
          backgroundColor: "rgba(255, 255, 255, 0.12)",
          borderColor: "rgba(255, 255, 255, 1)",
          transform: "scale(0.98)",
        },

        // Disabled state
        "&:disabled": {
          borderColor: "rgba(255, 255, 255, 0.3)",
          color: "rgba(255, 255, 255, 0.4)",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          cursor: "not-allowed",
        },
      }}
    >
      {label}
    </Button>
  );
}

export default PrimaryCTAButton;
```

---

## Component 2: SecondaryCTAButton.jsx

```jsx
import { Button } from "@mui/material";

/**
 * SecondaryCTAButton - Primary/Dark solid button component
 * Used for primary call-to-action buttons (e.g., "Find the Right Lawyer")
 *
 * Props:
 * - label (string): The text displayed on the button (NOT hardcoded)
 * - onClick (function): Click handler function
 * - disabled (boolean): Disables the button when true
 * - fullWidth (boolean): Makes button full width when true
 *
 * Styling:
 * - Dark/black background with no border
 * - Pill-shaped design (high border radius)
 * - Responsive sizing for mobile, tablet, desktop
 * - Smooth hover and focus effects
 */

function SecondaryCTAButton({ label = "Find the Right Lawyer", onClick, disabled = false, fullWidth = false }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      variant="contained"
      sx={{
        // Typography styling
        fontSize: { xs: "0.875rem", sm: "0.94rem", md: "1rem" },
        fontWeight: 600,
        textTransform: "none",
        letterSpacing: "0.3px",
        lineHeight: 1.5,

        // Padding and sizing
        padding: { xs: "0.625rem 1.5rem", sm: "0.75rem 1.75rem", md: "0.875rem 2rem" },
        minHeight: { xs: "2.5rem", sm: "2.75rem", md: "3rem" },

        // Shape and borders
        borderRadius: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
        border: "none",

        // Colors
        color: "#ffffff",
        backgroundColor: "#000000",

        // Transitions
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

        // Hover state
        "&:hover": {
          backgroundColor: "#1a1a1a",
          color: "#ffffff",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.35)",
          transform: "translateY(-2px)",
        },

        // Focus state (keyboard navigation)
        "&:focus-visible": {
          outline: "2px solid rgba(255, 255, 255, 0.8)",
          outlineOffset: "2px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.35)",
        },

        // Active state (pressed)
        "&:active": {
          backgroundColor: "#0d0d0d",
          color: "#ffffff",
          transform: "scale(0.98)",
        },

        // Disabled state
        "&:disabled": {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "rgba(255, 255, 255, 0.4)",
          cursor: "not-allowed",
          boxShadow: "none",
        },
      }}
    >
      {label}
    </Button>
  );
}

export default SecondaryCTAButton;
```

---

## Component 3: CTAButtons.jsx

```jsx
import { Box } from "@mui/material";
import PrimaryCTAButton from "./PrimaryCTAButton";
import SecondaryCTAButton from "./SecondaryCTAButton";

/**
 * CTAButtons - Reusable Call-To-Action Buttons Container
 *
 * A flexible wrapper component that renders CTA buttons dynamically.
 * Buttons are configured via an array of button objects.
 *
 * Props:
 * - buttons (array): Array of button configuration objects
 *   Each button object should have:
 *   {
 *     id (string): Unique identifier for the button
 *     type (string): "primary" or "secondary"
 *     label (string): Text to display on the button
 *     onClick (function): Handler function when button is clicked
 *     disabled (boolean, optional): Disables button when true
 *     fullWidth (boolean, optional): Makes button full width
 *   }
 * - spacing (object, optional): Custom spacing configuration
 *   Can override default gap values: { xs, sm, md }
 *
 * Example Usage:
 * ```
 * const ctaButtons = [
 *   {
 *     id: "join-lawyer",
 *     type: "primary",
 *     label: "Join as a Lawyer",
 *     onClick: handleJoinClick,
 *   },
 *   {
 *     id: "find-lawyer",
 *     type: "secondary",
 *     label: "Find the Right Lawyer",
 *     onClick: handleFindClick,
 *   },
 * ];
 *
 * <CTAButtons buttons={ctaButtons} />
 * ```
 *
 * Benefits:
 * - Easy to add/remove buttons without component modification
 * - Consistent styling across all CTA buttons
 * - Responsive design built-in
 * - Supports both button types
 */

function CTAButtons({
  buttons = [],
  spacing = { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
}) {
  // Validate buttons array
  if (!Array.isArray(buttons) || buttons.length === 0) {
    console.warn("CTAButtons: No buttons provided or invalid buttons array");
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: spacing,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        mt: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
      }}
    >
      {buttons.map((buttonConfig) => {
        // Validate button config
        if (!buttonConfig.id || !buttonConfig.type || !buttonConfig.label) {
          console.warn("CTAButtons: Invalid button config -", buttonConfig);
          return null;
        }

        const { id, type, label, onClick, disabled = false, fullWidth = false } = buttonConfig;

        // Render appropriate button based on type
        if (type === "primary") {
          return (
            <PrimaryCTAButton
              key={id}
              label={label}
              onClick={onClick}
              disabled={disabled}
              fullWidth={fullWidth}
            />
          );
        } else if (type === "secondary") {
          return (
            <SecondaryCTAButton
              key={id}
              label={label}
              onClick={onClick}
              disabled={disabled}
              fullWidth={fullWidth}
            />
          );
        } else {
          console.warn(`CTAButtons: Unknown button type "${type}" for button "${id}"`);
          return null;
        }
      })}
    </Box>
  );
}

export default CTAButtons;
```

---

## Updated Hero.jsx Integration

```jsx
import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import HeroStyle from "./HeroCss";
import { MACBOOK } from "../../assets";
import CTAButtons from "../buttons/CTAButtons";

// Text content arrays for rotation
const HEADINGS = [
  "Legal Solutions, Simplified.",
  "Find the Right Lawyer, Faster.",
  "One Platform. Every Legal Need.",
];

// Static subheading (no animation)
const STATIC_SUBHEADING = "Whether you're a lawyer building your practice or someone navigating a legal challenge, LawTribe puts the right tools and the right people in your corner.";

// Animation variants for heading
const headingVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animation ko control karne ke liye
  const PAUSE_ANIMATION = true; // true = stop, false = start

  // CTA Button configurations
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

  useEffect(() => {
    if (PAUSE_ANIMATION) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HEADINGS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [PAUSE_ANIMATION]);

  return (
    <Box id="hero" sx={HeroStyle}>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: { xs: "6rem", sm: "8rem", md: "13.75rem" },
            gap: { xs: "1rem", md: "1.5rem" },
          }}
        >
          {/* Animated Heading */}
          <Box>
            <AnimatePresence mode="wait">
              <motion.div
                key={`heading-${currentIndex}`}
                variants={headingVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3.25rem" },
                    fontWeight: 800,
                    color: "var(--bg)",
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    letterSpacing: "0",
                    mb: { xs: "0.5rem", md: "1rem" },
                  }}
                >
                  {HEADINGS[currentIndex]}
                </Typography>
              </motion.div>
            </AnimatePresence>
            {/* Static Subheading (No Animation) */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.95rem", md: "1rem" },
                color: "rgba(255, 255, 255, 0.85)",
                maxWidth: { xs: "90%", sm: "85%", md: "52%" },
                margin: "0 auto",
              }}
            >
              {STATIC_SUBHEADING}
            </Typography>
          </Box>

          {/* CTA Buttons - Using reusable CTAButtons component */}
          <CTAButtons buttons={ctaButtons} />

          {/* Macbook Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ width: "100%" }}
          >
            <Box
              className="MACBOOK"
              component="img"
              src={MACBOOK}
              alt="MACBOOK"
              sx={{
                cursor: "pointer",
                width: "100%",
                maxWidth: "79.739rem",
                mt: { xs: "1.5rem", md: "2rem" },
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
```

---

## Usage Examples

### Example 1: Basic Hero Usage (Already Implemented)
```jsx
<CTAButtons buttons={ctaButtons} />
```

### Example 2: Custom Spacing
```jsx
<CTAButtons 
  buttons={ctaButtons}
  spacing={{ xs: "1rem", sm: "1.25rem", md: "1.5rem" }}
/>
```

### Example 3: With State Management
```jsx
const [isLoading, setIsLoading] = useState(false);

const buttons = [
  {
    id: "submit",
    type: "secondary",
    label: isLoading ? "Loading..." : "Submit",
    onClick: handleSubmit,
    disabled: isLoading,
  },
];

<CTAButtons buttons={buttons} />
```

### Example 4: Conditional Rendering
```jsx
const buttons = userRole === "lawyer"
  ? [
      { id: "dashboard", type: "primary", label: "My Dashboard", onClick: goDashboard },
      { id: "settings", type: "secondary", label: "Settings", onClick: goSettings },
    ]
  : [
      { id: "signup", type: "secondary", label: "Sign Up", onClick: goSignup },
    ];

<CTAButtons buttons={buttons} />
```

---

**Note**: The label prop is NOT hardcoded inside the components. It's always passed as a prop, making the components flexible and reusable across your application.

