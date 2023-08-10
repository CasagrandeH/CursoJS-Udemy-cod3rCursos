// Função em JS é First-Class Object (Citizens)
// Hig-Order function

// Criar de uma forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () { }

// Armazenar em um Array
const fun3 = [function(a, b) { return a + b }, fun1, fun2]
console.log(fun3[0](2, 3))

// Armazenar em um atributo de objeto 
const obj = { }
obj.discount = function (price, per) { return console.log(`De ${price}, o preço caiu para ${price - price * (per / 100)}!`)}
obj.discount(2000, 5)

// Passar função como parametro 
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)

const addFive = soma(2, 3)
addFive(4)