import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DoteData } from "./DoteData";
import { DoteSec } from "../DoteSec/DataSec";

function DoteStyle() {
  return (
    <Box sx={{ mt: 1 }}>
      {/* first dots row */}
      <Typography
        sx={{
          fontSize: "10px",
          height: "10px",
          float: "left",
          m: 0.1,
          width: "10px",
          color: "#fff",
          marginTop: "-2px",
        }}
      >
        E
      </Typography>
      {DoteData.map((one, ind) => {
        return (
          <>
            <Typography
              key={ind}
              sx={{
                fontSize: "10px",
                height: "10px",
                float: "left",
                m: 0.2,
                width: "10px",
                color: "#1DCE00",
                backgroundColor: `${one.color}`,
                borderRadius: "50%",
              }}
            >
              {" "}
            </Typography>
          </>
        );
      })}
      {/* Second Row of Dots */}
      {/* <div>
              <Typography sx={{  fontSize:'10px', height:"10px", float:"left",m:0.1,width:"10px", color:"#fff", marginTop:"-2px"}}>E</Typography>
            {DoteSec.map((twos ,indsec)=>{
                return (
                    <>
            <Typography key={indsec} sx={{ fontSize:'10px', height:"10px", float:"left",m:0.2,width:"10px", color:"#1DCE00", backgroundColor:`${ twos.color }`, borderRadius:"50%" }}> </Typography>
            </>
                )
            })}
            </div> */}
    </Box>
  );
}

export default DoteStyle;
