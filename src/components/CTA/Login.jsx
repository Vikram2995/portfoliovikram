import { Button } from "@mui/material";

function Login({
  text,
  variant = "contained",
  sx = {},
  ...props
}) {
  return (
    <Button
      variant={variant}
      sx={{
        textTransform: "none",
        boxShadow: "none",
        borderRadius: "2rem",
        padding: "0",
        fontWeight: "600",
        backgroundColor: "var(--cta)",
        color: "#ffffff",
        border: "1px solid var(--border)",
        minHeight: "2.5rem",
        minWidth: "4.5rem",
        width: "100%",
        maxWidth: "4.5rem",
        "&:hover": {
          backgroundColor: "var(--cta)",
          color: "var(--bg)",
        },  
        ...sx,
      }}
      {...props}
    >
      {text}
    </Button>
  );
}

export default Login;