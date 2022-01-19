import React from "react";
import { Typography } from "@mui/material";
import "./BackButton.css";

function BackButton({ aoClicar }) {
  return (
    <button type="button" className={`BackButton-button `} onClick={aoClicar}>
      <Typography
        sx={{
          fontFamily: "proxima nova regular",
          fontSize: "110%",
        }}
      >
        {"< Voltar"}
      </Typography>
    </button>
  );
}
export default BackButton;
