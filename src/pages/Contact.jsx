import { Container, Typography } from "@mui/material";

function Contact() {
  return (
    <section id="contact">
      <Container maxWidth="lg" sx={{ py: "5rem" }}>
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>

        <Typography>
          Contact section content goes here.
        </Typography>
      </Container>
    </section>
  );
}

export default Contact;