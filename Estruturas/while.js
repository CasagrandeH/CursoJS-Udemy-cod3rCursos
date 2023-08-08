function getRandInt(min, max) {
    const randInt = Math.random() * (max - min) + min
    return Number(Math.floor(randInt))
}

do {
    option = getRandInt(-1, 10)
    console.log(`Gerou o numero ${option}!`)
} while (option != -1)
