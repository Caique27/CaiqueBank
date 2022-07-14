import mongoose from "mongoose";
const contaSchema = new mongoose.Schema({
    id:{type:String},
    _numeroConta:{type:Number,required:true},
    _nomeCliente:{type:String,required:true},
    genero:{type:String},
    _senha:{type:Number,required:true},
    _saldo:{type:Number,required:true},
    agencia:{type:String,required:true},
    _transacoes:{type:Array,required:true},

}  
)
const contas = mongoose.model("Contas",contaSchema)
export default contas;