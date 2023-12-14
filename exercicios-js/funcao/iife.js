// Função Auto Invocada (serve para fugir do escopo global)
// IIFE = Immediately Invoked Function Exoression:

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

