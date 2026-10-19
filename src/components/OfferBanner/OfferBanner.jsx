import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { offerData } from "./offerData";

function OfferBanner({ data }) {
  return (
    <>
       <Box
      sx={{
        border: "1px solid #D6E3EC",
        borderRadius: "1.5rem",
        padding: "1rem 1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        flexWrap: {
          xs: "wrap",
          md: "nowrap",
        },
        backgroundColor: "#fff",
      }}
    >
      {/* Left Content */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
      >
        {/* Badge */}
        <Box
          sx={{
            background:
              "linear-gradient(90deg, #0CA8C9 0%, #0076B6 100%)",
            color: "#fff",
            borderRadius: "999px",
            padding: "0.75rem 1.25rem",
            fontWeight: 700,
            fontSize: "1.125rem",
            whiteSpace: "nowrap",
          }}
        >
          {offerData.badgeText}
        </Box>

        {/* Text */}
        <Typography
          sx={{
            fontSize: {
              xs: "1.25rem",
              md: "1.75rem",
            },
            fontWeight: 600,
            color: "#333",
          }}
        >
          {offerData.title}{" "}
          <Box
            component="span"
            sx={{
              color: "#0A84D0",
              fontWeight: 700,
            }}
          >
            {offerData.highlightText}
          </Box>{" "}
          {offerData.suffixText}
        </Typography>
      </Box>

      {/* Right CTA */}
      <Button
        endIcon={<ArrowForwardIcon />}
        sx={{
          color: "#0A9C8F",
          fontWeight: 700,
          textTransform: "none",
          fontSize: "1.5rem",
          whiteSpace: "nowrap",

          "&:before": {
            content: '""',
            width: "1px",
            height: "2rem",
            backgroundColor: "#D6E3EC",
            marginRight: "1.5rem",
            display: {
              xs: "none",
              md: "block",
            },
          },
        }}
      >
        {offerData.buttonText}
      </Button>
    </Box>
    </>
  );
}

export default OfferBanner;