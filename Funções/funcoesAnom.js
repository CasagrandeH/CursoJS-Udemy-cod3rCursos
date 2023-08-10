const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operador = soma) {
    console.log(operador(a, b))
}

imprimirResultado(1, 2)
imprimirResultado(1, 3, soma)
imprimirResultado(1, 2, function (x, y) {
    return x + y
})
imprimirResultado(2, 4, (x, y) => x * y)
imprimirResultado(4, 2, (x, y) => x / y)
/* Esta função aceita um operador e então calcula de acordo com a nova função */