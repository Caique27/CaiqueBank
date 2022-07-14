import main from "./backend/main.js"

const port = process.env.PORT || 8877;


main.listen(port,()=>{
    console.log(`Servidor escutando na porta ${port}`)
})