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
            res.status(500).send({message: `${err.message} - falha ao criar conta.`})
          } else {
            res.status(201).send(conta.toJSON())
          }
        })
      }

      static atualizarConta = (req,res)=>{
        const id = req.params.id
      contas.findByIdAndUpdate(id,{$set:req.body},(err)=>{
        if(!err){
          res.status(200).send({message:"Conta atualizada com sucesso"})
        }else{
          res.status(500).send({message:err.message})
        }
      })
      }

      static excluirConta = (req,res)=>{
        
          const id = req.params.id
          contas.findByIdAndDelete(id,(err)=>{
            if(!err){
              res.status(200).send({message:"Conta removida com sucesso"})
            }else{
              res.status(500).send({message:err.message})
            }
            
          })
        
      }

}

export default ContaController