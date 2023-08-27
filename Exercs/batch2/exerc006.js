const inverso = value => {
    if (typeof value === "number") {
        return -value
    } else if (typeof value === "boolean") {
        return !value
    }
    return value
}
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(1))
console.log(inverso(9))
console.log(inverso(-10))
console.log(inverso("tag"))
console.log(inverso(4.0))