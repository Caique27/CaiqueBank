import mongoose from "mongoose"
mongoose.connect("mongodb+srv://Caique27:caique27@cluster0.me8ki.mongodb.net/CaiqueBank")
let db = mongoose.connection

export default db