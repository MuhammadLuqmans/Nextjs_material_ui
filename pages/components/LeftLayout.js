import { Box } from "@mui/system";
import { Typography, Grid } from "@mui/material";
import React from "react";
import EolicaCard from "./Eolica/EolicaCard";
import DottedBox from "./Dotted/dottedBox";

// import VerticalLine from '../public/Image/verticalLines.png'

function leftcomponet(props) {
  return (
    <Box
      item
      sx={{ paddingRight: { md: "5%", lg: "5%" }, padding: { xs: "10px" } }}
    >
      {/* first row of image and text */}
      <Grid item xs={12} sm={12} sx={{}}>
        <Grid item sx={{ paddingX: "3%" }}>
          <img src="./Image/verticalLines.png" width="100%" alt="image" />

          <Typography
            variant="p"
            component="h4"
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "1.455em",
              color: "#fff",
              marginTop: "-10px",
              lineHeight: "28px",
              textAlign: "center",
            }}
          >
            Estructura de generación (diaria) 2019 - REE
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          sx={{
            width: "100%",
            marginTop: "44px",
            justifyContent: {
              xs: "space-around",
              sm: "space-around",
              md: "space-between",
            },
          }}
        >
          {/* First card */}
          <EolicaCard />
          {/* Second Dotted Container */}
          <DottedBox />
        </Grid>
        <Grid
          item
          sx={{
            marginTop: "70px",
            marginBottom: "30px",
            padding: "0px",
            textAlign: "center",
          }}
        >
          <img src="./Image/header.png" width="90%" height="100%" style={{}} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default leftcomponet;
