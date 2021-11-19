import { Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FanImg from "../../../public/Image/funs.png";

function EolicaCard() {
  return (
    <Grid item sx={12} sm={12} md={12} lg={4} sx={{marginLeft:{   lg:"20px" }}}>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          color: "#fff",
          fontSize: "2.4em",
          lineHeight: "42px",
          textAlign: { xs: "center", md: "center", lg: "left" },
        }}
      >
        Eólica
      </Typography>
      <Box
        sx={{
          width: "150px",
          height: "150px",
          border: "1px solid #ffffff",
          boxSize: "border-box",
          borderRadius: "10px",
          paddingX: "3px",
          margin: "20px 5px",
          marginX: { xs: "auto", md: "auto", lg: "5px" },
        }}
      >
        <img src="./Image/funs.png" width="130px" height="105px" alt="image" />
        <Typography
          sx={{
            marginTop: "-105px",
            float: "right",
            display: "flexbox",
            position: "relative",
            mr: 0.6,
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            backgroundColor: "#CF5454",
            fontSize: "14px",
            fontWaight: "normal",
            fontFamily: "Roboto",
            lineHeight: "16.41px",
            textAlign: "center",
            padding: "0",
            paddingTop: "8px",
            color: "#fff",
          }}
        >
          50
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#fff",
            marginLeft: "13px",
          }}
        >
          Parque Eólico
          <br /> 25 MW
        </Typography>
      </Box>
    </Grid>
  );
}

export default EolicaCard;
