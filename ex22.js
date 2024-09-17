// INTERCALAR DOIS ARRAYS

// Função de concatenação

function intercalarArrays(arr1, arr2) {
    let arrayConcat = arr1.concat(arr2); // Concatenar arrays (unir)
    arrayConcat.sort((a,b) => a - b); // Ordem crescente
    return arrayConcat; // Retornar a função
}

// Chamar a função
console.log(intercalarArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
