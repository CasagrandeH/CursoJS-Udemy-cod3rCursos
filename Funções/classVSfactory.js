class classPessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new classPessoa('Gustavo')
p1.falar()

const factoryPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = factoryPessoa('Guilherme')
p2.falar()

// Função construtora
function lePessoa(nome) {
    this.nome = nome
    this.falar =  function() {
        console.log(`Meu nome é ${this.nome}`)
    }
} // Feito assim comparado ao anterior, a vantagem é que você mantem acesso a 
// variavel 'nome' pois você colocou ela no 'this'. Há casos em que isso é 
// desvantajoso.

const p3 = new lePessoa('Natalia')
p3.falar()