function getRandInt(min, max) {
    const randomInt = Math.random * (max - min) + min
    return Math.floor(randomInt)
}

let option = 0

while (option != -1) {
    option = getRandInt(-1, 10)
    console.log(`Gerou o numero ${option}!`)
}
