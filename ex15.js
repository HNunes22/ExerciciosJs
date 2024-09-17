// CALCULAR MÉDIA


// Função de calculo


function calcularMedia(array) {

    let quantidade = 0; // Ter a quantidade de numeros dentro do Array

    let array1 = array; // Guardar Array
    

    let somaDeArray = array1.reduce((position, valorAtual) => // Aqui acontecerá a soma dos valores dentro da array //Exp. Position = [0] e valorAtual = [1]
        position + valorAtual
    );

    while (quantidade < array1.length) { // Enquanto a quantidade for menor que o tamanho do array isso acontecerá

        quantidade += 1   // Aumente o numero dentro da variavel dependendo do tamanho do array
    };

    let somaFinal = somaDeArray / quantidade; // A soma dos valores do Array dividido pelo tamanho dele

    return somaFinal; // Retornar a Média
}

// Chamar a função

console.log(calcularMedia([1, 2, 3, 4, 5])); // 3
console.log(calcularMedia([10, 20, 30])); // 20
