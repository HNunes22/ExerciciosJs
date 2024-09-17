// MOSTRAR VALORES IGUAIS DENTRO DE DOIS ARRAYS

    // Função de mostrar o elemento igual
    
function encontrarElementosComuns(array1, array2) {
    
    let newSet = new Set(array1); // Criar um Set para organizar melhor o Array
    let resultados = []; // Guardará o elemento que é igual

    array2.forEach(element => { // Aqui ele passará por cada valor/elemento do Array2 e vai comparar com o Set que guardou o Array1
        if(newSet.has(element)) { // Se no newSet tiver um numero igual a o array2 faça isso :
        resultados.push(element) // Guarde esse elemento igual no novo Array
    }; 
});
    return resultados // Retorna o resultado
}

// Chamar função

console.log(encontrarElementosComuns([1, 2, 3], [3, 4, 5])); // [3]
console.log(encontrarElementosComuns([10, 20, 30], [20, 30, 40])); // [20, 30]
