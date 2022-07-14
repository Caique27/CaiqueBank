import contas from "../models/Conta.js"

class ContaController{
    static listarContas = (req,res)=>{
        contas.find((err,contas)=>{
            res.status(200).json(contas)
        })
    }
    static cadastrarConta = (req, res) => {
        let conta = new contas(req.body);
    
        conta.save((err) => {
    
          if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
          } else {
            res.status(201).send(conta.toJSON())
          }
        })
      }
}

export default ContaController