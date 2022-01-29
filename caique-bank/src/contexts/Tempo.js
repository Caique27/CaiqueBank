import React from "react";
const Tempo = React.createContext({
  data: dataAtual,
  mensagem: getMensagem,
});
function dataAtual() {
  var getData = new Date();
  var day = `${getData.getDate()}/${
    getData.getMonth() + 1
  }/${getData.getFullYear()}`;
  var minutos = String(
    getData.getMinutes() < 10
      ? "0" + getData.getMinutes()
      : getData.getMinutes()
  );

  var time = String(getData.getHours() + ":" + minutos);

  return { dia: String(day), hora: String(time) };
}
function getMensagem() {
  var date = new Date();
  var hour = date.getHours();
  if (hour >= 6 && hour < 12) {
    return "Bom dia,";
  } else if (hour >= 12 && hour < 19) {
    return "Boa tarde,";
  } else if (hour >= 19 || hour < 6) {
    return "Boa noite,";
  }
}

export default Tempo;
