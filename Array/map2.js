const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

// Retornar um array apenas com os preços

const parsed = json => JSON.parse(json)
const apenasPreco = item => item.preco

const precos = carrinho.map(parsed).map(apenasPreco)

console.log(precos)