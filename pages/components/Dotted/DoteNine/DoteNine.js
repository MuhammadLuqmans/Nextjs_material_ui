import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NineData } from "./DataNine";

function NineDote() {
  return (
    <Box>
      {/* Second Row of Dots  */}
      <div>
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
          S
        </Typography>
        {NineData.map((nine, indnine) => {
          return (
            <>
              <Typography
                key={indnine}
                sx={{
                  fontSize: "10px",
                  height: "10px",
                  float: "left",
                  m: 0.2,
                  width: "10px",
                  color: "#1DCE00",
                  backgroundColor: `${nine.color}`,
                  borderRadius: "50%",
                }}
              >
                {" "}
              </Typography>
            </>
          );
        })}
      </div>
    </Box>
  );
}

export default NineDote;
