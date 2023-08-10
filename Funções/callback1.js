const fabricantes = ['Mercedes', 'BMW', 'Audi']

function print(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(print)
fabricantes.forEach(function (fabricante) {
    console.log(fabricante)
})

const notas = [6.8, 9.5, 4.5, 7.9, 10.0, 5.3]

// Sem Callback
function notasBaixas1(notas) {
    let notasBaixas = []
    for (i in notas) {
        if (notas[i] < 7) {
            notasBaixas.push(notas[i])
        }
    }
    return notasBaixas
}
console.log(notasBaixas1(notas))

// Com Callback
/* A função filter() vai percorrer os elementos do array e se ela retornar true 
ira adicionar o elemento atual a variavel criando um novo array sem interferir com
o original.*/
// basicamente, filter() usa um valor booleano pra filtrar os elementos do array.
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter( nota => nota < 7)

console.log(notasBaixas3)