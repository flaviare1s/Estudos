// function declaration:
function soma1(x, y) {
    return x + y
}

// function expression:
const soma2 = function (x, y) {
    return x + y
}

// named function expression:
const soma3 = function soma3(x, y) {
    return x + y
}

// arrow function:
const soma4 = (x, y) => x + y


console.log(soma1(3, 4))
console.log(soma2(3, 5))
console.log(soma3(3, 6))
console.log(soma4(3, 7))