function area(largura, altura) {
    const area = largura + altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 2, 4, 6, 8))
console.log(area(20, 20))