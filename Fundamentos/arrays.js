const valores = [3.14, 4.19, '0.0', 22]

console.log(valores[0], Number(valores[2]).toFixed(1), parseFloat(valores[2]))//'?'

console.log(valores[4])

valores[4] = 'NYOHOHOMHOM'

console.log(valores[4])

valores[20] = 20.2

console.log(valores)

console.log(valores.length)
console.log(valores.push('nah'))
console.log(valores.concat('?'))
console.log(valores.length)
console.log(typeof valores.join(' '))
console.log(valores.join(' '))
console.log(valores.join(' ').concat('?'))
