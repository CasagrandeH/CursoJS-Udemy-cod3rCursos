function compras(trab1, trab2) {
    const sorvete = trab1 || trab2
    const tv50p = trab1 && trab2
    const tv32p = trab1 != trab2
    const saudavel = !sorvete

    return { sorvete, tv50p, tv32p, saudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // Este operador tem prioridade sobre o de cima, --num1 >> num1++, exec prim
console.log(num1)

console.log(++num1 === num2--) // basicamente: ++num1 === 2|===| num2-- === 2