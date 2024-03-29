// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Presentation page sections
import Information from "pages/Presentation/sections/Information";

// Presentation page components

// Routes

// Images
import bgImage from "assets/images/graphite-bg.jpg";
import Data from "./sections/Data";
import Company from "./sections/Company";
import { Box, Icon, Modal, Slide, Stack } from "@mui/material";
import { useState } from "react";
import SimpleFooter from "examples/Footers/SimpleFooter";
import TypeWriterEffect from "react-typewriter-effect";
import pxToRem from "assets/theme/functions/pxToRem";

function Presentation() {
  const [show, setShow] = useState(false);
  const toggleModal = () => setShow(!show);

  function scrollToTargetAdjusted(id){
    var element = document.getElementById(id);
    var headerOffset = 150;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

  return (
    <>
      <DefaultNavbar
        routes={[]}
        refRoutes={[
          {
            label: "Applications",
            onClick: () => {
              scrollToTargetAdjusted("application")
            },
          },
          {
            label: "Products",
            onClick: () => {
              scrollToTargetAdjusted("products")
            },
          },
          {
            label: "Company",
            onClick: () => {
              document.getElementById("company")?.scrollIntoView(true);
            },
          },
        ]}
        action={{
          type: "click",
          onClick: toggleModal,
          label: "Contact Us",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="65vh"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients["dark"] ? gradients["dark"].main : gradients.dark.main, 0.7),
              rgba(gradients["dark"] ? gradients["dark"].main : gradients.dark.main, 1)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={12} justifyContent="center">
            <MKTypography
              variant="h2"
              color="white"
              textAlign="center"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                maxWidth: "60%",
              })}
            >
              {"Excellence in \n"}
            </MKTypography>
            <br />
            <Box sx={{ width: "100%" }}></Box>
            <TypeWriterEffect
              textStyle={{
                color: "white",
                fontSize: pxToRem(36),
                lineHeight: 1.3,
                textAlign: "center",
              }}
              cursorColor="white"
              multiText={["Chemical", "Energy", "Friction", "Metallurgy"]}
              multiTextDelay={2000}
              multiTextLoop={true}
              typeSpeed={120}
            />
            <Box sx={{ width: "100%" }}></Box>

            <MKTypography
              variant="h2"
              color="white"
              textAlign="center"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                maxWidth: "60%",
              })}
            >
              &#160; with Next generation of &#160;
              <u>Graphite</u>
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/*<Counters />*/}

        <Information />
        {/* <DesignBlocks />
        <Pages /> */}
        {/* <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox> */}
      </Card>
      <Data />
      <Company />
      <MKBox pt={6} px={1} mt={6}>
        {/* <DefaultFooter content={footerRoutes} /> */}
        <SimpleFooter />
      </MKBox>
      <Modal open={show} onClose={toggleModal} sx={{ display: "grid", placeItems: "center" }}>
        <Slide direction="down" in={show} timeout={500}>
          <Card>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">phone</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  <strong><a href="tel:+49 6123 703730" style={{color:"black"}}>+49 6123 703730</a></strong>
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">email</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  <strong><a href="mailto:info@lvhproducts.de" style={{color:"black"}}>info@lvhproducts.de</a></strong>
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2} >
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <Icon fontSize="small">map</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  <strong><a href="https://maps.app.goo.gl/3y2zkH3s88vEmNNGA" style={{color:"black"}}>LVH Products GmbH.</a></strong> <br />
                  Rosengasse 1, Eltville DE65343 , Germany
                </MKTypography>
              </MKBox>
            </Stack>
          </Card>
        </Slide>
      </Modal>
    </>
  );
}

export default Presentation;
