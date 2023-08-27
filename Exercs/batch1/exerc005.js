(function reais(value = 0.5) {
    let convert = String(value.toFixed(2)).replace('.',',')
    console.log(`R$${convert}`)
})()

function reais(value = 0.5) {
    let convert = String(value.toFixed(2)).replace('.',',')
    console.log(`R$${convert}`)
}
reais(0.1 + 0.2)