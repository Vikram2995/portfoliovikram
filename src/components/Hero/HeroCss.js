import { LOGO, VECTORELINE } from "../../assets";
import typography from "../../theme/typography";

const HeroStyle = {
  position: "relative",
  ".hero-content": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  ".profile-text": {
    position: "absolute",
    top: "15%",
    left: "55%",
    width: "40%",
    ".name": {
      fontSize: typography.fontSize["3xl"],
      fontWeight: typography.fontWeight.bold,
      color: "var(--text-white)",

      span: {
        color: "var(--text-white)",
        fontSize: typography.fontSize["3xl"],
        fontWeight: typography.fontWeight.semibold,
        display: "block",
        letterSpacing: typography.letterSpacing.wider,
        textTransform: typography.textTransform.uppercase,
      }
    },
    ".designation": {
      fontSize: typography.fontSize["md"],
      fontWeight: typography.fontWeight.regular,
      color: "var(--danger)",
      letterSpacing: typography.letterSpacing.wider,
      margin: "1rem 0 0 0",
    },
    ".description": {
      fontSize: typography.fontSize["sm"],
      fontWeight: typography.fontWeight.normal,
      color: "var(--text-white)",
      letterSpacing: typography.letterSpacing.wide,
      margin: "1rem 0 0 0",
    },
    ".btn": { 
    },
  },
}

export default HeroStyle;