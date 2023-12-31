// Estrategia 1 para gerar parametros padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return  a + b + c
}
console.log(soma1(), soma1(3), soma1(5, 3, 1), soma1(0, 0, 0))

// Estrategias 2, 3, e 4 para gerar parametros padrões
function soma2 (a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // <<< Caso a versao moderna nao esteja disponivel usar esta!
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(5, 3, 1), soma2(0, 0, 0))

// Estrategia padrão do ECMAscript 2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(5, 3, 1), soma3(0, 0, 0))
