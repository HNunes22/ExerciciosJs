// ENCONTRAR O MÁXIMO DIVISOR E COMUM (MDC)

// Função de verificação

function mdc(a, b) {
    while(b !== 0) { // Enquanto o valor de B não for igual a 0

        let temporario = b; // A variavel TEMPORARIO recebe o valor atual de B, no inicio é 18
        b = a % b; // O B vai receber o resto da divisão do valor A dividido pelo valor atual B // No inicio 48 / 18 tem resto 12
        a = temporario; // o A recebe o valor antigo do B
    }

    return a; // E aqui mora o resultado do MDC 
}
console.log(mdc(48, 18)); // 6
