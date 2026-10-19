import { Box, Typography } from "@mui/material";

function SectionHeader({
     section,
  title,
  subtitle,
  textAlign = "center",
  maxWidth = "100%",
}) {
  return (
    <Box
      sx={{
        textAlign,
        maxWidth,
        mx: textAlign === "center" ? "auto" : 0,
        mb: {
          xs: "2rem",
          md: "3rem",
        },
      }}
    >
         <Typography
        component="span"
        sx={{
         fontSize:"0.875rem",
          fontWeight: 400,
          lineHeight: 1.2,
          color: "var(--text)",
          mb: "2.5rem",
          border: "1px solid var(--stat-border)",
          display: "inline-block",
          padding: "0.75rem 1.125rem",
          borderRadius: "9999px",
           textTransform: "uppercase",
        }}
      >
        {section}
      </Typography>
      <Typography
        component="h2"
        sx={{
         fontSize:"3rem",
          fontWeight: 700,
          lineHeight: 1.2,
          color: "var(--text)",
          mb: "1rem",         
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
           fontSize:"1rem",
          fontWeight: 400,
          lineHeight: 1.2,
          color: "var(--text-light)",
          margin: "0 auto 2.5rem auto",
          maxWidth: {
          xs: "100%",
          md: "45rem",
        },
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default SectionHeader;