const anonimo = process.argv.indexOf('-a') !== -1


if (anonimo) {
    process.stdout.write("Fala anon! \n")
    process.exit()
} else {
    process.stdout.write("Informe o seu nome: ")
    process.stdin.on("data", data => {
        const nome = data.toString().trim()

        process.stdout.write(`fala ${nome}!!`)
        process.exit()
    })
}
