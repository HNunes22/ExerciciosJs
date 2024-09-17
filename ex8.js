// REMOVER DUPLICATAS EM UM ARRAY 

// Função de remoção

function removerDuplicata (numbers) {
    let remover = new Set(numbers) // Criar um Set que automaticamente removera a duplicata
    let reverter = [...remover] // Irá voltar o Array
    let ordem = reverter.sort((a,b) => a - b) // Ordenar por crescente
    return ordem // Mostrar valor novo
}

console.log(removerDuplicata([2, 3, 4, 4, 5, 8, 9, 10, 11, 1])) //  Resposta: [1, 2, 3, 4, 5, 8, 9, 10, 11] 