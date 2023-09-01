setTimeout(() => {
    console.log("CHamando callback...")

    setTimeout(() => {
        console.log("Chamando callback...")
    }, 2000);
    
}, 2000)

function esperarPor(tempo=2) {
    return new Promise( resolve => {
        setTimeout(() => {
            console.log("Executando Promise...")
            resolve('Swoosh...')
        }, tempo * 1000)
    })
}

esperarPor(2)
    .then(() => esperarPor(3))
    .then(texto => console.log(texto))
