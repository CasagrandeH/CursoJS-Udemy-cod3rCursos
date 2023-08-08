function tratarErroLançar(erro) {
    throw new Error('EROOOOOU!')
}

function printUp(obj) {
    try {
    console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroLançar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Andreilson' }
printUp(obj)