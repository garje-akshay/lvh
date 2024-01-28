// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function Company() {
  return (
    <MKBox id={"company"} component="section" py={{ xs: 3, md: 3 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={7}>
            <MKTypography variant="h3" mb={4}>
              “ We know Graphite ! <br /> Let’s Grow together with Graphite ”
            </MKTypography>
            <MKTypography variant="subtitle1" color="text" p={2} mb={2}>
              <ul style={{ listStyleType: "disc" }}>
                <li>
                  {" "}
                  LVH Products GmbH. is a single window for all kinds of Graphite powder and
                  Graphite Dispersions.
                </li>
                <li>
                  LVH Products GmbH. is unique because of our in-house processing facilities and
                  collaborations with multiple manufacturers throughout the world.{" "}
                </li>
                <li>
                  {" "}
                  LVH Products GmbH. is known because of their ability to provide Customized and
                  exceptional world-class quality at a reasonable price.{" "}
                </li>
                <li>
                  LVH Products GmbH. is an international company directed by the well-known personas
                  of Graphite industry and having decades of experience.
                </li>
              </ul>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
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
                  <strong>+49 6123 703730</strong>
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
                  <strong>info@lvhproducts.de</strong>
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
                  <Icon fontSize="small">map</Icon>
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  <strong>LVH Products GmbH.</strong> <br />
                  Rosengasse 1, Eltville DE65343 , Germany
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Company;
