const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    { nome: 'Copo de Plástico', preco: 4, fragil: false}
] 

const frageis = produto => produto.fragil === true

const caros = produto => produto.preco > 1000

const carosEFrageis = produtos.filter(frageis).filter(caros)

console.log(carosEFrageis)