// ENCONTRAR ELEMENTO FALTANTE

// Função de matemática

function elementoFaltante(arr) {

    let menor = Math.min(...arr); // Pegar o menor numero do array
    let maior = Math.max(...arr); // Pegar o maior numero do array

    // Operações matemáticas

    let n = maior - menor + 1; // N = 5 - 1 + 1
    let soma = (menor + maior) * n / 2; // Soma Esperada = (1 + 5) * 5 / 2 = 15

    let real = arr.reduce((position, currentValue) => // Soma Real = Aqui ele irá somar todos os valores da array 
        position + currentValue, 0);


    
    return soma - real; // Aqui retorna o numero que falta na array
}

// Chamar função
console.log(elementoFaltante([1, 2, 4, 5])); // 3
