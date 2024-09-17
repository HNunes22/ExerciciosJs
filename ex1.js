// FUNÇÃO DE VERIFICAR PARES E ÍMPARES //

// Variavel de Array com numeros, e novos arrays //
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const parArray = [];
const imparArray = [];

// Função de verificar e adicionar valores a um novo array dependendo de sua condição //

const arrayVerificar = function () {

    for (let i = 0; i < array.length; i++) { // Ter um loop até o comprimento total do Array com valores //

        if (array[i] % 2 == 0) { // Verificar se o numero é par //

            parArray.push(array[i]); // Adicionar valores a o array de Pares //

    } else if (array[i] % 2 == 1) { // Verificar se o número é ímpar //

        imparArray.push(array[i]); // Adicionar valores a o array Impares //
    }
    
};
};

arrayVerificar(); // Chamar a função //

// Mostrar no console o resultado //

console.log('Esses números são pares: ' + parArray) ;
console.log('Esses números são ímpares: ' + imparArray);






