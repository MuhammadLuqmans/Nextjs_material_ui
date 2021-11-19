import { Grid, Typography } from "@mui/material";
import React from "react";
import EigDote from "./DoteEig/DoteEig";
import EleDote from "./DoteEle/DoteEle";
import FiveDote from "./DoteFive/DoteFive";
import ForthDote from "./DoteForth/DoteForth";
import NineDote from "./DoteNine/DoteNine";
import SecDotStyle from "./DoteSec/SecDotStyle";
import SevenDote from "./DoteSeven/DoteSeven";
import SixDote from "./DoteSix/DoteSix";
import TenDote from "./DoteTen/DoteTen";
import ThirdStyle from "./DoteThird.js/ThirdStyle";
import DoteStyle from "./Dots/DoteStyle";
import TwlDote from "./DoteTwl/DoteTwl";

function DottedBox() {
  return (
    <Grid
      item
      xs={12}
      sm={7}
      md={12}
      lg={7.2}
      sx={{ marginTop: "29px", textAlign: "center" }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontSize: "14px",
          lineHeight: "16px",
          color: "#fff",
          textAlign: "center",
          margin: "auto",
        }}
      >
        Disponibilidad de suministro
      </Typography>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          margin: { xs: "auto", sm: "auto", md: "none", lg: "none" },
          width: { xs: "300px", sm: "300px", md: "300px", lg: "280px" },
        }}
      >
        <DoteStyle />
        <SecDotStyle />
        <ThirdStyle />
        <ForthDote />
        <FiveDote />
        <SixDote />
        <SevenDote />
        <EigDote />
        <NineDote />
        <TenDote />
        <EleDote />
        <TwlDote />
      </Grid>
    </Grid>
  );
}

export default DottedBox;
