// Configurações 
const port = process.env.port || 3000; 

import express from "express"
import path from "path"

const app = express();
const __dirname = path.resolve(path.dirname(''))

// Torna publico os arquivos para o cliente
app.use(express.static(path.join(__dirname, "Campo")))

// Get Requests
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Campo/HTML/index.html"))
})

// Inicia Servidor
app.listen(port, () => {
    console.log("Servidor Iniciado em", port);
})