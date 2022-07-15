import main from "./backend/main.js"
import cors from "cors"



const port = process.env.PORT || 8877;

//main.use(cors())

main.listen(port,()=>{
    console.log(`Servidor escutando na porta ${port}`)
})