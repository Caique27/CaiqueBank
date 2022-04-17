import React, { useState, useContext } from "react";
import "./HomeCliente.css";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import { Tabs, Tab, Box, Step, Stepper, StepLabel } from "@mui/material";

import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";

function HomeCliente() {
  const { conta } = useParams();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const menus = [<h1>Minha Conta</h1>, <h1>Extrato</h1>,<h1>Operações</h1>];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <main className="HomeCliente-page">
      <Header nome="Cliente" />
      <section className="HomeCliente-content">
      <Box sx={{ width: "100%", borderBottom: 2, borderColor: "divider" }}>
          <Box>
            <Tabs
              sx={{ borderBottom: 0.5, borderColor: "divider" }}
              value={value}
              onChange={handleChange}
              
              textColor="secondary"
              indicatorColor="primary"
              centered
            >
              <Tab
                label="Minha Conta"
                disableRipple
                sx={{ fontFamily: "proxima nova", fontSize: "110%",marginRight:"5%" }}
              />
              <Tab
                label="Extrato"
                disableRipple
                sx={{
                  fontFamily: "proxima nova",
                  fontSize: "110%",
                }}
              />
              <Tab
                label="Operações"
                disableRipple
                sx={{
                  fontFamily: "proxima nova",
                  fontSize: "110%",
                  marginLeft:"5%"
                }}
              />
            </Tabs>
            <SwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
            >
              <div >{menus[0]}</div>
              <div >{menus[1]}</div>
              <div >{menus[2]}</div>
            </SwipeableViews>
          </Box>
        </Box>
      </section>
    </main>
  );
}
export default HomeCliente;
