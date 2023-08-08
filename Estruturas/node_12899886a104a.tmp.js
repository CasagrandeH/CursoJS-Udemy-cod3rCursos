function getRandInt(min, max) {
    const randInt = Math.random * (max - min) + min
    return Math.floor(randInt)
}

let option = 0

while (option != -1) {
    option = getRandInt(-1, 10)
    console.log(`Gerou o numero ${option}!`)
}
