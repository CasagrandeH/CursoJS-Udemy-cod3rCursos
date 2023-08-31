let obj = {
    nome: "Gustavo",
    idade: 21,
    genero: "M"
}

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return "A função tag basicamente separou a 'raw string' da 'template string'!"
} // mucho lokito
console.log( tag `O ${obj.nome} tem ${obj.idade} anos de idade!`) 

// bienbien lokito
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2).replace('.',',')}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)