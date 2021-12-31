import React from "react";
const Validacoes = React.createContext({
  numero: checarNumero,
  preenchimento: checarPreenchimento,
});
function checarNumero() {
  return { valido: true, texto: "" };
}
function checarPreenchimento(dados) {
  if (dados == "") {
    return { valido: false, texto: "*Campo obrigatório" };
  }
  return { valido: true, texto: "" };
}
export default Validacoes;
