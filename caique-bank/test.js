import {busca} from"./src/axios/api.js"
import {adicionar} from"./src/axios/api.js"

async function testeApi(){
    var info = await busca("/contas")
    console.log(info)
    }
async function testePost(){
    const conta = {
        "_numeroConta": null,
        "_nomeCliente": "Pedro",
        "genero": "Masculino",
        "_senha": "1234",
        "_saldo": 1004,
        "agencia": "0001",
        "_transacoes": [],
        
      }
    await adicionar("/contas",conta)
}
async function setNumeroConta() {
    
    var contas = await busca("/contas");
    var numeros = [];
    for (var conta in contas) {
      numeros.push(contas[conta]._numeroConta);
    }

    var num = Math.floor(Math.random() * 9999) + 1;

    if (numeros.includes(num) == false) {
      console.log(num);
    }


}
setNumeroConta()