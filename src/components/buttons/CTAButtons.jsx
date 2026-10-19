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
        // Responsive gap between buttons across all breakpoints
        gap: {
          xs: "0.75rem",    // 320px: Tight spacing
          sm: "0.875rem",   // 375px: Small spacing
          md: "1rem",       // 425px+: Standard spacing
          lg: "1.125rem",   // 768px+: Medium spacing
          xl: "1.25rem",    // 1024px+: Larger spacing
        },
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // Responsive top margin
        mt: {
          xs: "1.5rem",     // Mobile: Small margin
          sm: "1.75rem",    // Mobile standard: Small margin
          md: "2rem",       // Tablet: Medium margin
          lg: "2.25rem",    // Desktop: Larger margin
          xl: "2.5rem",     // Large desktop: Extra margin
        },
        // Responsive padding for mobile
        px: { xs: "0.5rem", sm: "1rem", md: "0" },
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
