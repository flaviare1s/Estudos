// EXERCÍCIO: Retornar, da lista, a mulher chinesa com o menor salário:

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data


    const mulherChinesa = funcionarios.filter(funcionario => funcionario.genero === 'F' && funcionario.pais === 'China')
   

    const menorSalario = mulherChinesa.reduce((mulherAtual, mulherSeguinte) => {
        return mulherAtual.salario < mulherSeguinte.salario? mulherAtual : mulherSeguinte 
    })
    console.log(menorSalario)
})

