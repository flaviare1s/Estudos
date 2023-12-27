Array.prototype.filter2 = function(callback) {
    const newArray = []
    for( let i = 0; i < this.length; i++ ) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    { nome: 'Copo de Plástico', preco: 4, fragil: false}
] 

const frageis = produto => produto.fragil

const caros = produto => produto.preco > 1000

const carosEFrageis = produtos.filter2(frageis).filter2(caros)

console.log(carosEFrageis)