const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')

const chineses = funcionario => funcionario.pais === "China"
const chinesa = chines => chines.genero === "F"
const piorPaga = (menor, atual) => menor.salario < atual.salario ? menor : atual
const melhorPaga = (menor, atual) => menor.salario > atual.salario ? menor : atual

axios.get(url).then(response => {
    const funcionarios = response.data
    
    // Mulher chinesa com MENOR salario?:
    const chinesaMalPaga = funcionarios
    .filter(chineses)
    .filter(chinesa)
    .reduce(piorPaga)

    console.log(chinesaMalPaga)

    // Mulher chinesa com MAIOR salario?:
    const chinesaBemPaga = funcionarios
    .filter(chineses)
    .filter(chinesa)
    .reduce(melhorPaga)

    console.log(chinesaBemPaga)
})