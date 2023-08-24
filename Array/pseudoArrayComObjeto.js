const quaseArraysCalça = { 0: 'rafael', 1:'bia', 2:'thomas' }
Object.defineProperty(quaseArraysCalça, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})
console.log(quaseArraysCalça[0])

const meuArray = ['Rafael', 'Bia', 'Alfonso']
console.log(quaseArraysCalça.toString(), meuArray)