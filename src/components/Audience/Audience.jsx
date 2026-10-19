import { Box, Container } from "@mui/material";

import AudienceCard from "./AudienceCard";
import { audienceData } from "./audienceData";

function Audience() {
  return (
    <Box>
        <Container>
    <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between", columnGap:"1.5rem"}}>
        {audienceData.map((item) => (
        <AudienceCard
          key={item.id}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          features={item.features}
          buttonText={item.buttonText}
        />
      ))}
    </Box>
        </Container>
    </Box>
  );
}

export default Audience;