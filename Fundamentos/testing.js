let a = 3

global.b = 123 // no node.js o 'global' equivale a 'window' no DOM de browser
this.c = 456
this.d = false
this.e = 'Opium'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

module.exports = { f: 456, g: false, h: 'Opium' }
console.log(module.exports)

// criando variavel maluka: sem var, let ou const.
abc = 123 // equivale a global.abc = 123
console.log(global.abc)