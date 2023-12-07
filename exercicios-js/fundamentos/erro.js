function tratarErroELançar(erro) {
   // throw new Error('...')
   // throw 10
   // throw true
   // throw 'mensagem'
   throw { msg: 'Erro' }
}


function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELançar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}

imprimirNomeGritando()