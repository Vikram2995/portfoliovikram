import { Box } from "@mui/material";
import { motion } from "framer-motion";

/**
 * HeroLaptopPreview - Laptop mockup with shadow/glow effect
 *
 * Encapsulates the laptop image and its shadow effect for reusability.
 * The shadow is created using a pseudo-element with radial-gradient and blur.
 *
 * Props:
 * - imageSrc (string): Path to the laptop mockup image
 * - alt (string): Alt text for accessibility
 * - delay (number): Animation delay in seconds (optional)
 *
 * Features:
 * - Soft elliptical glow shadow behind laptop
 * - Responsive sizing
 * - Smooth fade-in animation
 * - Accessible image element
 */

function HeroLaptopPreview({ imageSrc, alt = "Laptop Preview", delay = 0.3 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          // Responsive max-width for laptop image across all breakpoints
          maxWidth: {
            xs: "100%",        // 320px: Full width minus padding
            sm: "100%",        // 375px: Full width
            md: "95%",         // 425px: Slightly constrained
            lg: "90%",         // 768px: Constrained
            xl: "85%",         // 1024px: More constrained
            "2xl": "79.739rem", // 1440px+: Original max-width
          },
          mx: "auto",
        }}
      >
        {/* Shadow/Glow Effect - Positioned behind laptop */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "90%",
            // Radial gradient creates elliptical glow
            // Center: dark with opacity | Edges: transparent for soft fade
            background: "radial-gradient(ellipse 85% 45% at 50% 55%, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.08) 35%, transparent 65%)",
            // Blur filter for soft edges - matches screenshot
            filter: "blur(45px)",
            zIndex: 0,
            pointerEvents: "none",
            // Responsive shadow sizing
            "@media (max-width: 768px)": {
              filter: "blur(35px)",
              bottom: "-10%",
              height: "85%",
            },
            "@media (max-width: 480px)": {
              filter: "blur(25px)",
              bottom: "-12%",
              height: "80%",
            },
          }}
        />

        {/* Laptop Mockup Image - Positioned on top */}
        <Box
          component="img"
          src={imageSrc}
          alt={alt}
          sx={{
            position: "relative",
            zIndex: 1,
            cursor: "pointer",
            width: "100%",
            display: "block",
            height: "auto",
            // Rounded corners for laptop mockup
            borderRadius: { xs: "0.5rem", md: "1rem" },
          }}
        />
      </Box>
    </motion.div>
  );
}

export default HeroLaptopPreview;
