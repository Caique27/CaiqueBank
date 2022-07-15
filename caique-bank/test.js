import {busca} from"./src/axios/api.js"
import {adicionar} from"./src/axios/api.js"
import {atualizar} from"./src/axios/api.js"
import {excluir} from"./src/axios/api.js"

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
async function testDelete(id){
  await excluir(`/contas/${id}`)
}

async function testUpdate(id,alteracoesConta){
  await atualizar(`/contas/${id}`,alteracoesConta)
}
const id = "62d07157404842c2c610eac9"
const alteracoes = {
_numeroConta : '6789',
_saldo:6700,
_nomeCliente:"Marcos"

}
testUpdate(id,alteracoes)