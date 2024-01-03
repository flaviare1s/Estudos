const escola = [
    {
        nome: 'Turma M1',
        alunos: [
            {
                nome: 'Ana',
                nota: 8
            },
            {
                nome: 'Gustavo',
                nota: 5
            }
        ]
    },
    {
        nome: 'Turma M2',
        alunos: [
            {
                nome: 'Bia',
                nota: 10
            },
            {
                nome: 'Maria',
                nota: 8
            }
        ]
    },
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)

console.log(notas1)

console.log([].concat( [ 8, 5 ], [ 10, 8 ] )) // Concat do resultado de notas1


// Criando a função flatMap conseguimos esse mesmo resultado:
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}


const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)  