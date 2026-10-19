import { Button } from "@mui/material";

/**
 * SecondaryCTAButton - Primary/Dark solid button component
 * Used for primary call-to-action buttons (e.g., "Find the Right Lawyer")
 *
 * Props:
 * - label (string): The text displayed on the button
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
        // Typography styling - white text on black background
        fontSize: {
          xs: "0.8125rem", // 320px: 13px - Tight mobile
          sm: "0.875rem",  // 375px: 14px - Mobile standard
          md: "0.9375rem", // 425px: 15px - Mobile to tablet transition
          lg: "1rem",      // 768px+: 16px - Tablet and above
        },
        fontWeight: 500,
        textTransform: "none",
        letterSpacing: "0.25px",
        lineHeight: 1.5,
        whiteSpace: "nowrap", // Prevent text wrapping on buttons

        // Padding and sizing - responsive across all breakpoints, matches primary button
        padding: {
          xs: "0.5rem 1.25rem",   // 320px: Tight padding
          sm: "0.5rem 1.5rem",    // 375px: Small padding
          md: "0.625rem 1.75rem", // 425px: Medium padding
          lg: "0.75rem 2rem",     // 768px: Standard padding
          xl: "0.75rem 2.125rem", // 1024px+: Generous padding
        },
        minHeight: {
          xs: "2.25rem",   // 320px: 36px - Accessible touch target
          sm: "2.375rem",  // 375px: 38px
          md: "2.5rem",    // 425px: 40px
          lg: "2.75rem",   // 768px: 44px
          xl: "2.875rem",  // 1024px+: 46px
        },

        // Shape - rounded pill shape matching primary button
        borderRadius: {
          xs: "1.25rem",  // 320px: Smaller radius
          sm: "1.375rem", // 375px: Small radius
          md: "1.5rem",   // 425px: Medium radius
          lg: "1.75rem",  // 768px: Larger radius
          xl: "2rem",     // 1024px+: Full pill radius
        },
        border: "none",

        // Colors - solid black background with white text from screenshot
        color: "#ffffff",
        backgroundColor: "#000000",

        // Transitions
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

        // Hover state - slightly lighter black, maintains contrast
        "&:hover": {
          backgroundColor: "#1a1a1a",
          color: "#ffffff",
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.35)",
        },

        // Focus state (keyboard navigation)
        "&:focus-visible": {
          outline: "2px solid rgba(255, 255, 255, 0.8)",
          outlineOffset: "2px",
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
        },
      }}
    >
      {label}
    </Button>
  );
}

export default SecondaryCTAButton;
