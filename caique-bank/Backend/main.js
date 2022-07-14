import express from "express"
import db from "./config/dbConnect.js"
import contas from "./models/Conta.js"
import routes from "./routes/index.js"

db.on("error",console.log.bind(console,"Erro de conexão com o banco"))
db.once("open",()=>{
    console.log("Conexão com o banco feita com sucesso")
})

const main = express()
main.use(express.json())

routes(main)




export default main;