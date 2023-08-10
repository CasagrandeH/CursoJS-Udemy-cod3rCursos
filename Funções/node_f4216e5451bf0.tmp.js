const pessoa = {
    saudacoes: 'Saudações!',
    falar() {
        console.log(this.saudacoes) // This nesse caso representa a variavel Pessoa
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigma: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // como resolver ^^
falarDePessoa()

function person() {
    this.idade = 0
    let self = this
    while ( self.idade < 100 ) {
        setInterval(function() {
        self.idade++ // this.idade++
        console.log(self.idade) // this.idade
    }/*.bind(this) */, 1000)
    }
    
}

new person