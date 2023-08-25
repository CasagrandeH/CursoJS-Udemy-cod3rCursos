const alunos = [
    {nome: 'Jaum', nota: 7.3, bolsista: false},
    {nome: 'Marina', nota: 9.5, bolsista: true},
    {nome: 'Alan', nota: 8.2, bolsista: false},
    {nome: 'Rebecca', nota: 8.7, bolsista: true},
]
const resultado = alunos.map(a => a.nota).reduce((sum, nota) => {
    console.log(`Acumulador [${sum}] || Nota atual [${nota}]`)
    return sum + nota
}, 0)
console.log(Math.floor(resultado))