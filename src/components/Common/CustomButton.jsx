import { Box, Button, Typography } from "@mui/material";

function CustomButton({
  text,
  variant = "primary",
  onClick,
  sx = {},
  ...props
}) {
  return (
    <Button
      onClick={onClick}
      {...props}
      sx={{
        padding: "0",
        height: "56px",
        fontSize: "1rem",
        fontWeight: 600,
        textTransform: "none",
        boxShadow: "none",
        marginTop: "2.5rem",

        overflow: "hidden",
        position: "relative",

        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",

        transition:
          "transform 0.3s ease, background-color 0.3s ease, color 0.3s ease",

        ...(variant === "primary" && {
          backgroundColor: "var(--primary)",
          color: "#fff",

          "& .effect1": {
            transform: "translateY(0)",
            transition:
              "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
          },

          "& .effect2": {
            transform: "translateY(0)",
            transition:
              "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
          },

          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",

            "& .effect1": {
              transform: "translateY(-56px)",
            },

            "& .effect2": {
              transform: "translateY(-56px)",
            },
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }),

        ...(variant === "secondary" && {
          backgroundColor: "transparent",
          border: "1px solid var(--border)",
          color: "var(--text)",

          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.08)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            transform: "translateY(-3px)",
          },

          "&:active": {
            transform: "translateY(0)",
          },
        }),

        ...sx,
      }}
    >
      <Box
        className="effect1"
        sx={{
          minHeight: "56px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--primary)",
          borderRadius: "9999px",
          flexShrink: 0,
        }}
      >
        {text}
      </Box>

      <Box
        className="effect2"
        sx={{
          minHeight: "56px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--secondary)",
          borderRadius: "9999px",
          flexShrink: 0,
        }}
      >
        {text}
      </Box>
    </Button>
  );
}

export default CustomButton;