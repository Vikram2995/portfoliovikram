import { Container, Typography } from "@mui/material";

function About() {
  return (
    <section id="about">
      <Container maxWidth="lg" sx={{ py: "5rem" }}>
        <Typography variant="h3" gutterBottom>
        Who is it for xcvd
        </Typography>

        <Typography>
          About section content goes here.
        </Typography>
      </Container>
    </section>
  );
}

export default About;