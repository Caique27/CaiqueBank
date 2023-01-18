import React from "react";
import { busca } from "../axios/api.js";

async function dadosConta(numConta){
  var contas = await busca("/contas");
  
  for (var conta in contas) {
    if (contas[conta]._numeroConta == numConta) {
      
      var contaSelecionada = contas[conta];
      console.log(contaSelecionada)
      console.log(contaSelecionada._transacoes)
    }
  }
  return(contaSelecionada)
}
const BuscaDados = React.createContext({
  dados: dadosConta
 
});
 
export default BuscaDados;