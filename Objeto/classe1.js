class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    } // '...' concatenou tudo em um array

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado.toLocaleString('pt-br', {style: 'currency', currency: 'eur'})
        /* return valorConsolidado.toLocaleString('pt-br', {style: 'currency', currency: 'brl'}) // REAL!
        return valorConsolidado.toLocaleString('pt-br', {style: 'currency', currency: 'usd'}) // DOLAR! */
    }
}

const salario = new Lancamento('Salario', 21000)
const contaDeLuz= new Lancamento('ContaLuz', -550)

const contas = new CicloFinanceiro(6, 2008)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())