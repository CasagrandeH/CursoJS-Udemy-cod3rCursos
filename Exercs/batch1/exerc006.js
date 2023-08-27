function juroSimples(capital, taxaPor, meses) {
    let taxa = taxaPor / 100
    let juros = capital * taxa * meses
    let montante = capital + juros
    return 'R$' + montante.toFixed(2).toString().replace('.',',')
}

console.log(juroSimples(1200, 2, 15))
console.log(juroSimples(2400, 4, 6))

function juroComposto(capital, taxaPor, meses) {
    let taxa = 1 + taxaPor / 100
    let juros = (capital * (taxa ** meses)) - capital
    let montante = capital + juros
    return 'R$' + montante.toFixed(2).toString().replace('.',',')
}

console.log(juroComposto(5000, 1, 6))
console.log(juroComposto(5000, 1, 6))
