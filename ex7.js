// Encontrar o maior número em um Array //


// Função de achar o número //

function maiorNumero(numbers) { 
    
    // Variaveis //

    let array = numbers; // Guardar o Array 
    let ordernarNumeros = array.sort((a,b) => a - b) // Ordenar eles em ordem numérica (crescente)
    let ultimoNumero = ordernarNumeros.pop() // Pegar o ultimo número

    return ultimoNumero // Retornar o resultado
}


console.log(maiorNumero([1, 2, 3, 7, 9 , 5, 11, 21, 100, 6, 44, 12])); // Chamar função // // Resultado: 100 //