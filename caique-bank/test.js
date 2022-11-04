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
        "_numeroConta": 3464,
        "_nomeCliente": "Jonas",
        "genero": "Masculino",
        "_senha": "1234",
        "_saldo": 1400,
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
const id = "62d665ac0345e2a0e7d9b383"
const alteracoes = {
_numeroConta : '7589',
_saldo:6900,
_nomeCliente:"Jonas"

}
async function testeGetId(id){
var resposta = await busca(`/contas/${id}`)
console.log(resposta)
}

const dados=
{
 valor:500,
 idConta: '62d665ac0345e2a0e7d9b383'
}
//atualizar("/contas",dados)
//testUpdate(id,alteracoes)
atualizar("/deposito",dados)