console.log(soma(3, 4))// funciona antes da função ser declarada pois o codigo le funções primeiro.
// console.log(sub(3, 1)) // gera um erro! só funciona após a func declaration ser estabelecida

// funtion declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}