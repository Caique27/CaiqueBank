import express from "express"
import ContaController from "../controllers/contasController.js"
const router = express.Router()
router
.get("/contas",ContaController.listarContas)
.get("/contas/:id",ContaController.listarContaPorId)
.post("/contas",ContaController.cadastrarConta)
.put("/contas/:id",ContaController.atualizarConta)
.delete("/contas/:id",ContaController.excluirConta)


export default router