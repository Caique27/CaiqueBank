import {busca,adicionar,atualizar,excluir} from "../axios/api.js"
import Tempo from "./Tempo.js"
import React from "react"



export const depositar= async(idConta,valor)=>{
const conta = await busca(`/contas/${idConta}`)
//Atribuicão de variáveis
var saldo = conta._saldo
var transacoes = conta._transacoes
//Atualização de variáveis
saldo=saldo+valor
var novaTransacao = {
    valor: valor,
    tipo:"Depósito",
    dia:(await busca("/tempo")).dia,
    hora:(await busca("/tempo")).hora
    

}
transacoes=[novaTransacao,...transacoes]
console.log(transacoes)
//Upload das atualizações

}

