const jooj = [10, 20, 20, 5, 1, 30]

function bestMatch(jogos=[]) {
    let best = jogos[0]
    let worst = jogos[0]
    let count = 0
    for (i in jogos) {
        if (jogos[i] > best) {
            best = jogos[i]
            count++
        }
        if (worst > jogos[i]) {
            worst = jogos[i]
        }

    }
    console.log([count, jogos.indexOf(worst) + 1])
}

bestMatch(jooj)