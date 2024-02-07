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
        We deliver the wide ranges/grades of graphite powder. Our processing functionality and
        associations with worldwide Mine organizations and synthetic graphite producers enables us
        to deliver all kind of Natural and Synthetic graphite of required specific properties like
        purity, particle size, crystallinelity, etc. Keen attention to details, Adaptability and
        intensive material testing work ensures that the graphite we provide meets your specific
        requirements.
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
        <MKTypography
          variant="h3"
          color="text"
          sx={{ paddingBottom: 4, px: 4, textAlign: "center" }}
        >
          Synthetic Graphite
        </MKTypography>
        <TableContainer sx={{ borderRadius: 0 }}>
          <Table sx={{ border: "1px solid rgba(224, 224, 224, 1)", borderCollapse: "collapse" }}>
            <TableBody>
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
                <StyledTableCell rowSpan={4}>
                  {" "}
                  Powder
                  <br /> metallurgy <br />
                  Lubricants
                </StyledTableCell>
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
                <StyledTableCell rowSpan={4}>
                  Lubricants <br />
                  Conductive
                  <br /> Paints
                </StyledTableCell>
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
          </Table>
        </TableContainer>
      </Card>
    </Grid>
  );
};

export default Data;
