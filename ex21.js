// ENCONTRAR SUBTRING MAIS LONGA SEM REPETIR CARACTERES

// Função de verificação

function substringMaisLonga(str) {
    let newSet = new Set(str); // Tirar letras repetidas
    let reverterSet = [...newSet]; // Reverter para array
    let reverterArray = reverterSet.join(''); // Reverter para string
    return reverterArray; // Retornar a função
}

// Chamar a função
console.log(substringMaisLonga("abcabcbb")); // "abc"
