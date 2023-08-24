Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['renan', 'arnaldo', 'pablo', 'amanda', 'ombofeto']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
})

console.log('')

aprovados.forEach2(nome => console.log(`${nome}`))
console.log('')

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach2(exibirAprovados)