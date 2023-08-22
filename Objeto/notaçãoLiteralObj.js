const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // <-- Costumava ser necessário
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAtrb = 'Nota'
const valorAtrb = 7.00

const obj3 = {}

obj3[nomeAtrb] = valorAtrb
console.log(obj3)

const obj4 = { [nomeAtrb]: valorAtrb}
console.log(obj4)

const obj5 = { 
    funcao01: function() {
        // ...
    },
    funcao02() {
        // ...
    },
}

console.log(obj5)