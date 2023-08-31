//const nomes = ["Gustavo", "Guilherme", "Natalia", "Natielly", "Guilherme"]
// const nomesSet = new Set(nomes)
const nomes1 = ["Gustavo", "Guilherme", "Natalia", "Natielly", "Guilherme"]
const nomes2 = ["Casagrande", "Moraes", "Natalia", "Mari", "Guilherme"]

console.log("Listas =>\n", nomes1, nomes2)

const removeDuplicates = (setA, setB) => {
    const result = new Set(setA)
    for (const item of setB) {
        result.add(item)
    }
    return result
}

console.log("Remover réplicas =>\n", removeDuplicates(nomes1, nomes2))

const existsInBoth = (setA, setB) => {
    const result = new Set()
    for (const item of setA) {
        if (setB.indexOf(item) != -1) {
            result.add(item)
        }
    }
    return result
}

console.log("Retornar apenas elementos duplicados =>\n", existsInBoth(nomes1, nomes2))

const diference = (setA, setB) => {
    const result = new Set(setA) 
    for (const item of setB) {
        result.delete(item)
    }
    return result
}

console.log("Mostra items unicos de cada lista =>\n", diference(nomes1, nomes2))