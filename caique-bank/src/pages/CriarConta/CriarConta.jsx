import React, { useState } from "react";
import "./CriarConta.css";
import Image from "../../assets/img/Logo.png";
import { Typography, Box, Tabs, Tab } from "@mui/material";
import Stepper from "../../components/Stepper/Stepper.jsx";
import SwipeableViews from "react-swipeable-views";
import DadosPessoais from "../../components/Cadastro/DadosPessoais.jsx";
import DadosLogin from "../../components/Cadastro/DadosLogin.jsx";
import ConfirmarDados from "../../components/Cadastro/ConfirmarDados.jsx";
import Feedback from "../../components/Cadastro/Feedback.jsx";
import { useTheme } from "@mui/material/styles";
import { adicionar, busca } from "../../api/api.js";
function CriarConta() {
  const theme = useTheme();
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  const [numeroFeedback, setNumeroFeedback] = useState();
  const componenteConfirmacao = (
    <ConfirmarDados
      voltarPagina={anterior}
      registrarConta={registrarConta}
      dados={dadosColetados}
      key={2}
    />
  );
  const pages = [
    <DadosPessoais proximaPagina={proximo} atualizar={atualizar} key={0} />,
    <DadosLogin
      voltarPagina={anterior}
      proximaPagina={proximo}
      atualizar={atualizar}
      key={1}
    />,
    etapaAtual == 2 ? componenteConfirmacao : <h1 key={2}>confirmacao</h1>,
    <Feedback numeroConta={numeroFeedback} key={3} />,
  ];
  function proximo() {
    if (etapaAtual < 3) {
      setEtapaAtual(etapaAtual + 1);
      setNumeroConta();
    }
  }
  function anterior() {
    if (etapaAtual > 0) {
      setEtapaAtual(etapaAtual - 1);
    }
  }
  function atualizar(dados) {
    //console.log(data[0]);

    if (etapaAtual == 0) {
      setDados({ ...dadosColetados, ...dados });
    } else if (etapaAtual == 1) {
      setDados({ ...dadosColetados, ...dados });
    }
  }
  async function setNumeroConta() {
    var contas = await busca("/contas");
    var numeros = [];
    for (var conta in contas) {
      numeros.push(contas[conta]._numeroConta);
    }

    var num = Math.floor(Math.random() * 9999) + 1;

    if (numeros.includes(num) == false) {
      return num;
    }
  }

  async function formatarConta() {
    return {
      _numeroConta: await setNumeroConta(),
      _nomeCliente: dadosColetados.nome,
      genero: dadosColetados.genero,
      _senha: dadosColetados.senha,
      _saldo: 100,
      agencia: "0001",
      _transacoes: [],
    };
  }

  async function registrarConta() {
    //   await adicionar('/contas',novaConta)
    const contaFormatada = await formatarConta();
    setNumeroFeedback(contaFormatada._numeroConta);
    proximo();

    await adicionar("/contas", contaFormatada);
  }
  return (
    <section className="CriarConta-page">
      <header className="CriarConta-header">
        <img src={Image} alt="Logo" className="CriarConta-logo" />
        <h1 className="CriarConta-nome">CaiqueBank</h1>
      </header>

      <div className="CriarConta-box">
        <Box>
          <Tabs
            sx={{ borderBottom: 0.5, borderColor: "divider" }}
            value={0}
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="primary"
          >
            <Tab
              label="Criar Conta"
              disableRipple
              sx={{ fontFamily: "proxima nova regular", fontSize: "110%" }}
            />
          </Tabs>
        </Box>
        <Stepper currentStep={etapaAtual} />
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={etapaAtual}
        >
          {pages}
        </SwipeableViews>
      </div>
    </section>
  );
}

export default CriarConta;
