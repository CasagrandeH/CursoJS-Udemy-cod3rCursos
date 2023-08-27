function bhaskara(a=3, b=-5, c=12) {
    const delta = (b ** 2) - (4 * a * c)

    let mais = (-b + Math.sqrt(delta)) / (2 * a)
    
    let menos = (-b - Math.sqrt(delta)) / (2 * a)

    console.log(`Valor de delta: ${delta}`)

    if (delta < 0) {
        console.log('Delta é negativo. Portanto essa equação não possui raizes.')
    } else {
        let raizes = {mais: mais, menos: menos}
        console.log(raizes)
    }

}
bhaskara()
console.log('')
bhaskara(2, 4, -6)
console.log('')
bhaskara(1, 3, 2)