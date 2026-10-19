
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";

import HeroStyle from "./HeroCss";
import { VECTORELINE } from "../../assets";
import CV_FILE from "../../assets/images/CV/pdf-sample_0.pdf";
import typography from "../../theme/typography";

// Replace these with your actual contact details
const PHONE_NUMBER = "+919661202830";
const EMAIL_ADDRESS = "vikram1992rana@gmail.com";

function Hero() {
  const [hireDialogOpen, setHireDialogOpen] = useState(false);

  const handleClose = () => {
    setHireDialogOpen(false);
  };

  return (
    <Box id="hero" sx={HeroStyle}>
      <Box
        className="hero-content"
        component="img"
        src={VECTORELINE}
        alt=""
      />

      <Box className="profile-text">
        <Typography className="name" variant="h2">
          Hi, I'm <span>Vikram Kumar</span>
        </Typography>

        <Typography className="designation" variant="h3">
          Frontend and UI/UX Designer, Developer, Professional
        </Typography>

        <Typography className="description" variant="body2">
          Turpis, sit amet iaculis dui consectetur at. Cras sagittis
          molestie orci. Suspendisse ut laoreet mi. Phasellus eu tortor
          vehicula, blandit enim eu, auctor massa. Nulla ultricies tortor
          dolor, sit amet suscipit enim condimentum id.
        </Typography>

        <Box sx={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
          <Button
            variant="outlined"
            onClick={() => setHireDialogOpen(true)}
            sx={{
              fontSize: typography.fontSize.sm, 
              fontWeight: typography.fontWeight.semibold,
              textTransform: typography.textTransform.capitalize,
              borderColor: "var(--danger)",
              color: "var(--danger)",
              borderRadius: "0",
              width: "100%",
              maxWidth: "12.5rem",
              minHeight: "3.5rem",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            Hire Me
          </Button>

          <Button
            variant="contained"
            component="a"
            href={CV_FILE}
            download="Vikram-Kumar-CV.pdf"
            sx={{
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.semibold,
              textTransform: typography.textTransform.capitalize,
                borderRadius: "0",
              width: "100%",
              maxWidth: "12.5rem",
              minHeight: "3.5rem",
              borderColor: "var(--danger)",
              backgroundColor: "var(--danger)",
              "&:hover": {
                backgroundColor: "var(--danger)",
              },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Box>

      {/* Hire Me Dialog */}
      <Dialog
        open={hireDialogOpen}
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
        aria-labelledby="hire-dialog-title"
      >
        <DialogTitle id="hire-dialog-title">
          Let's Work Together

          <IconButton
            aria-label="Close dialog"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            ×
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Interested in working together? Contact me by phone or email.
          </Typography>

          <Button
            fullWidth
            variant="outlined"
            href={`tel:${PHONE_NUMBER}`}
            sx={{ mb: 1.5 }}
          >
            Call Me
          </Button>

          <Button
            fullWidth
            variant="contained"
            href={`mailto:${EMAIL_ADDRESS}`}
          >
            Email Me for Work
          </Button>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Hero;
