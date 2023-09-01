// Com promise
const http = require('http')

const getTurma = (letra="A") => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((fullfiled, rejected) => {
        http.get(url, res => {
            let result = ''
    
            res.on('data', data => {
                result += data
            })
            res.on('end', () => {
                try {
                    fullfiled(JSON.parse(result))
                } catch(e) {
                    rejected(e)
                }
            })
        })
    })
    
}

/* let nomes = []
getTurma("A").then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma("B").then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma("C").then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nome => console.log(nome))

getTurma("D").catch(err => console.log(`ERRO! =>\n ${err.message}`))