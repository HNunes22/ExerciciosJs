// VERIFICAR ANAGRAMA


// Função de verificação

function verificarAnagrama(string1, string2) { //

    // Deixar a string toda minuscula e sem espaços
    let array = string1.toLowerCase().replace(/\s+/g, ''); 
    let array2 = string2.toLowerCase().replace(/\s+/g, ''); 
    
    // Fazer a string ter letras separadas
    let split = array.split('');
    let split2 = array2.split('');
    
    // Ordenar as letras 
    let ordenar = split.sort();
    let ordernar2 = split2.sort();

    // Tirar as letras de um array
    let transform = ordenar.join('');
    let transform2 = ordernar2.join('');


    // Retornar resultado dependendo das letras
    return transform == transform2

}

// Chamar a função
console.log(verificarAnagrama("Listen", "Silent")); // Resultado: True
console.log(verificarAnagrama("Hello", "World")); // Resultado: False