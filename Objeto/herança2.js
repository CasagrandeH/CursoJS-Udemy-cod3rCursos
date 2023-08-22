Object.prototype.atrr0 = '0' // Não faça isso em casa pequeno gafanhoto!

const avo = { atrr1: 'A' }
const pai = { __proto__: avo, atrr2: 'B', atrr3: '3'}
const filho = { __proto__: pai, atrr3: 'C'}

console.log(filho.atrr0, filho.atrr1, filho.atrr2, filho.atrr3)

const carro = {
    velATUAL: 0,
    velMAX: 200,
    acelerarMais(delta) {
        if (this.velATUAL + delta <= this.velMAX) {
            this.velATUAL += delta
        } else {
            this.velATUAL = this.velMAX
        }
    },
    status() {
        return `${this.velATUAL}Km/h de ${this.velMAX}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMAX: 324, // "shadowing", overshadows the 'carro.velMAX'
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

const volvo = {
    modelo: 'V40',
    velMAX: 222,
    __proto__: ferrari,
}

Object.setPrototypeOf(ferrari, carro)

console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
volvo.acelerarMais(31)
ferrari.acelerarMais(122)
ferrari.acelerarMais(200)
console.log(ferrari.status())
console.log(volvo.status())