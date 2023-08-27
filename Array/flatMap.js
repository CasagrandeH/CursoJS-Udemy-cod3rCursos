const escola = [{
    nome: 'turma 1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.2
    }, {
        nome: 'Ana',
        nota: 9.4
    }], 
}, {
    nome: 'turma 2',
    alunos: [{
        nome: 'rebecca',
        nota: 8.9
    }, {
        nome: 'roberto',
        nota: 7.3
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)