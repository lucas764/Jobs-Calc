const express = require("express")
const server = express()
const routes = require("./routes")

//habilitar arquivos staticos e criando rodas baseadas na pasta public
server.use(express.static("public"))

server.use(routes)

server.listen(3000, () => console.log('rodando'))