const pilotos = ['vettel', 'raikkonen', 'massa']
console.log(pilotos)
pilotos.pop() // massa se estoro contra a parede!
console.log(pilotos)

pilotos.push('verstappen')
console.log(pilotos)

pilotos.shift() // remove da primeira posição, então quem se estoro agora é o vetel
console.log(pilotos)

pilotos.unshift('hamilton') // É igual ao .push() mas envia o valor pro começo em vez do final
console.log(pilotos)

// splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // massa se espatifo denovo!
console.log(pilotos)

// usando splice pra gerar um novo array
const naoAmassados = pilotos.splice(2)
console.log(naoAmassados)

const naoTromcados = pilotos.splice(1, 4)
console.log(naoTromcados)
