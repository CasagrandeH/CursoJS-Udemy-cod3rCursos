console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bianco', 'Ana Paulo', 'Astolfo')
console.log(aprovados)

aprovados = ['Bianco', 'Ana Paulo', 'Astolfo']
console.log(aprovados)

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Jalin'
aprovados.push('Labia')
delete aprovados[1] // indice 1 vira undefined, entao elemento 2 continua sendo o mesmo
console.log(aprovados.length)

aprovados[9] = 'Mamei'
console.log(aprovados.length)
aprovados.sort()
console.log(aprovados)

aprovados = ['Bianco', 'Ana Paulo', 'Astolfo']
aprovados.splice(0, 1)
console.log(aprovados)
aprovados.splice(0, 2)
console.log(aprovados)
aprovados = ['Bianco', 'Ana Paulo', 'Astolfo']
aprovados.splice(1, 3, 'lol', 'lmao')
console.log(aprovados)