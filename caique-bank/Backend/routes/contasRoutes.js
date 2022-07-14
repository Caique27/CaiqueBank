import express from "express"
import ContaController from "../controllers/contasController.js"
const router = express.Router()
router
.get("/contas",ContaController.listarContas)
.post("/contas",ContaController.cadastrarConta)

export default router