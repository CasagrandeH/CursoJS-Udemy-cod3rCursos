const tecnologias = new Map()
tecnologias.set("react", { framework: false })
tecnologias.set("angular", { framework: true })

console.log(tecnologias.react) // nao cola
console.log("usando 'get()' pro atributo 'react' =>", tecnologias.get('react'))
console.log(tecnologias.get('angular').framework)

const chavesDiferentonas = new Map([
    [function () { }, 'Função'],
    [{}, "Objeto"],
    [123, "Numero"],
    [[], "Array"]
])


console.log("Chaves Diferentonas!:")
chavesDiferentonas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesDiferentonas.has(123))
chavesDiferentonas.delete(123)
console.log(chavesDiferentonas.has(123))
console.log(chavesDiferentonas.size())