const fs = require("fs")
const path = require("path")

const caminho = path.join(__dirname, "arquivo.json")

// sincrono...

const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// assincrono...
fs.readFile(caminho, "utf-8", (err, conteudoAssincrono) => {

    const config = JSON.parse(conteudoAssincrono)
    console.log(`${config.db.host}:${config.db.port}`)
    
})

fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteudos da pasta...")
    console.log(arquivos)
})