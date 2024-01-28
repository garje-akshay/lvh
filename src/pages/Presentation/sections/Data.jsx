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
} from "@mui/material";
import MKTypography from "components/MKTypography";

const StyledTableCell = ({ children }) => {
  return (
    <TableCell
      sx={{
        maxWidth: 100,
        border: "1px solid rgba(224, 224, 224, 1)",
        textAlign: "center",
      }}
    >
      {children}
    </TableCell>
  );
};

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
        <TableContainer>
          <Table>
            <TableRow>
              <StyledTableCell>
                <strong>Grade Name</strong>
              </StyledTableCell>
              <StyledTableCell>
                <strong>Type</strong>{" "}
              </StyledTableCell>
              <StyledTableCell>
                <strong>Specifications</strong>
              </StyledTableCell>
              <StyledTableCell>
                <strong>Particle Size </strong>
              </StyledTableCell>
              <StyledTableCell>
                <strong>Applications</strong>
              </StyledTableCell>
            </TableRow>
            <TableBody>
              <TableRow>
                <StyledTableCell>LVH 4801</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,87 % <br />
                  A : 0,13% <br />M : 0,34 %
                </StyledTableCell>
                <StyledTableCell>D50 : 8,00 μm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH +597</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 97,38 %, <br />
                  A : 2,62 % <br />M : 0,33 %
                </StyledTableCell>
                <StyledTableCell>&gt; 50 Mesh 82,17 %</StyledTableCell>
                <StyledTableCell>Friction</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH CR 90101</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 90,74 % <br />
                  A : 9,26 % <br />M : 0,43 %
                </StyledTableCell>
                <StyledTableCell>
                  &gt; 80 Mesh 78,80 % &gt; 100 Mesh 84,70 % &lt; 100 Mesh 15,30 %{" "}
                </StyledTableCell>
                <StyledTableCell>Fire retardants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH CR 90108</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 90,89 % <br />
                  A : 9,11 % <br />M : 0,31 %
                </StyledTableCell>
                <StyledTableCell>
                  &gt; 50 Mesh 30,80 % &gt; 80 Mesh 82,70 % &lt; 80 Mesh 17,30 %{" "}
                </StyledTableCell>
                <StyledTableCell>Fire retardants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH CY3220</StyledTableCell>
                <StyledTableCell> Natural</StyledTableCell>
                <StyledTableCell>
                   C : 90,47% <br />
                  A : 9,53 % <br />M :  0,23 %
                </StyledTableCell>
                <StyledTableCell>
                  &gt;200 µm 50 – 80 % 74,47 % &gt; 200 µm &gt;315 µm 10 – 35 % 22,80 % &gt; 315 µm
                </StyledTableCell>
                <StyledTableCell>Friction</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FIN 80220</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 80,38 % <br />
                  A : 16,36 % <br />M : 0,43 %
                </StyledTableCell>
                <StyledTableCell>&lt; 200 Mesh 91,17 %</StyledTableCell>
                <StyledTableCell>Refractory</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 10501 </StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : approx. 99,5 % <br />
                  A : approx. 0,5 % <br />M : approx. 0,5 %
                </StyledTableCell>
                <StyledTableCell>D50 : 0,6 – 0,8 µm D90 : approx. 1,6 µm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 10509+</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,92 % <br />
                  A : 0,08 % <br />M : 0,34 %
                </StyledTableCell>
                <StyledTableCell>D10 : 1,58 μm D50 : 3,91 μm D90 : 7,60 μm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 10550+</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  Carbon : 99,92 % ,<br />
                  A : 0,08 %,
                  <br />M : 0,34 %
                </StyledTableCell>
                <StyledTableCell>D10 : 3,65 µm D50 : 12,50 µm D90 : 32,59 µm</StyledTableCell>
                <StyledTableCell>Carbon Brushes</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FLN 100304X</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 99,92 % <br />
                  A : 0,08 % <br />M : 0,34 %
                </StyledTableCell>
                <StyledTableCell>D10 : 1,52 μm, D50 : 4,73 μm, D90 : 7,02 μm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FLN 80100</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 81,70 % <br />
                  A : 18,30 % <br />M : 18,30 %
                </StyledTableCell>
                <StyledTableCell>
                  &gt; 80 Mesh 10,60 % &gt; 100 Mesh 3,40 % &lt; 100 Mesh 86,00 %
                </StyledTableCell>
                <StyledTableCell>Refractory</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH R 15600</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,60 % <br />
                  A : 0,40 % <br />M : 0,42 %
                </StyledTableCell>
                <StyledTableCell>0,5 -6 mm 92,35 %</StyledTableCell>
                <StyledTableCell>Polymers</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell> LVH CR 94062</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : min. 94 % <br />
                  A : max. 4 % <br />M : max. 0,5 %
                </StyledTableCell>
                <StyledTableCell>minus 100mesh, 80% min minus325mesh, 20% max</StyledTableCell>
                <StyledTableCell>Friction</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FLN 95515</StyledTableCell>
                <StyledTableCell>Large Crystalline natural </StyledTableCell>
                <StyledTableCell>
                  C : min. 95 % <br />
                  A : max. 5 % <br />M : max. 0,50 %
                </StyledTableCell>
                <StyledTableCell>D50 : &lt;15 µm D90 : &lt;45 µm</StyledTableCell>
                <StyledTableCell>Forging Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell> LVH FLN 100505</StyledTableCell>
                <StyledTableCell>Large Crystalline natural </StyledTableCell>
                <StyledTableCell>
                  C : min. 99.5 % <br />
                  A : max. 0.50 % <br />M : max. 0.50 %
                </StyledTableCell>
                <StyledTableCell>D50 : &lt;5.5 µm D90 : &lt;12 µm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH R10003 plus</StyledTableCell>
                <StyledTableCell>Synthetic </StyledTableCell>
                <StyledTableCell>
                  C : ca. 99,9 % <br />
                  A : max. 0,10 % <br />M : max. 0,50 %
                </StyledTableCell>
                <StyledTableCell> D50 : 2 – 3 µm D90 : ca. 5 µm</StyledTableCell>
                <StyledTableCell>Forging Lubricants, coating</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH R990501</StyledTableCell>
                <StyledTableCell>Synthetic </StyledTableCell>
                <StyledTableCell>
                  C : 99,5 % <br />
                  A : 0,5 % <br />M : 0,5 %
                </StyledTableCell>
                <StyledTableCell>D50 : 0,6 – 0,8 µmD90 : 1,6 µm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH R991005</StyledTableCell>
                <StyledTableCell>Synthetic </StyledTableCell>
                <StyledTableCell>
                  C : min. 99 % <br />
                  typical : 99,7 % <br />
                  A : max. 1,0 % <br />
                  typical : 0,3 % <br />
                  M : max. 0,8 % <br />
                  typical : 0,3 %
                </StyledTableCell>
                <StyledTableCell>
                  D10 : max. 2,0 µm <br />
                  typical : 1,6 µm D50 : max.5,0 µm <br />
                  typical : 4,6 µm D90 : max. 11,0 µm
                  <br />
                  typical : 9,5 µm
                </StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 15100+</StyledTableCell>
                <StyledTableCell> Synthetic </StyledTableCell>
                <StyledTableCell>
                  C : 99,92 % <br />
                  A : 0,08 % <br />M : 0,32 %
                </StyledTableCell>
                <StyledTableCell>&gt; 71 μm 14,30 %</StyledTableCell>
                <StyledTableCell>Carbon Brushes</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH R 15500+</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,91 % <br />
                  A : 0,09 % <br />M : 0,31 %
                </StyledTableCell>
                <StyledTableCell>&gt; 0,5 mm 4,80 %</StyledTableCell>
                <StyledTableCell>Casting, Forging</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL  10140</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,89 % <br />
                  A : 0,11 % <br />M : 0,22 %
                </StyledTableCell>
                <StyledTableCell>   D10 : 5,50 μm D50 :  17,36 μm D90 :  40,72 μm</StyledTableCell>
                <StyledTableCell>Carbon Brushes</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL  10175</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,38 % <br />
                  A : 0,62 % <br />M : 0,13 %
                </StyledTableCell>
                <StyledTableCell>&gt; 0,071 mm 0,02 %</StyledTableCell>
                <StyledTableCell>Carbon Brushes</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 10170</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C99,62 % <br />
                  A : 0,38 % <br />M : 0,49 %
                </StyledTableCell>
                <StyledTableCell>&gt; 0,071 mm all pass</StyledTableCell>
                <StyledTableCell>Chemicals, Polymers</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 10305G</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,47 % <br />
                  A : 0,53 % <br />M : 0,41 %
                </StyledTableCell>
                <StyledTableCell> D10 : 26,24 μm D50 :   88,29 μm D90 :  199,38 μm</StyledTableCell>
                <StyledTableCell>Carbon Brushes, Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH R 10150</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,94 % <br />
                  A : 0,06 % <br />M : 0,18 %
                </StyledTableCell>
                <StyledTableCell>D10 : 21,55 μm D50 : 68,60 μm D90 : 149,10 μm</StyledTableCell>
                <StyledTableCell>Refractories</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 10305</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,72 % <br />
                  A : 0,28 % <br />M : 0,37 %
                </StyledTableCell>
                <StyledTableCell>D10 : 1,59 μm D50 : 3,90 μm D90 : 7,63 μm</StyledTableCell>
                <StyledTableCell>Carbon Brushes, Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FLN 10575</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 99,57 % <br />
                  A : 0,43 % <br />M : 0,33 %
                </StyledTableCell>
                <StyledTableCell>&lt; 200 Mesh / 75 μm 97,30 %</StyledTableCell>
                <StyledTableCell>Forging Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FLN 80220</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                   C : 80,38 % <br />
                  A : 16,36 % <br />M : 0,43 %
                </StyledTableCell>
                <StyledTableCell>&lt; 200 Mesh 91,17 %</StyledTableCell>
                <StyledTableCell>Refractoy, Friction</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH CR 90062C</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 90,58 % <br />
                  A : 9,42 % <br />M : 0,43 %
                </StyledTableCell>
                <StyledTableCell>
                  &gt; 100 Mesh / 150 µm 11,90 % &gt; 150 Mesh / 100 µm 45,20 % &gt; 200 Mesh / 75
                  µm 27,20 % &lt; 200 Mesh / 75 µm 15,70 %
                </StyledTableCell>
                <StyledTableCell>Refractories, Insulations</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>
                  LVH <br />M 95545
                </StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 98,12 % <br />
                  A : 1,88 % <br />M : 0,48 %
                </StyledTableCell>
                <StyledTableCell>Retained &gt; 70 µm 25,46 %</StyledTableCell>
                <StyledTableCell>Batteries</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH R 1015</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,70 % <br />
                  A : 0,30 % <br />M : 0,34 %
                </StyledTableCell>
                <StyledTableCell>D10 : 2,50 μm D50 : 6,20 μm D90 : 12,50 μm</StyledTableCell>
                <StyledTableCell>Lubricants, Energy</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH R 10700</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,61 % <br />
                  A : 0,39 % <br />M : 0,44 %
                </StyledTableCell>
                <StyledTableCell>125-700 µm 94,30 %</StyledTableCell>
                <StyledTableCell>Friction, Polymers</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH N 1208</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 97,92 % <br />
                  A : 2,08 % <br />M : 0,44 %
                </StyledTableCell>
                <StyledTableCell>D10 : 1,68 μm</StyledTableCell>
                <StyledTableCell>Forging/ Diecasting Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FLN 100304</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 99,82 % <br />
                  A : 0,18 % <br />M : 0,43 %
                </StyledTableCell>
                <StyledTableCell>     D90 :  7,67 μm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH NCY 115500</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 98,42 % <br />
                  A : 1,58 % <br />M : 0,42 %
                </StyledTableCell>
                <StyledTableCell>Retained &gt; 500 μm 5,46 %</StyledTableCell>
                <StyledTableCell>Friction, Polymers</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH +885</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>C : min 85 % (LOI)</StyledTableCell>
                <StyledTableCell>min 85 % + 85 mesh</StyledTableCell>
                <StyledTableCell>Coating, Fire Retardants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 10506+</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,92 % <br />
                  A : 0,08 % <br />M : 0,34 %
                </StyledTableCell>
                <StyledTableCell>D10 : 1,49 μm D50 : 3,48 μm D90 : 6,75 μm</StyledTableCell>
                <StyledTableCell>Carbon Brushes</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 10501+</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,92 % <br />
                  A : 0,08 % <br />M : 0,34 %
                </StyledTableCell>
                <StyledTableCell>D10 : 1,18 μm D50 : 2,78 μm D90 : 5,40 μm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 1105</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,12 % <br />
                  A : 0,88 % <br />M : 0,41 %
                </StyledTableCell>
                <StyledTableCell>D90 : 8,35 μm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH R 1035</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,87 % <br />
                  A : 0,13 % <br />M : 0,34 %
                </StyledTableCell>
                <StyledTableCell>D10 : 4,55 μm D50 : 16,10 μm D90 : 35,10 μm</StyledTableCell>
                <StyledTableCell>Carbon Brushes</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 10520+</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,92 % <br />
                  A : 0,08 % <br />M : 0,34%
                </StyledTableCell>
                <StyledTableCell>D10 : 2,97 μm D50 : 9,19 μm D90 : 20,75 μm</StyledTableCell>
                <StyledTableCell>Chemicals, Polymers</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH 45-50</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,92 % <br />
                  A : 0,08 % <br />M : 0,34%
                </StyledTableCell>
                <StyledTableCell>D10 : 3,65 μm D50 : 12,50 μm D90 : 32,59 μm</StyledTableCell>
                <StyledTableCell>Lubricants, Energy</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH 08-09</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,92 % <br />
                  A : 0,08 % <br />M : 0,34%
                </StyledTableCell>
                <StyledTableCell>D10 : 1,58 μm D50 : 3,91 μm D90 : 7,60 μm</StyledTableCell>
                <StyledTableCell>Lubricants, Energy</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FLN 80150</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : 84,38 % <br />
                  A : 15,62 % <br />M : 0,93 %
                </StyledTableCell>
                <StyledTableCell>&lt; 200 Mesh 95,16 %</StyledTableCell>
                <StyledTableCell>Refractoy, Friction</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH FL 10105</StyledTableCell>
                <StyledTableCell>Synthetic</StyledTableCell>
                <StyledTableCell>
                  C : 99,62 % <br />
                  A : 0,38 % <br />M : 0,48 %
                </StyledTableCell>
                <StyledTableCell>D90 : 5,46 μm</StyledTableCell>
                <StyledTableCell>Coating, Fire Retardants, Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH CR 90062</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : min. 90 % <br />
                  A : max. 6 % <br />M : max. 0,5 %
                </StyledTableCell>
                <StyledTableCell>
                  plus800 μm : 0 % plus500 μm : max. 5 % plus315 μm : 10 - 35 % plus200 μm : 50 - 80
                  %
                </StyledTableCell>
                <StyledTableCell>Refractories, Insulations</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH PR-PSG 7/94</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : min. 94 % <br />
                  A : max. 6 % <br />M : max. 1 %
                </StyledTableCell>
                <StyledTableCell> D50 : 5 – 7 μm D90 : about 12 μm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH PR-PSG 7/96</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : min. 96 % <br />
                  A : max. 4 % <br />M : max. 1 %
                </StyledTableCell>
                <StyledTableCell>D50 : 5 – 7 μm D90 : about 12 μm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH PR-PSG 9/94</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : min. 94 % <br />
                  A : max. 6 % <br />M : max. 1 %
                </StyledTableCell>
                <StyledTableCell> D50 : 7 – 9 μm D90 : about 16 μm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
              <TableRow>
                <StyledTableCell>LVH PR-PSG 9/96</StyledTableCell>
                <StyledTableCell>Natural</StyledTableCell>
                <StyledTableCell>
                  C : min. 96 % <br />
                  A : max. 4 % <br />M : max. 1 %
                </StyledTableCell>
                <StyledTableCell> D50 : 7 – 9 μm D90 : about 16 μm</StyledTableCell>
                <StyledTableCell>Lubricants</StyledTableCell>
              </TableRow>
            </TableBody>

            {/* <TableRow>
            <StyledTableCell><sTableRowong>Sr. No.</sTableRowong></StyledTableCell>
            <StyledTableCell><sTableRowong>Grade Name</sTableRowong></StyledTableCell>
            <StyledTableCell><sTableRowong>Type</sTableRowong></StyledTableCell>
            <StyledTableCell><sTableRowong>Carbon</sTableRowong></StyledTableCell>
            <StyledTableCell><sTableRowong>Ash</sTableRowong></StyledTableCell>
            <StyledTableCell><sTableRowong>Moisture</sTableRowong></StyledTableCell>
            <StyledTableCell><sTableRowong>Particle Size D10</sTableRowong></StyledTableCell>
            <StyledTableCell><sTableRowong>Particle Size D50</sTableRowong></StyledTableCell>
            <StyledTableCell><sTableRowong>Particle Size D90</sTableRowong></StyledTableCell>
          </TableRow>

          <TableBody>
            <TableRow>
              <StyledTableCell>1</StyledTableCell>
              <StyledTableCell>194 MADAGASCAR</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>2</StyledTableCell>
              <StyledTableCell>LVH 300</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>99,07 %</StyledTableCell>
              <StyledTableCell>0,93 %</StyledTableCell>
              <StyledTableCell>0,43 %</StyledTableCell>
              <StyledTableCell>2,10 μm</StyledTableCell>
              <StyledTableCell>12,70 μm</StyledTableCell>
              <StyledTableCell>44,10 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>3</StyledTableCell>
              <StyledTableCell>LVH 4801</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,87 %</StyledTableCell>
              <StyledTableCell>0,13 %</StyledTableCell>
              <StyledTableCell>0,34 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>8,00 μm</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>4</StyledTableCell>
              <StyledTableCell>LVH +597</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>97,38 %</StyledTableCell>
              <StyledTableCell>2,62 %</StyledTableCell>
              <StyledTableCell>0,33 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>5</StyledTableCell>
              <StyledTableCell>LVH CR 90101</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>90,74 %</StyledTableCell>
              <StyledTableCell>9,26 %</StyledTableCell>
              <StyledTableCell>0,43 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>6</StyledTableCell>
              <StyledTableCell>LVH CR 90108</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>90,89 %</StyledTableCell>
              <StyledTableCell>9,11 %</StyledTableCell>
              <StyledTableCell>0,31 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>7</StyledTableCell>
              <StyledTableCell>LVH CY3220</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>90,47%</StyledTableCell>
              <StyledTableCell>9,53 %</StyledTableCell>
              <StyledTableCell>0,23 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>8</StyledTableCell>
              <StyledTableCell>LVH FIN 80220</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>80,38 %</StyledTableCell>
              <StyledTableCell>16,36 %</StyledTableCell>
              <StyledTableCell>0,43 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>9</StyledTableCell>
              <StyledTableCell>LVH FL 10501</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>approx. 99,5 %</StyledTableCell>
              <StyledTableCell>approx. 0,5 %</StyledTableCell>
              <StyledTableCell>approx. 0,5 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>0,6 – 0,8 µm</StyledTableCell>
              <StyledTableCell>approx. 1,6 µm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>10</StyledTableCell>
              <StyledTableCell>LVH FL 10509+</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,92 %</StyledTableCell>
              <StyledTableCell>0,08 %</StyledTableCell>
              <StyledTableCell>0,34 %</StyledTableCell>
              <StyledTableCell>1,58 μm</StyledTableCell>
              <StyledTableCell>3,91 μm</StyledTableCell>
              <StyledTableCell>7,60 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>11</StyledTableCell>
              <StyledTableCell>LVH FL 10550+</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,92 %</StyledTableCell>
              <StyledTableCell>0,08 %</StyledTableCell>
              <StyledTableCell>0,34 %</StyledTableCell>
              <StyledTableCell>3,65 µm</StyledTableCell>
              <StyledTableCell>12,50 µm</StyledTableCell>
              <StyledTableCell>32,59 µm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>12</StyledTableCell>
              <StyledTableCell>LVH FLN 100304X</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>13</StyledTableCell>
              <StyledTableCell>LVH FLN 80100</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>81,70 %</StyledTableCell>
              <StyledTableCell>18,30 %</StyledTableCell>
              <StyledTableCell>0,32 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>14</StyledTableCell>
              <StyledTableCell>LVH R 15600</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,60 %</StyledTableCell>
              <StyledTableCell>0,40 %</StyledTableCell>
              <StyledTableCell>0,42 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>15</StyledTableCell>
              <StyledTableCell>LVH RES 1030</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>16</StyledTableCell>
              <StyledTableCell>LVH CR 94062</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>min. 94 %</StyledTableCell>
              <StyledTableCell>max. 4 %</StyledTableCell>
              <StyledTableCell>max. 0,5 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>17</StyledTableCell>
              <StyledTableCell>LVH FLN 95515</StyledTableCell>
              <StyledTableCell>Large Crystalline natural</StyledTableCell>
              <StyledTableCell>min. 95 %</StyledTableCell>
              <StyledTableCell>max. 5 %</StyledTableCell>
              <StyledTableCell>max. 0,50 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>&lt;15 µm</StyledTableCell>
              <StyledTableCell>&lt;45 µm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>18</StyledTableCell>
              <StyledTableCell>LVH FLN 100505</StyledTableCell>
              <StyledTableCell>Large Crystalline natural</StyledTableCell>
              <StyledTableCell>min. 99.5 %</StyledTableCell>
              <StyledTableCell>max. 0.50 %</StyledTableCell>
              <StyledTableCell>max. 0.50 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>&lt;5.5 µm</StyledTableCell>
              <StyledTableCell>&lt;12 µm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>19</StyledTableCell>
              <StyledTableCell>LVH PC 103165</StyledTableCell>
              <StyledTableCell>Resilient</StyledTableCell>
              <StyledTableCell>99,7 %</StyledTableCell>
              <StyledTableCell>0.30%</StyledTableCell>
              <StyledTableCell>0,25 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>20</StyledTableCell>
              <StyledTableCell>LVH PC 103375</StyledTableCell>
              <StyledTableCell>Resilient</StyledTableCell>
              <StyledTableCell>99,7 %</StyledTableCell>
              <StyledTableCell>0.30%</StyledTableCell>
              <StyledTableCell>0,25 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>21</StyledTableCell>
              <StyledTableCell>LVH R10003 plus</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,9 %</StyledTableCell>
              <StyledTableCell>max. 0,10 %</StyledTableCell>
              <StyledTableCell>max. 0,50 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>2 – 3 µm</StyledTableCell>
              <StyledTableCell>ca. 5 µm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>22</StyledTableCell>
              <StyledTableCell>LVH R990501</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>. 99,5 %</StyledTableCell>
              <StyledTableCell>0,5 %</StyledTableCell>
              <StyledTableCell>0,5 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>0,6 – 0,8 µm</StyledTableCell>
              <StyledTableCell>1,6 µm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>23</StyledTableCell>
              <StyledTableCell>LVH R991005</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>min. 99 % <br/>typical :  99,7 %</StyledTableCell>
              <StyledTableCell>max. 1,0 % <br/>typical :  0,3 %</StyledTableCell>
              <StyledTableCell>max. 0,8 % <br/>typical :  0,3 %</StyledTableCell>
              <StyledTableCell>max. 2,0 µm <br/>typical :  1,6 µm </StyledTableCell>
              <StyledTableCell>max. 5,0 µm <br/>typical :  4,6 µm </StyledTableCell>
              <StyledTableCell>max. 11,0 µm <br/>typical :  9,5 µm </StyledTableCell>
            </TableRow>

            <TableRow>
              <StyledTableCell>24</StyledTableCell>
              <StyledTableCell>LVH FL 15100+</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>ca. 99,9 %</StyledTableCell>
              <StyledTableCell>0,08 %</StyledTableCell>
              <StyledTableCell>0,32 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>25</StyledTableCell>
              <StyledTableCell>LVH R 15500+</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,91 %</StyledTableCell>
              <StyledTableCell>0,09 %</StyledTableCell>
              <StyledTableCell>0,31 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>26</StyledTableCell>
              <StyledTableCell>LVH FL 10140</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,89 %</StyledTableCell>
              <StyledTableCell>0,11 %</StyledTableCell>
              <StyledTableCell>0,22 %</StyledTableCell>
              <StyledTableCell>5,50 μm</StyledTableCell>
              <StyledTableCell>17,36 μm</StyledTableCell>
              <StyledTableCell>40,72 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>27</StyledTableCell>
              <StyledTableCell>LVH FL 10175</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,38 %</StyledTableCell>
              <StyledTableCell>0,62 %</StyledTableCell>
              <StyledTableCell>0,13 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>28</StyledTableCell>
              <StyledTableCell>LVH FL 10170</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,62 %</StyledTableCell>
              <StyledTableCell>0,38 %</StyledTableCell>
              <StyledTableCell>0,49 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>29</StyledTableCell>
              <StyledTableCell>LVH FL 10305G</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,47 %</StyledTableCell>
              <StyledTableCell>0,53 %</StyledTableCell>
              <StyledTableCell>0,41 %</StyledTableCell>
              <StyledTableCell>26,24 μm</StyledTableCell>
              <StyledTableCell>88,29 μm</StyledTableCell>
              <StyledTableCell>199,38 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>30</StyledTableCell>
              <StyledTableCell>LVH R 10150</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,94 %</StyledTableCell>
              <StyledTableCell>0,06 %</StyledTableCell>
              <StyledTableCell>0,18 %</StyledTableCell>
              <StyledTableCell>21,55 μm</StyledTableCell>
              <StyledTableCell>68,60 μm</StyledTableCell>
              <StyledTableCell>149,10 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>31</StyledTableCell>
              <StyledTableCell>LVH FL 10305</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,72 %</StyledTableCell>
              <StyledTableCell>0,28 %</StyledTableCell>
              <StyledTableCell>0,37 %</StyledTableCell>
              <StyledTableCell>1,59 μm</StyledTableCell>
              <StyledTableCell>3,90 μm</StyledTableCell>
              <StyledTableCell>7,63 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>32</StyledTableCell>
              <StyledTableCell>LVH FLN 10575</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>99,57 %</StyledTableCell>
              <StyledTableCell>0,43 %</StyledTableCell>
              <StyledTableCell>0,33 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>33</StyledTableCell>
              <StyledTableCell>LVH FLN 80220</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>80,38 %</StyledTableCell>
              <StyledTableCell>16,36 %</StyledTableCell>
              <StyledTableCell>0,43 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>34</StyledTableCell>
              <StyledTableCell>LVH CR 90062C</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>90,58 %</StyledTableCell>
              <StyledTableCell>9,42 %</StyledTableCell>
              <StyledTableCell>0,43 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>36</StyledTableCell>
              <StyledTableCell>LVH <br/>M 95545</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>98,12 %</StyledTableCell>
              <StyledTableCell>1,88 %</StyledTableCell>
              <StyledTableCell>0,48 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>37</StyledTableCell>
              <StyledTableCell>LVH R 1015</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,70 %</StyledTableCell>
              <StyledTableCell>0,30 %</StyledTableCell>
              <StyledTableCell>0,34 %</StyledTableCell>
              <StyledTableCell>2,50 μm</StyledTableCell>
              <StyledTableCell>6,20 μm</StyledTableCell>
              <StyledTableCell>12,50 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>38</StyledTableCell>
              <StyledTableCell>LVH R 10700</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,61 %</StyledTableCell>
              <StyledTableCell>0,39 %</StyledTableCell>
              <StyledTableCell>0,44 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>39</StyledTableCell>
              <StyledTableCell>LVH N 1208</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>97,92 %</StyledTableCell>
              <StyledTableCell>2,08 %</StyledTableCell>
              <StyledTableCell>0,44 %</StyledTableCell>
              <StyledTableCell>1,68 μm</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>40</StyledTableCell>
              <StyledTableCell>LVH FLN 100304</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>99,82 %</StyledTableCell>
              <StyledTableCell>0,18 %</StyledTableCell>
              <StyledTableCell>0,43 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>7,67 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>41</StyledTableCell>
              <StyledTableCell>LVH NCY 115500</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>98,42 %</StyledTableCell>
              <StyledTableCell>1,58 %</StyledTableCell>
              <StyledTableCell>0,42 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>42</StyledTableCell>
              <StyledTableCell>LVH +885</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>min 85 % (LOI)</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>43</StyledTableCell>
              <StyledTableCell>LVH FL C100</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>min. 99.995%</StyledTableCell>
              <StyledTableCell>max. 0.005 %</StyledTableCell>
              <StyledTableCell>max. 0,50 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>44</StyledTableCell>
              <StyledTableCell>LVH FL 10506+</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,92 %</StyledTableCell>
              <StyledTableCell>0,08 %</StyledTableCell>
              <StyledTableCell>0,34 %</StyledTableCell>
              <StyledTableCell>1,49 μm</StyledTableCell>
              <StyledTableCell>3,48 μm</StyledTableCell>
              <StyledTableCell>6,75 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>45</StyledTableCell>
              <StyledTableCell>LVH FL 10501+</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,92 %</StyledTableCell>
              <StyledTableCell>0,08 %</StyledTableCell>
              <StyledTableCell>0,34 %</StyledTableCell>
              <StyledTableCell>1,18 μm</StyledTableCell>
              <StyledTableCell>2,78 μm</StyledTableCell>
              <StyledTableCell>5,40 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>46</StyledTableCell>
              <StyledTableCell>LVH FL 1105</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,12 %</StyledTableCell>
              <StyledTableCell>0,88 %</StyledTableCell>
              <StyledTableCell>0,41 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>8,35 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>47</StyledTableCell>
              <StyledTableCell>LVH R 1035</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,87 %</StyledTableCell>
              <StyledTableCell>0,13 %</StyledTableCell>
              <StyledTableCell>0,34 %</StyledTableCell>
              <StyledTableCell>4,55 μm</StyledTableCell>
              <StyledTableCell>16,10 μm</StyledTableCell>
              <StyledTableCell>35,10 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>48</StyledTableCell>
              <StyledTableCell>LVH FL 10520+</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,92 %</StyledTableCell>
              <StyledTableCell>0,08 %</StyledTableCell>
              <StyledTableCell>0,34 %</StyledTableCell>
              <StyledTableCell>2,97 μm</StyledTableCell>
              <StyledTableCell>9,19 μm</StyledTableCell>
              <StyledTableCell>20,75 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>49</StyledTableCell>
              <StyledTableCell>LVH 45-50</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,92 %</StyledTableCell>
              <StyledTableCell>0,08 %</StyledTableCell>
              <StyledTableCell>0,34 %</StyledTableCell>
              <StyledTableCell>3,65 μm</StyledTableCell>
              <StyledTableCell>12,50 μm</StyledTableCell>
              <StyledTableCell>32,59 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>50</StyledTableCell>
              <StyledTableCell>LVH 08-09</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,92 %</StyledTableCell>
              <StyledTableCell>0,08 %</StyledTableCell>
              <StyledTableCell>0,34 %</StyledTableCell>
              <StyledTableCell>1,58 μm</StyledTableCell>
              <StyledTableCell>3,91 μm</StyledTableCell>
              <StyledTableCell>7,60 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>51</StyledTableCell>
              <StyledTableCell>LVH FLN 80150</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>84,38 %</StyledTableCell>
              <StyledTableCell>15,62 %</StyledTableCell>
              <StyledTableCell>0,93 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>52</StyledTableCell>
              <StyledTableCell>LVH FL 10105</StyledTableCell>
              <StyledTableCell>Synthetic</StyledTableCell>
              <StyledTableCell>99,62 %</StyledTableCell>
              <StyledTableCell>0,38 %</StyledTableCell>
              <StyledTableCell>0,48 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>5,46 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>53</StyledTableCell>
              <StyledTableCell>LVH CR 90062</StyledTableCell>
              <StyledTableCell>Crystalline</StyledTableCell>
              <StyledTableCell>min. 90 %</StyledTableCell>
              <StyledTableCell>max. 6 %</StyledTableCell>
              <StyledTableCell>max. 0,5 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>54</StyledTableCell>
              <StyledTableCell>LVH PR-PSG 7/94</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>min. 94 %</StyledTableCell>
              <StyledTableCell>max. 6 %</StyledTableCell>
              <StyledTableCell>max. 1 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>5 – 7 μm</StyledTableCell>
              <StyledTableCell>about 12 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>55</StyledTableCell>
              <StyledTableCell>LVH PR-PSG 7/96</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>min. 96 %</StyledTableCell>
              <StyledTableCell>max. 4 %</StyledTableCell>
              <StyledTableCell>max. 1 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>5 – 7 μm</StyledTableCell>
              <StyledTableCell>12 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>56</StyledTableCell>
              <StyledTableCell>LVH PR-PSG 9/94</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>min. 94 %</StyledTableCell>
              <StyledTableCell>max. 6 %</StyledTableCell>
              <StyledTableCell>max. 1 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>7 – 9 μm</StyledTableCell>
              <StyledTableCell>about 16 μm</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>57</StyledTableCell>
              <StyledTableCell>LVH PR-PSG 9/96</StyledTableCell>
              <StyledTableCell>Natural</StyledTableCell>
              <StyledTableCell>min. 96 %</StyledTableCell>
              <StyledTableCell>max. 4 %</StyledTableCell>
              <StyledTableCell>max. 1 %</StyledTableCell>
              <StyledTableCell> — </StyledTableCell>
              <StyledTableCell>7 – 9 μm</StyledTableCell>
              <StyledTableCell>about 16 μm</StyledTableCell>
            </TableRow>
          </TableBody> */}
          </Table>
        </TableContainer>
      </Card>
    </Grid>
  );
};

export default Data;
