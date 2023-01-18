import React, { useState } from "react";
import "./Operacao.css";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CallMadeIcon from "@mui/icons-material/CallMade";

function Operacao({ dados }) {
  //   const[Icone,setIcone] = useState(<CallMadeIcon color="third" fontSize="large"/>)
  var Icone = <CallMadeIcon color="third" fontSize="large" />;
  var Cor = "Cor-verde"
  if (dados.tipo == "Depósito") {
    Icone = <CallMadeIcon color="third" fontSize="large" />
    Cor = "Cor-verde"
  } else if (dados.tipo == "Transferência Realizada") {
    Icone = <CompareArrowsIcon color="error" fontSize="large" />

    Cor = "Cor-vermelho";
  } else if (dados.tipo == "Transferência Recebida") {
    Icone = <CompareArrowsIcon color="third" fontSize="large" />
    Cor = "Cor-verde";
  }
  return (
    <section className="Operacao-section">
      <div className="Operacao-descricao">
        <div className="Operacao-icone">{Icone}</div>
        <div className="Operacao-info">
          <p className="Operacao-tipo">{dados.tipo}</p>
          <div className="Operacao-time">
            <p className="Operacao-data">{dados.dia}</p>
            <p className="Operacao-hora">{dados.hora}</p>
          </div>
        </div>
      </div>
      <div className={`Operacao-valor ${Cor}`}>
        <p className="Operacao-valor">R$ {Cor=="Cor-vermelho" ?"-":""} {dados.valor.toFixed(2)} </p>
      </div>
    </section>
  );
}
export default Operacao;
