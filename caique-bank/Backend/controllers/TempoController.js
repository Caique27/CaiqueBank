import React from "react";


class TempoController{
  static dataAtual = (req,res)=> {
  var getData = new Date();

  var day = `${getData.getDate()<10?
    `0${getData.getDate()}`
    :getData.getDate()
  }/${
    getData.getMonth() <9?
    `0${getData.getMonth()+1}`:
    getData.getMonth()
  }/${getData.getFullYear()}`;

  var minutos = String(
    getData.getMinutes() < 10
      ? "0" + getData.getMinutes()
      : getData.getMinutes()
  );

  var time = String(getData.getHours() + ":" + minutos);
  var answer = { dia: String(day), hora: String(time) }
    res.status(200).json(answer)
  
}



}

export default TempoController