const alunos = [
    { nome: 'Maria', nota: 8, bolsista: true },
    { nome: 'Carlos', nota: 4, bolsista: true },
    { nome: 'José', nota: 5.5, bolsista: false },
    { nome: 'Lucia', nota: 9.6, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const resultado1 = alunos.map(aluno => aluno.bolsista).reduce((todosBolsistas))

console.log(resultado1)


// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
const resultado2 = alunos.map(aluno => aluno.bolsista).reduce((algumBolsista))

console.log(resultado2)