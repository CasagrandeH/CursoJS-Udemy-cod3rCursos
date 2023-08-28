console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function thisLog() {
    console.log("Dentro de uma função...")
    console.log(this === global)
    console.log(this === module)
    console.log(this === module.exports)
    console.log(this === exports)
}

const arrowThis = () => {
    console.log("Dentro de uma arrow func...")
    console.log(this === global)
    console.log(this === module)
    console.log(this === module.exports)
    console.log(this === exports)
}
thisLog()
arrowThis()