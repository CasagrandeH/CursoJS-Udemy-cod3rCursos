function funcionarOuNao(valor, chanceErr) {
    return new Promise( (resolve, reject) => {
        if (Math.random() < chanceErr) {
            reject("Ocorreu um ERROR!")
        } else {
            resolve(`De boas! RECEBAS ${valor}`)
        }
    })
}

funcionarOuNao("Peça", 1)
    .then(console.log)
    .catch(console.log)
funcionarOuNao("Peça", .1)
    .then(console.log)
    .catch(console.log)
funcionarOuNao("Peça", .5)
    .then(console.log)
    .catch(console.log)
funcionarOuNao("Peça", 0)
    .then(console.log)
    .catch(console.log)