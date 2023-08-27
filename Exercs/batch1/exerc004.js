function div(dividendo, divisor) {
    let result = dividendo / divisor
    let resto = dividendo % divisor
    return `O resultado é ${Math.floor(result)}, enquanto o resto é ${resto}`
}
console.log(div(11, 4))