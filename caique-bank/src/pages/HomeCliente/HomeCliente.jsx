import React, { useState, useContext, useEffect } from "react";
import "./HomeCliente.css";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import { Tabs, Tab, Box, Step, Stepper, StepLabel } from "@mui/material";

import MinhaConta from "../../components/MinhaConta/MinhaConta.jsx"

import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";

import BuscaDados from "../../contexts/BuscaDados.js"

function HomeCliente() {
  const buscaDados = useContext(BuscaDados)
  const [dados,setDados] = useState({_nomeCliente:'nomeTeste'})
  const { conta } = useParams();
  async function initialRequest(){
    setDados(await buscaDados.dados(conta))
  }  
  initialRequest()//Requisição inicial de dados da API para exibição
  useEffect(() => {
    setInterval(
      async() =>  setDados(await buscaDados.dados(conta)),
      10000
    );
  }, []);
  
  const theme = useTheme();
  
  const [value, setValue] = useState(0);
  const menus = [<MinhaConta data={'estes são os dados'}/>, <h1>{conta}</h1>,<h1>Operações</h1>];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <main className="HomeCliente-page">
      <Header nome={dados._nomeCliente}/>
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
