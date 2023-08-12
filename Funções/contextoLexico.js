const valor = 'Global'

function myFunction() {
    console.log(`A função pegou o valor: ${valor}`)
}

function exec() {
    const valor = 'Local'
    myFunction()
}


myFunction(), exec() // =VV=
// a função carrega com si o local em que ela foi definida, então ela procura naquele escopo léxico =VV=