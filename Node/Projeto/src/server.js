const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const db = require("./bancoDados")
 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/produtos", (req, res) => {
    res.send(db.getProdutos())
})

app.get("/produtos/:id", (req, res, next) => {
    res.send(db.getOProduto(req.params.id))
})

app.put("/produtos/:id", (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,

    })
    res.send(produto) // JSON
})

app.delete("/produtos/:id", (req, res, next) => {
    const produto = db.excluirOProduto(req.params.id)
    
    res.send(produto) // JSON
})

app.post("/produtos", (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,

    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})