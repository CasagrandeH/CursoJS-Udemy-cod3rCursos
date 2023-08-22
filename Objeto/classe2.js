class Avô {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avô {
    constructor(sobrenome, profissão = 'Professor') {
        super(sobrenome) // Ele joga o param sobrenome pra dentro da classe Avô!
        this.profissão = profissão
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)