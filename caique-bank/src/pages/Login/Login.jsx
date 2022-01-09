import React, { useState } from "react";
import "./Login.css";
import Image from "../../assets/img/Logo.png";
import { Tabs, Tab, Box } from "@mui/material";
import LoginCliente from "../../components/LoginCliente/LoginCliente.jsx";
import LoginGerente from "../../components/LoginGerente/LoginGerente.jsx";

import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";

function Login() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const menus = [<LoginCliente />, <LoginGerente />];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <section className="login-page">
      <header className="login-header">
        <img src={Image} alt="Logo" className="login-logo" />
        <h1 className="login-nome">CaiqueBank</h1>
      </header>

      <div className="login-box">
        <Box sx={{ width: "100%", borderBottom: 2, borderColor: "divider" }}>
          <Box>
            <Tabs
              sx={{ borderBottom: 0.5, borderColor: "divider" }}
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              textColor="secondary"
              indicatorColor="primary"
            >
              <Tab
                label="Cliente"
                disableRipple
                sx={{ fontFamily: "proxima nova regular", fontSize: "110%" }}
              />
              <Tab
                label="Gerente"
                disableRipple
                sx={{
                  fontFamily: "proxima nova regular",
                  fontSize: "110%",
                }}
              />
            </Tabs>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
            >
              <div className="login-conteudo">{menus[0]}</div>
              <div className="login-conteudo">{menus[1]}</div>
            </SwipeableViews>
          </Box>
        </Box>
      </div>
    </section>
  );
}

export default Login;
