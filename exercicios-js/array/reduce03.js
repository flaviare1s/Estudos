Array.prototype.reduce2 = function(callback) {
    let acc = this[0]
    for( let i = 1; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }
    return acc
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const soma = numeros.reduce2((acc, num) => {
    return acc + num
},0)

console.log(soma)

