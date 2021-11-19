import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { SixData } from "./SixData";

function SixDote() {
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
          J
        </Typography>
        {SixData.map((six, indsix) => {
          return (
            <>
              <Typography
                key={indsix}
                sx={{
                  fontSize: "10px",
                  height: "10px",
                  float: "left",
                  m: 0.2,
                  width: "10px",
                  color: "#1DCE00",
                  backgroundColor: `${six.color}`,
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

export default SixDote;
