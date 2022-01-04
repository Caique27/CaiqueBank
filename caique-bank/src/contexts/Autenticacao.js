import React, { useState } from "react";
import { busca } from "../api/api.js";

async function verificarConta(login, senha, agencia) {
  console.log("dados inseridos: ", login, agencia, senha);

  var contas = await busca("/contas");

  return contaExiste(login, agencia, senha, contas);
}
function contaExiste(login, agencia, senha, contas) {
  var exists = false;

  for (var conta in contas) {
    if (contas[conta]._numeroConta == login) {
      exists = true;
      var contaSelecionada = contas[conta];
    }
  }
  if (exists && agencia == "0001") {
    return senhaCorreta(login, senha, contaSelecionada);
  } else {
    return { Autenticado: false, erro: "conta não existe" };
  }
}
function senhaCorreta(login, senha, contaSelecionada) {
  console.log(contaSelecionada);

  var senhaCorreta = contaSelecionada._senha == senha;
  if (senhaCorreta) {
    return { Autenticado: true, erro: "" };
  } else {
    return { Autenticado: true, erro: "senha incorreta" };
  }
}

const Autenticacao = React.createContext({
  autenticacao: verificarConta,
});

export default Autenticacao;
