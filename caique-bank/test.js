import {busca} from"./Backend/axios/api.js"
import {adicionar} from"./Backend/axios/api.js"

async function testeApi(){
    var info = await busca("/contas")
    console.log(info)
    }
async function testePost(){
    const conta = {
        "_numeroConta": 762,
        "_nomeCliente": "Enzo",
        "genero": "Masculino",
        "_senha": "123",
        "_saldo": 100,
        "agencia": "0001",
        "_transacoes": [],
        
      }
    await adicionar("/contas",conta)
}
   
    testeApi()