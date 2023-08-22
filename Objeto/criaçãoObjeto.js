// com notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, '||', typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.preco = preco
    this.getPrecoComDesconto = () => {
        if (desc >= 1) {
            return (preco - (preco * (desc / 100))).toFixed(2)
        } else {
            return (preco - (preco * desc)).toFixed(2)
        }
    }
}

const p1 = new Produto('Caneta Bic', 2.99, 0.15)
const p2 = new Produto('Notebook', 5500, 15)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase / 30) * (30 - faltas)).toFixed(2)
        }
    }
}

const fun1 = criarFuncionario('Ana', 7000, 11)
const fun2 = criarFuncionario('Paoloa', 7000, 2)
console.log(fun1.getSalario(), fun2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Isa'
console.log(filha)
filha.idade = 11
console.log(filha)

// Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)