const fs = require('fs')
const path = require('path')

function lerArquivo(file) {
    const caminho = path.join(__dirname, file)

    return new Promise( (resolve, reject) => { 

        fs.readFile(caminho, "utf-8", (err, data) => {
            resolve(data.toString())
    })})
}

lerArquivo("asyncANDawait.js")
    .then(file => file.split('\n'))
    .then(lines => lines.length)
    .then(console.log)