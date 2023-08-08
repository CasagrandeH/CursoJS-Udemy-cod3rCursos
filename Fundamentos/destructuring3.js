function rand({min = 0, max = 1000}) {
    const rval = Math.random()
    console.log(rval, '|', rval * (max - min), '|', rval * (max - min) + min)
    const random = rval * (max - min) + min
    return Math.floor(random)
}

const obj = { min: 650, max: 1000 }
console.log(`O valor gerado foi ${rand(obj)}!`)