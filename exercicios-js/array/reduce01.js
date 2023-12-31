const alunos = [
    { nome: 'Maria', nota: 8, bolsista: true },
    { nome: 'Carlos', nota: 4, bolsista: false },
    { nome: 'José', nota: 5.5, bolsista: false },
    { nome: 'Lucia', nota: 9.6, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce((acc, atual) => {
    console.log(acc, atual)
    return acc + atual
})

console.log(resultado)