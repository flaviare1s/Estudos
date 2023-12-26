const nums = [1, 2, 3, 4, 5]

const dobro = nums.map(num => num * 2)

console.log(dobro)

const soma10 = num => num + 10
const triplo = num => num * 3
const dinheiro = num => `R$ ${parseFloat(num).toFixed(2).replace('.', ',')}`

const resultado = nums.map(soma10).map(triplo).map(dinheiro)

console.log(resultado)

