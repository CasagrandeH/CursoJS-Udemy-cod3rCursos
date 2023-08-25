const alunos = [
    {nome: 'Jaum', nota: 7.3, bolsista: false},
    {nome: 'Marina', nota: 9.5, bolsista: true},
    {nome: 'Alan', nota: 8.2, bolsista: false},
    {nome: 'Rebecca', nota: 8.7, bolsista: true},
]

const bolsas = alunos.map(a => a.bolsista).reduce((s, a) => {
    if (a) {
        return s + 1
    } else {
        return s
    }
})
const tudoBolsista = () => bolsas === alunos.length
const algumBolsista = () => bolsas > 0

console.log(tudoBolsista(), algumBolsista())