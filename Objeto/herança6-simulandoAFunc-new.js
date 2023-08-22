function aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Buenas VIndas!', 123)
const aula2 = new aula('Hasta la Vista!', 456)
console.log(aula1, aula2)

// simulando o 'new':
function novo(f, ...params) { // 'f' neste caso seria uma função, assim como '...'
    const obj = {} // definindo o objeto.
    obj.__proto__ = f.prototype // fazendo a função passada ser o pai.
    f.apply(obj, params) /* o operador '...' que significa 'spreading and resting' concatena todos parametros em um array. */
    return obj // objeto criado.
}

const aula3 = novo(aula, 'Testando...', 321)
console.log(aula3)