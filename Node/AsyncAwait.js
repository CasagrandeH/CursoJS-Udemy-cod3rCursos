function espera(tempo = 1) {
    return new Promise(resolve => {

        setTimeout(() => {

            resolve()
        }, tempo * 1000);
    })
}

function retorna20() {
    return 20
}

async function executar() {
    let valor = await retorna20()

    await espera()
    console.log(`Async/Await ${valor++}...`)
    await espera()
    console.log(`Async/Await ${valor++}...`)
    await espera()
    console.log(`Async/Await ${valor++}...`)
    await espera()
    console.log(`Async/Await ${valor++}...`)
    await espera()
    console.log(`Async/Await ${valor++}...`)

    return valor + 3
    
}

async function executarReal() {
    let valor = await executar()

    return console.log(`Async/Await ${valor}...`)
}

executarReal()