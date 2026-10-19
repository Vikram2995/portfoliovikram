import { Container, Typography } from "@mui/material";

function Services() {
  return (
    <section id="services">
      <Container maxWidth="lg" sx={{ py: "5rem" }}>
        <Typography variant="h3" gutterBottom>
          Our Services
        </Typography>

        <Typography>
          Services section content goes here.
        </Typography>
      </Container>
    </section>
  );
}

export default Services;