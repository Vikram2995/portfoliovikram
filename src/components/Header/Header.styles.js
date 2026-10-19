import typography from "../../theme/typography";
const HeaderStyles = {
  backgroundColor: "transparent",
  color: "var(--text)",
  boxShadow: "none",
  width: "100%",
  position: "sticky",
  top: "0",
  left: "0",
  right: "0",
  margin: "0 auto",

  "& .ContainerCustom": {
    width: "100%",

    ".MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      minHeight: "auto",
      padding: "0",
      alignItems: "stretch",

      ".logo": {
        maxWidth: "10%",
      },

      ".nav-links": {
        width: "calc(100% - 10%)",
        alignItems: "stretch",
        gap: "0",
        ".MuiButtonBase-root": {
          borderRadius: "0",
          flex: "1 1 auto",
          padding: "0",
          overflow: "hidden",
          fontWeight: typography.fontWeight.semibold,
          fontSize: typography.fontSize.md,
          color: "var(--text-white)",
          textAlign: "center",
          textTransform: typography.textTransform.uppercase,
          letterSpacing: "1px",
          maxHeight: "8.125rem",
          "&:hover": {
            span: {  
             color: "var(--danger)",
            },
            ".nav-image": {
              transform: "scale(1.2)",
            },
          },
          "&::after": {
            content: '""',
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "var(--overlay-bg)",
            zIndex: "0",
          },
          "&.active": {
            color: "var(--text-white)",
            fontWeight: "var(--weight6)",
          },

          ".nav-image": {
            width: "100%",
            height: "100%",
            transition: "all 0.3s ease-in",
          },
        },
      },

      ".nav-actions": {
        display: {
          xs: "none",
          md: "flex",
        },
        alignItems: "center",
        gap: "1rem",
      },
    },
  },
};

export default HeaderStyles;