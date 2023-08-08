function soBoa(nota) {
    let ceil = Math.ceil(nota) - nota
    let floor = nota - Math.floor(nota)

    if ( ceil === floor) {

    } else if ( ceil > floor ) {
        nota -= floor
    } else {
        nota += ceil
    }
    
    if (nota >= 7) {
        console.log("Aprovado com", nota.toFixed(1))
    } else {
        console.log("Reprovado com", nota.toFixed(1))
    }
}

soBoa(4.5)
soBoa(8.)