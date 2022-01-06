import React from "react";
import { Typography, LinearProgress } from "@mui/material";
import "./LoginButton.css";

function LoginButton(props) {
  return (
    <button className="LoginButton-button">
      {props.status == "waiting" ? (
        <Typography
          sx={{
            fontFamily: "proxima nova regular",
            fontSize: "110%",
          }}
        >
          {props.texto}
        </Typography>
      ) : (
        <LinearProgress color="primary" sx={{ width: "80%", margin: "auto" }} />
      )}
    </button>
  );
}
export default LoginButton;
