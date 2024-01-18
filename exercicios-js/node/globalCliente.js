require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // O nome não vai mudar, pois em global.js o objeto está "freeze"
console.log(MinhaApp.nome)