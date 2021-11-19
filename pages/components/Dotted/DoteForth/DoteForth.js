import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ForthData } from "./ForthData";
// import { ThirdData } from './ThirdData'

function ForthDote() {
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
          A
        </Typography>
        {ForthData.map((forth, indforth) => {
          return (
            <>
              <Typography
                key={indforth}
                sx={{
                  fontSize: "10px",
                  height: "10px",
                  float: "left",
                  m: 0.2,
                  width: "10px",
                  color: "#1DCE00",
                  backgroundColor: `${forth.color}`,
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

export default ForthDote;
