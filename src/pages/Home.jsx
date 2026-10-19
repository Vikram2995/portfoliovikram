import { Box, Button, Container } from "@mui/material";
import Hero from "../components/Hero/Hero";
import SectionHeader from "../components/Common/SectionHeader";
import { VIDEOSCREEN } from "../assets";
import CustomButton from "../components/Common/CustomButton";
import Audience from "../components/Audience/Audience";
import OfferBanner from "../components/OfferBanner/OfferBanner";


function Home({ theme }) {
  return (
    <Box
    // sx={{
    //   minHeight: "100vh",
    // }}

    >
      <Hero theme={theme} />


      <Box className="How_it_works" sx={{ py: "5rem", backgroundColor: "var(--light-gray)", textAlign: "center" }}>

        <Container>
          <SectionHeader
            section="How It Works"
            title="Legal Help, Simplified to Just a Few Clicks"
            subtitle="Whether you're a first-timer or a seasoned professional, LawTribe is designed to just work — smooth, fast, and stress-free from start to finish."
          />
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>

            <Box
              className="VIDEOSCREEN"
              component="img"
              src={VIDEOSCREEN}
              alt="VIDEOSCREEN"
              sx={{
                cursor: "pointer",
                width: "100%",
                maxWidth: "calc(100% - 20%)",
                borderRadius: "1.75rem",
                position: "relative",
                overflow: "hidden",
              }}
            />
            <Box sx={{
              position: "absolute", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: "rgba(0, 0, 0, 0.4)", cursor: "pointer", width: "100%",
              maxWidth: "calc(100% - 20%)", margin: "0 auto", borderRadius: "1.75rem", display: "flex", justifyContent: "center", alignItems: "center"
            }}>
              <Button sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", width: "7.5rem", height: "7.5rem", borderRadius: "9999px" }}>
                <svg width="2.625rem" height="3rem" viewBox="0 0 2.625rem 3rem" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.9588 29.9411L10.0228 46.4345C5.52606 49.0895 0 45.6337 0 40.1669V7.17995C0 1.71319 5.52606 -1.74231 10.0228 0.912558L37.9588 17.406C42.5852 20.1379 42.5852 27.2092 37.9588 29.9411Z" fill="white" />
                </svg>
              </Button>
            </Box>
          </Box>
          <CustomButton
            text="See How it Works"
            variant="primary"
            onClick={() => console.log("Join")}
          />
        </Container>
      </Box>
      <Box sx={{ py: "5rem", backgroundColor: "var(--bg)" }}>
        <SectionHeader
          section="Who is it for"
          title="LawTribe Is Built Around You - Whoever You Are"
          subtitle="One connected legal ecosystem for everyone. "
        />
        <Audience />
      </Box>

      <Box sx={{ py: "5rem", backgroundColor: "var(--light-gray)", }}>
          <Container>
  <SectionHeader
            section="Notary"
            title="Skip The Queue, Notarize Online"
            subtitle="Get your documents notarized quickly, securely, and from the comfort of your home. Professional notaries ready in minutes."
          />
  <OfferBanner />
          <CustomButton
            text="Start Notarization"
            variant="primary"
          />
  </Container>
      </Box>
      <Box sx={{ py: "5rem", height: "100vh" }}>szdgsg</Box>
      <Box sx={{ py: "5rem", height: "100vh" }}>szdgsg</Box>
    </Box>
  );
}

export default Home;