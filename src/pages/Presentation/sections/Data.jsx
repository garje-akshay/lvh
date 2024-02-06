import React from "react";

import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Grid,
  Card,
  TableHead,
  styled,
} from "@mui/material";
import MKTypography from "components/MKTypography";

const StyledTableCell = styled(TableCell)({
  maxWidth: 100,
  border: "1px solid rgba(224, 224, 224, 1)",
  textAlign: "center",
});

const Data = () => {
  return (
    <Grid
      container
      item
      flexDirection="column"
      alignItems="start"
      sx={{ textAlign: "start", my: 6, mx: "auto", px: 3 }}
      id={"products"}
    >
      <MKTypography variant="h2" fontWeight="bold" sx={{ paddingBottom: 2, px: 4 }}>
        Our Product Range
      </MKTypography>
      <MKTypography variant="body1" color="text" sx={{ paddingBottom: 2, px: 4 }}>
        We deliver the wide ranges/grades of graphite. Our processing functionality and associations
        with worldwide Mine organizations and synthetic graphite producers enables us to deliver all
        kind of Natural and Synthetic graphite of required specific properties like purity, particle
        size, crystallinelity, etc. Keen attention to details, Adaptability and intensive material
        testing work ensures that the graphite we provide meets your specific requirements.
      </MKTypography>
      <MKTypography variant="h5" color="text" sx={{ paddingBottom: 4, px: 4 }}>
        Listed products are some of the grades in which we deal, however we have an expertise in
        customisation products as per the requirement of the applications in varied industries.
      </MKTypography>

    
      <Card
        sx={{
          p: 3,
          width: "100%",
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
          <MKTypography variant="h3" color="text" sx={{ paddingBottom: 4, px: 4 ,textAlign:"center"}}>
      Synthetic Graphite
      </MKTypography>
        <TableContainer sx={{ borderRadius: 0 }}>
          <Table sx={{ border: "1px solid rgba(224, 224, 224, 1)", borderCollapse: "collapse" }}>
            <TableBody>
              <TableRow>
                <StyledTableCell>GRADE</StyledTableCell>
                <StyledTableCell>CODE</StyledTableCell>
                <StyledTableCell>PARTICLE SIZE</StyledTableCell>
                <StyledTableCell>CARBON</StyledTableCell>
                <StyledTableCell>APPLICATIONS</StyledTableCell>
              </TableRow>

              <TableRow>
                <StyledTableCell>
                  <strong>
                    <u>Milled grades</u>{" "}
                  </strong>
                </StyledTableCell>
                <StyledTableCell colSpan={4}></StyledTableCell>
              </TableRow>

              <TableRow>
                <StyledTableCell rowSpan={3}>Micro Fine</StyledTableCell>
                <StyledTableCell>S03</StyledTableCell>
                <StyledTableCell>{"75% < 5µm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
                <StyledTableCell rowSpan={4}> Powder<br/> metallurgy <br/>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>S08</StyledTableCell>
                <StyledTableCell>{"75% < 6µm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>S12</StyledTableCell>
                <StyledTableCell>{"75% < 12µm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell rowSpan={3}>Super Fine</StyledTableCell>
                <StyledTableCell>S20</StyledTableCell>
                <StyledTableCell>{"75% < 20µm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>S35</StyledTableCell>
                <StyledTableCell>{"75% < 35µm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
                <StyledTableCell rowSpan={4}>Lubricants <br/>Conductive<br/> Paints</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>S45</StyledTableCell>
                <StyledTableCell>{"90% < 45µm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell rowSpan={1}>Extra Fine</StyledTableCell>
                <StyledTableCell>S45</StyledTableCell>
                <StyledTableCell>{"70% < 45µm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell rowSpan={4}>Extra Fine</StyledTableCell>
                <StyledTableCell>S75</StyledTableCell>
                <StyledTableCell>{"90% < 75 µm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>S100</StyledTableCell>
                <StyledTableCell>{"90% 0 - 0,1mm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
                <StyledTableCell rowSpan={3}>Brake lining</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>S1000</StyledTableCell>
                <StyledTableCell>{"90% 0 - 1mm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>S2050</StyledTableCell>
                <StyledTableCell>{"90% 0 - 0,1mm"}</StyledTableCell>
                <StyledTableCell>min. 99,5 %</StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Grid>
  );
};

export default Data;
