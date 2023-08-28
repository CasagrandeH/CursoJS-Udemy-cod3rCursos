const moduloA = require("./moduloA")
const moduloB = require("./moduloB")

const getNum = range => {
    let num = []

    for (let i = 0; i <= range; i++) {
        if (i === range) {
            num.push(i)
        }
    }

    return num
}

const someFunc = moduloA.memoize(getNum)

console.log(moduloA.ola, moduloA.bemVindo, moduloA.ateLogo)
console.log(moduloB.bomdia)
console.log(moduloB.boanoite())


console.time()
console.log(someFunc(2000000))
console.timeEnd()

console.time()
console.log(someFunc(2000000))
console.timeEnd()
