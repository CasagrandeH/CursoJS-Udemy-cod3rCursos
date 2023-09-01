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

const obterAlunos = async () => {
    const ta = await getTurma("A")
    const tb = await getTurma("B")
    const tc = await getTurma("C")
    return [].concat(ta, tb, tc)
}
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))