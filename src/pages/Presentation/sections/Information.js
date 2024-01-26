/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import polymers from "assets/images/polymers.svg";
import metallurgy from "assets/images/metallurgy.svg";
import energy from "assets/images/energy.svg";
import drilling from "assets/images/drilling.svg";
import friction from "assets/images/friction.svg";

// Images
import graphite from "assets/images/graphite-box.jpg";

function Information() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            {/*<RotatingCard>
              <RotatingCardFront
                image={bgFront}
                title={<>Applications</>}
                description="A range of solutions for addressing complex challenges."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>*/}
            <RotatingCardFront
              color={"dark"}
              image={graphite}
              title={<>Applications</>}
              description="A range of solutions for addressing complex challenges."
            />
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard icon={drilling} title="Lost Circulation Material" description="" />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard icon={energy} title="Energy Thermal Management" description="" />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard icon={friction} title="Friction Materials" description="" />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard icon={metallurgy} title="Metallurgy" description="" />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard icon={polymers} title="Polymers" description="" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;