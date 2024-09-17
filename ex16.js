// CONTAR PALAVRAS

// Função de contagem

function contarPalavras(str) {
    str = str.trim().replace(/\s+/g, ' '); // Remover espaços e espaços extras da frase

    let palavra = str.split(' '); // Separar a frase me palavras
    
    if(palavra[0] === '') { // Se a palavra for completamente vazia, retorna 0, ou seja, não tem palavras
        return 0;
    }

    return splitar.length // Retornar a quantidade de palavras que existem na frase usada
}

// Chamar função

console.log(contarPalavras("Olá, como vai você?")); // 4
console.log(contarPalavras("Esta é uma frase de exemplo.")); // 6
