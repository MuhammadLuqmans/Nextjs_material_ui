import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function RightLayout() {
  return (
    <Grid
      item
      sx={12}
      sm={12}
      sx={{ paddingLeft:{xs:"20px",md:"40px" ,md: "10%", lg: "10%" } ,borderLeft:{ xs:"none" ,sm:"none",md:"1px solid #ffffff", lg:"1px solid #fff", } }}
    >
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "2.85em",
          textAlign: "center",
          lineHeight: "56px",
          color: "#FFFFFF",
          paddingTop:"-30px"
        }}
      >
        Tu turno
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontweight: "normal",
          fontSize: "1.4em",
          lineHeight: "1.25em",
          display: "flexbox",
          color: "#fff",
        }}
      >
        <br />
        ¿Cómo funciona?
        <br />
        <br />
        El sistema simulará la oferta diaria de energía que REE gestionó por
        toda la península, necesaria para la industria, los servicios y los
        hogares.
        <br />
        <br />
        ¿Tu misión?
        <br />
        <br />
        Instalar toda la infraestructura de generación que consideres para que
        no haya apagones,. La perfección es tener los 365 días en verde.
        <br />
        Es tu elección el apagar o no las centrales de gas y carbón. Así como
        decidir el mix entre ellas.
        <br />
        <br />
        Podrás iniciar con todas las centrales de las que dispone el país y su
        respectiva potencia para partir desde ese punto agregando lo que
        consideres.
      </Typography>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16%",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#3971DC",
            paddingX: "9%",
            height: "40px",
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "1.4em",
            fontWeight: "normal",
            fontFamily: "Roboto",
            fontStyle: "normal",
          }}
        >
          Volver
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "#3971DC",
            paddingX: "6%",
            height: "40px",
            borderRadius: "10px",
            textTransform: "none",
            fontSize: "1.4em",
            fontWeight: "normal",
            fontFamily: "Roboto",
            fontStyle: "normal",
          }}
        >
          Continuar
        </Button>
      </Grid>
    </Grid>
  );
}

export default RightLayout;
