import React, { useState } from "react";
import "./Login.css";
import Image from "../../assets/img/Logo.png";
import { Tabs, Tab, Box, TabPanel } from "@mui/material";
import LoginCliente from "../../components/LoginCliente/LoginCliente.jsx";

function Login() {
  const [value, setValue] = useState(1);
  const menus = [<LoginCliente />, <h1>componente login gerente</h1>];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section className="login-page">
      <header className="login-header">
        <img src={Image} alt="Logo" className="login-logo" />
        <h1 className="login-nome">CaiqueBank</h1>
      </header>

      <div className="login-box">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 0.5, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              textColor="secondary"
              indicatorColor="primary"
            >
              <Tab
                label="Cliente"
                disableRipple
                sx={{ fontFamily: "proxima nova regular", fontSize: "90%" }}
              />
              <Tab
                label="Gerente"
                disableRipple
                sx={{
                  fontFamily: "proxima nova regular",
                  fontSize: "90%",
                }}
              />
            </Tabs>
          </Box>
        </Box>

        <div className="login-conteudo">{menus[value]}</div>
      </div>
    </section>
  );
}

export default Login;
