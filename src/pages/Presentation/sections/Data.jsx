import React from "react";

import { Table, TableBody, TableRow, TableCell, TableContainer, Paper, Grid, Card } from "@mui/material";
import MKTypography from "components/MKTypography";

const StyledTableCell = ({ children }) => {
  return (
    <TableCell
      sx={{
        maxWidth: 100,
        border: "1px solid rgba(224, 224, 224, 1)",
        textAlign:"center"
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
    >
      <MKTypography variant="h2" fontWeight="bold" sx={{ paddingBottom: 2, px: 4  }}>
        Our Product Range
      </MKTypography>
      <MKTypography variant="body1" color="text" sx={{ paddingBottom: 8, px: 4  }}>
        We deliver the wide ranges/grades of graphite. Our processing functionality and associations
        with worldwide Mine organizations and synthetic graphite producers enables us to deliver all
        kind of Natural, Synthetic and amorphous graphite of required specific properties like
        purity, particle size, crystallinelity, etc. Keen attention to details, Adaptability and
        intensive material testing work ensures that the graphite we provide meets your specific
        requirements.
      </MKTypography>
      <Card sx={{
          p: 3,
          width:"100%",
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }} >
          <TableContainer>
        <Table>
          <TableRow>
            <StyledTableCell><strong>Sr. No.</strong></StyledTableCell>
            <StyledTableCell><strong>Grade Name</strong></StyledTableCell>
            <StyledTableCell><strong>Type</strong></StyledTableCell>
            <StyledTableCell><strong>Carbon</strong></StyledTableCell>
            <StyledTableCell><strong>Ash</strong></StyledTableCell>
            <StyledTableCell><strong>Moisture</strong></StyledTableCell>
            <StyledTableCell><strong>Particle Size D10</strong></StyledTableCell>
            <StyledTableCell><strong>Particle Size D50</strong></StyledTableCell>
            <StyledTableCell><strong>Particle Size D90</strong></StyledTableCell>
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
              <StyledTableCell>min. 99 % typical: 99,7 %</StyledTableCell>
              <StyledTableCell>max. 1,0 % typical: 0,3 %</StyledTableCell>
              <StyledTableCell>max. 0,8 % typical: 0,3 %</StyledTableCell>
              <StyledTableCell>max. 2,0 µm typical: 1,6 µm </StyledTableCell>
              <StyledTableCell>max. 5,0 µm typical: 4,6 µm </StyledTableCell>
              <StyledTableCell>max. 11,0 µm typical: 9,5 µm </StyledTableCell>
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
              <StyledTableCell>LVH M 95545</StyledTableCell>
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
          </TableBody>
        </Table>
        </TableContainer>
      </Card>
    </Grid>
  );
};

export default Data;
