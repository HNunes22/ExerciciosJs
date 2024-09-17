// REMOVER VALORES FALSOS


// Função de remoção

function removerFalsos(arr) {
    
    let array = arr; // Guardar array
    let trueArray = []; // Guardar valores verdadeiros

    for(let i = 0; i < array.length; i++) { // Ira se repetir ate o valor de i seja o mesmo tanto do tamanho do array

        if(array[i] != false) { // Se o valor dentro do array não for igual a FALSE isso irá acontecer
            trueArray.push(array[i]) // Adiocione no trueArray o valor que é diferente de False
        } 
    
    } 

    return trueArray // Retorne o array verdadeiro
    
}

// Chamar função
console.log(removerFalsos([0, 1, false, 2, '', 3])); // [1, 2, 3]
