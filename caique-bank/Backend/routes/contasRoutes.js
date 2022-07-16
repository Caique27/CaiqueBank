import express from "express"
import ContaController from "../controllers/contasController.js"
import TempoController from "../controllers/TempoController.js"
const router = express.Router()
router
.get("/contas",ContaController.listarContas)
.get("/contas/:id",ContaController.listarContaPorId)
.get("/tempo",TempoController.dataAtual)
.post("/contas",ContaController.cadastrarConta)
.put("/contas/:id",ContaController.atualizarConta)
.delete("/contas/:id",ContaController.excluirConta)


export default router