function divsByTres(dividendo = 3) {
    let divConvert = parseInt(dividendo)
    console.log(divConvert)
    if (divConvert % 3 === 0 && divConvert > 0) {
        return true
    } else {
        return false
    }
}

console.log(divsByTres(9.5))
console.log(divsByTres(0.3))
console.log(divsByTres(1))
console.log(divsByTres(3.14))