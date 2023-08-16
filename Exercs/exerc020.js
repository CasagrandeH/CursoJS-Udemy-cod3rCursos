const cedulas = (valor) => {
    let resta = valor
    let cedulasFim = []

    let cem = 0
    let cinq = 0
    let dez = 0
    let cinco = 0
    let um = 0

    while (resta > 0) {
        if (resta >= 100) {
            resta -= 100
            cem++ 
        } else if (resta >= 50) {
            resta -= 50
            cinq++
        } else if (resta >= 10) {
            resta -= 10
            dez++
        } else if (resta >= 5) {
            resta -= 5
            cinco++
        } else if (resta >= 1) {
            resta -= 1
            um++
        } else {
            return 'ERRO'
        }

        

    }
    cedulasFim.push(cem, cinq, dez, cinco, um)
}

console.log(cedulas(87))