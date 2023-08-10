let double = function (a) {
    return a * 2
}

double = (a) => {
    return a * 2
}

double = a => a * 2 // return ta implicito
console.log(double(Math.PI).toFixed(4))

let hello = function () {
    return 'Hello!'
}

hello = () => 'Hello!'
hello = _ => 'Hello!' // o underline é um parametro
console.log(hello())

/* function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 2000) // dentro de arrowfunc o 'this' não varia de acordo com quem chama a func
} 

new Pessoa */

function comparaComThis (param) {
    let compare = this === param
    let literal = String(param).slice(8, -1)
    console.log(`O --this-- se comparado com --${literal}-- retorna: `, compare)
    console.log(`Valor comparado -> ${param}: `)
}

comparaComThis(global)
console.log('')

const obj1 = { }
comparaComThis = comparaComThis.bind(obj1)
comparaComThis(global)
comparaComThis(obj1)
comparaComThis(module.exports)

let comparaThisComArrow = param => {
    let compare = this === param
    let literal = String(param).slice(8, -1)
    console.log(`O --this-- se comparado com --${literal}-- retorna: `, compare)
    console.log(`Valor comparado -> ${param}: `)
}
console.log('')
comparaThisComArrow(global)
comparaThisComArrow(obj1)
comparaThisComArrow(module.exports)

comparaThisComArrow = comparaThisComArrow.bind(obj1) // a arrow func é mais forte que o bind()

console.log('')
comparaThisComArrow(global)
comparaThisComArrow(obj1)
comparaThisComArrow(module.exports)