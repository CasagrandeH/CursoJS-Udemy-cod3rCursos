function passaOuNah (nota) {
    let notaCorrigida = arredonda(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com ${notaCorrigida} de 100 pontos!`)
    } else {
        console.log(`Reprovado com ${notaCorrigida} de 100 pontos!`)
    }
}

function arredonda (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

passaOuNah(41)
passaOuNah(44)