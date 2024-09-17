// CALCULAR FATORIAL //

// Variavel para resultado//

let result = 1;

// Função para calcular fatorial //

function calcularFatorial (number) {
    for (let i = 1; i <= number; i++) { // Equanto o i for menor que number, irá se repetir //
      result *= i // Multiplicar o resultado com o valor de i //
    }
    console.log(result);
}

calcularFatorial(5); // Chamar a função //