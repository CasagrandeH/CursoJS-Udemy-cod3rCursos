function aumento(salario, plan) {
    let plano = String(plan).toUpperCase()
    switch (plano) {
        case 'A':
            console.log(`Plano A: ${salario} + 10% --> ${salario + (salario * (10/100))}`)
            break
        case 'B':
            console.log(`Plano B: ${salario} + 15% --> ${salario + (salario * (15/100))}`)
            break
        case 'C':
            console.log(`Plano C: ${salario} + 20% --> ${salario + (salario * (20/100))}`)
            break
        default:
            console.log(`O plano ${plano} não existe, selecione entre A, B e C`)
        
    }
}
aumento(2000, 'A')

aumento(2000, 'b')

aumento(2000, 'c')

aumento(2000, 'D')