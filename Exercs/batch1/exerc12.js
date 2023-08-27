function fatorial(num) {
    /* let fact = 1
    while (num >= 1) {
        fact *= num
        num--
    }
    return fact */
    if (num === 0) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(10))