const mês = num => {
    if (0 > num > 12) {
        return "Mês invalido"
    }
    const meses = {
        1: "Jâneiro",
        2: "Fevereiro",
        3: "Março",
        4: "Abril",
        5: "Maio",
        6: "Junho",
        7: "Julho",
        8: "Agosto",
        9: "Setembro",
        10: "Outubro",
        11: "Novembro",
        12: "Dezembro",
    }
    return meses[num]
}
console.log(mês(1))
console.log(mês(3))
console.log(mês(12))
console.log(mês(7))