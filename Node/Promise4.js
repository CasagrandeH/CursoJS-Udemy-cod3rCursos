function gerarNumeros(min, max, tempo) {
    const lodash = require("lodash")
    
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(lodash.random(min, max))
        }, tempo * 1000);
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeros(1, 60, 1),
        gerarNumeros(1, 6, 2),
        gerarNumeros(10, 6, 4),
        gerarNumeros(100, 6, 1),
        gerarNumeros(100, 600, 0.5),
        gerarNumeros(1000, 6000, 3)
    ])
}

gerarVariosNumeros()
    .then(console.log)