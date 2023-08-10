function sum() {
    let sum = 0
    for (a in arguments) {
        sum += arguments[a]
    }
    return sum
}
console.log(sum(2,3,4,5,6))
console.log(sum(2))
console.log(sum(2, 2, 3))
console.log(sum(2.98, 4.5, 4,90))