import React from "react";
import { busca } from "../api/api.js";

async function dadosConta(numConta){
  var contas = await busca("/contas");
  
  for (var conta in contas) {
    if (contas[conta]._numeroConta == numConta) {
      
      var contaSelecionada = contas[conta];
      console.log(contaSelecionada)
    }
  }
  return(contaSelecionada)
}
const BuscaDados = React.createContext({
  dados: dadosConta
 
});
 
export default BuscaDados;