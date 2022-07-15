import React, { useState } from "react";
import { busca } from "../axios/api.js";
// ----------Cliente---------------
async function verificarConta(login, senha, agencia) {
  var contas = await busca("/contas");

  return contaExiste(login, agencia, senha, contas);
}

//-----------Gerente-------------------
async function verificarLogin(login, senha) {
  var gerentes = await busca("/gerentes");
  var gerenteExiste = false;
  for (var gerente in gerentes) {
    if (gerentes[gerente].login == login) {
      gerenteExiste = true;
      var gerenteSelecionado = gerentes[gerente];
    }
  }
  if (gerenteExiste) {
    if (gerenteSelecionado._senha == senha) {
      return { Autenticado: true, erro: "" };
    } else {
      return { Autenticado: false, erro: "*Senha incorreta" };
    }
  } else {
    return { Autenticado: false, erro: "*Login não existe" };
  }
}

// -------------------------------------

function contaExiste(login, agencia, senha, contas) {
  var clienteExiste = false;

  for (var conta in contas) {
    if (contas[conta]._numeroConta == login) {
      clienteExiste = true;
      var contaSelecionada = contas[conta];
    }
  }
  if (clienteExiste && agencia == "0001") {
    return senhaCorreta(login, senha, contaSelecionada);
  } else {
    return { Autenticado: false, erro: "*Conta não existe" };
  }
}
function senhaCorreta(login, senha, contaSelecionada) {
  var senhaCorreta = contaSelecionada._senha == senha;
  if (senhaCorreta) {
    return { Autenticado: true, erro: "" };
  } else {
    return { Autenticado: false, erro: "senha incorreta" };
  }
}

const Autenticacao = React.createContext({
  autenticacaoCliente: verificarConta,
  autenticacaoGerente: verificarLogin,
});

export default Autenticacao;
