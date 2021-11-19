import * as React from "react";
import Container from "@mui/material/Container";
// import Typography from '@mui/material/Typography';
import { Grid, Typography, Button, Divider } from "@mui/material";

import Box from "@mui/material/Box";
import Leftcomponet from "./components/LeftLayout";
import RightLayout from "./components/RightLayout";
import { makeStyles } from "@mui/styles";

// import ProTip from '../src/ProTip';
// import Link from '../src/Link';
// import Copyright from '../src/Copyright';

export default function Index() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0px",
        paddingTop: "2%",
        margin: "auto",
        backgroundColor: "#232323",
      }}
    >
      <Grid item xs={12} container>
        <Grid
          item
          sm={12}
          md={6}
          lg={6}
          sx={{
            paddingLeft: { md: "5%", lg: "5%" },
            paddingTop: { xs: "20px", sm: "40px", md: "5%", lg: "5%" },
            paddingRight: "0%",
          }}
        >
          <Leftcomponet />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ marginBottom:{xs:"50px",sm:"50px"},paddingRight:{xs:"20px",md:"40px" ,md: "6%", lg: "6%" },paddingTop:{xs:"20px",md:"40px" ,md: "6%", lg: "6%" }, paddingLeft: "0%" }}
        >
          <RightLayout />
        </Grid>
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles(() => ({
  // hr:{
  //   height:"100px",
  //   margin: "20px"
  // }
}));
