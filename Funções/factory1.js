// Factory simples // Tem o objetivo de fabricar um objeto
function criarPessoa(n="Ana", sn="Lice") {
    return {
        nome: `${n}`,
        sobrenome: `${sn}`
    }
}

console.log(criarPessoa())
console.log(criarPessoa('Gustavo', 'Casagrande'))

function criarProduto(n="pp", p=22) {
    return {
        nome: `${n}`,
        preço: p,
        desconto: 0.1,
    }

}

const plush = criarProduto('Shark Boy Plushie', 280)
console.log(criarProduto())
console.log(plush)
plush["descontado"] = plush["preço"] - (plush["desconto"] * plush["preço"])
console.log(plush)