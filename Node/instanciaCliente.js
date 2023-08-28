const contadorA = require("./instanciaUnica")
const contadorB = require("./instanciaUnica")

const contadorC = require("./instanciaNova")()
const contadorD = require("./instanciaNova")()

contadorA.incr()
contadorA.incr()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.value, contadorD.value)