

function gerarNumeros(min, max) {
    const lodash = require("lodash")
    
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        resolve(lodash.random(min, max))
    })
}

gerarNumeros(20, 1)
    .then(num => num * 10)
    .then(console.log)
