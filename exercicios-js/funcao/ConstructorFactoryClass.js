// Classe:
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    
    falar() {
        console.log(`Meu nome é ${this.nome}!`)
    }
}

const p1 = new Pessoa('João')
p1.falar()



//Factory Function:
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}!`)
    }
}

const p2 = criarPessoa('Maria')
p2.falar()



// Constructor Function:
function Person(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${nome}!`)
    }
}

const p3 = new Person('José')
p3.falar()